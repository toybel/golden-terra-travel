
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const cities = {
  tashkent: [41.2995, 69.2401],
  samarkand: [39.6542, 66.9597],
  bukhara: [39.7747, 64.4286],
  khiva: [41.3783, 60.3639],
} as const;

type City = keyof typeof cities;

type ForecastEntry = {
  time: string;
  data: {
    instant: {
      details: {
        air_temperature: number;
        relative_humidity: number;
        wind_speed: number;
        air_temperature_percentile_50?: number;
      };
    };
    next_1_hours?: {
      summary?: { symbol_code?: string };
      details?: { precipitation_amount?: number };
    };
    next_6_hours?: {
      summary?: { symbol_code?: string };
      details?: { precipitation_amount?: number };
    };
  };
};

function localDate(time: string) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(time));
}

function localHour(time: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    hour12: false,
  }).format(new Date(time));
}

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");

  if (!city || !(city in cities)) {
    return NextResponse.json(
      { error: "Invalid city" },
      { status: 400 }
    );
  }

  const [lat, lon] = cities[city as City];

  try {
    const url =
      "https://api.met.no/weatherapi/locationforecast/2.0/compact" +
      `?lat=${lat}&lon=${lon}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "GoldenTerraTravelWeather/1.0 https://app.goldenterratravel.com",
        Accept: "application/json",
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`MET Norway: ${response.status}`);
    }

    const json = await response.json();
    const entries: ForecastEntry[] =
      json?.properties?.timeseries ?? [];

    if (!entries.length) {
      throw new Error("No forecast available");
    }

    const current = entries[0];
    const details = current.data.instant.details;

    const days = new Map<
      string,
      {
        date: string;
        min: number;
        max: number;
        symbol: string;
        precipitation: number;
      }
    >();

    for (const entry of entries) {
      const date = localDate(entry.time);
      const temperature =
        entry.data.instant.details.air_temperature;

      if (!Number.isFinite(temperature)) continue;

      const symbol =
        entry.data.next_1_hours?.summary?.symbol_code ??
        entry.data.next_6_hours?.summary?.symbol_code ??
        "cloudy";

      const precipitation =
        entry.data.next_1_hours?.details
          ?.precipitation_amount ?? 0;

      const existing = days.get(date);

      if (!existing) {
        days.set(date, {
          date,
          min: temperature,
          max: temperature,
          symbol,
          precipitation,
        });
      } else {
        existing.min = Math.min(existing.min, temperature);
        existing.max = Math.max(existing.max, temperature);
        existing.precipitation += precipitation;

        if (localHour(entry.time) === "12") {
          existing.symbol = symbol;
        }
      }
    }

    return NextResponse.json({
      updated: current.time,
      temperature: details.air_temperature,
      humidity: details.relative_humidity,
      wind: details.wind_speed,
      symbol:
        current.data.next_1_hours?.summary?.symbol_code ??
        current.data.next_6_hours?.summary?.symbol_code ??
        "cloudy",
      days: [...days.values()].slice(0, 5),
      source: "MET Norway",
    });
  } catch {
    return NextResponse.json(
      { error: "Weather service unavailable" },
      { status: 502 }
    );
  }
}
