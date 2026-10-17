
"use client";

import { useEffect, useState } from "react";

type Language = "it" | "en";
type City = "tashkent" | "samarkand" | "bukhara" | "khiva";

type WeatherData = {
  updated: string;
  temperature: number;
  humidity: number;
  wind: number;
  symbol: string;
  days: {
    date: string;
    min: number;
    max: number;
    symbol: string;
    precipitation: number;
  }[];
};

const cities: Record<City, { it: string; en: string }> = {
  tashkent: { it: "Tashkent", en: "Tashkent" },
  samarkand: { it: "Samarcanda", en: "Samarkand" },
  bukhara: { it: "Bukhara", en: "Bukhara" },
  khiva: { it: "Khiva", en: "Khiva" },
};

const translations = {
  it: {
    back: "← Torna alla valigia",
    title: "Meteo Uzbekistan",
    subtitle: "Il tempo nelle città del tuo viaggio",
    now: "Previsione attuale",
    humidity: "Umidità",
    wind: "Vento",
    forecast: "Previsioni per i prossimi 5 giorni",
    high: "Max",
    low: "Min",
    rain: "Precipitazioni previste",
    updated: "Previsione riferita alle",
    loading: "Caricamento del meteo...",
    error: "Impossibile caricare il meteo.",
    retry: "Riprova",
    note: "Le previsioni possono cambiare. Controllale prima delle escursioni.",
    source: "Dati meteorologici: MET Norway",
  },
  en: {
    back: "← Back to packing list",
    title: "Uzbekistan Weather",
    subtitle: "Weather in the cities on your journey",
    now: "Current forecast",
    humidity: "Humidity",
    wind: "Wind",
    forecast: "Next 5 days",
    high: "High",
    low: "Low",
    rain: "Forecast precipitation",
    updated: "Forecast valid at",
    loading: "Loading weather...",
    error: "Unable to load weather.",
    retry: "Try again",
    note: "Forecasts may change. Check before your excursions.",
    source: "Weather data: MET Norway",
  },
};

function condition(symbol: string, lang: Language) {
  const code = symbol.toLowerCase();

  if (code.includes("thunder")) {
    return {
      icon: "⛈️",
      text: lang === "it" ? "Temporale" : "Thunderstorm",
    };
  }

  if (code.includes("snow") || code.includes("sleet")) {
    return {
      icon: "❄️",
      text: lang === "it" ? "Neve" : "Snow",
    };
  }

  if (code.includes("rain") || code.includes("drizzle")) {
    return {
      icon: "🌧️",
      text: lang === "it" ? "Pioggia" : "Rain",
    };
  }

  if (code.includes("fog")) {
    return {
      icon: "🌫️",
      text: lang === "it" ? "Nebbia" : "Fog",
    };
  }

  if (code.includes("partlycloudy")) {
    return {
      icon: "🌤️",
      text: lang === "it" ? "Poco nuvoloso" : "Partly cloudy",
    };
  }

  if (code.includes("cloudy")) {
    return {
      icon: "☁️",
      text: lang === "it" ? "Nuvoloso" : "Cloudy",
    };
  }

  if (code.includes("clearsky") || code.includes("fair")) {
    return {
      icon: "☀️",
      text: lang === "it" ? "Sereno" : "Clear",
    };
  }

  return {
    icon: "🌡️",
    text: lang === "it" ? "Variabile" : "Variable",
  };
}

export default function WeatherPage() {
  const [lang, setLang] = useState<Language>("it");
  const [city, setCity] = useState<City>("tashkent");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const urlLang = new URLSearchParams(
      window.location.search
    ).get("lang");

    const savedLang = localStorage.getItem(
      "uzbekistan-packing-lang"
    );

    if (urlLang === "it" || urlLang === "en") {
      setLang(urlLang);
    } else if (savedLang === "it" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadWeather() {
      setLoading(true);
      setError(false);
      setWeather(null);

      try {
        const response = await fetch(
          `/api/meteo?city=${city}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Weather unavailable");
        }

        const data: WeatherData = await response.json();

        if (
          !Number.isFinite(data.temperature) ||
          !Array.isArray(data.days) ||
          !data.days.length
        ) {
          throw new Error("Invalid weather data");
        }

        setWeather(data);
      } catch {
        if (!controller.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadWeather();

    return () => controller.abort();
  }, [city, refresh]);

  const t = translations[lang];
  const locale = lang === "it" ? "it-IT" : "en-GB";

  function formatDay(date: string) {
    return new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    }).format(new Date(`${date}T12:00:00Z`));
  }

  function formatTime(date: string) {
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Tashkent",
    }).format(new Date(date));
  }

  return (
    <main className="min-h-screen bg-[#16072F] px-4 py-8 text-white">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <a
            href={`/il-mio-uzbekistan?lang=${lang}`}
            className="text-sm text-[#D4AF37]"
          >
            {t.back}
          </a>

          <div className="flex gap-2">
            {(["it", "en"] as const).map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setLang(language)}
                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                  lang === language
                    ? "bg-[#D4AF37] text-[#16072F]"
                    : "border border-white/30 text-white"
                }`}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <header className="mb-8 text-center">
          <div className="mb-3 text-5xl">🌤️</div>

          <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
            GOLDEN TERRA TRAVEL
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {t.title}
          </h1>

          <p className="mt-3 text-white/70">
            {t.subtitle}
          </p>
        </header>

        <div className="mb-6 grid grid-cols-2 gap-3">
          {(Object.keys(cities) as City[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCity(key)}
              className={`rounded-2xl px-4 py-4 font-semibold transition ${
                city === key
                  ? "bg-[#D4AF37] text-[#16072F]"
                  : "border border-white/20 bg-white/5 text-white"
              }`}
            >
              {cities[key][lang]}
            </button>
          ))}
        </div>

        {loading && (
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center">
            {t.loading}
          </div>
        )}

        {error && (
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center">
            <p>{t.error}</p>

            <button
              type="button"
              onClick={() => setRefresh((value) => value + 1)}
              className="mt-5 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#16072F]"
            >
              {t.retry}
            </button>
          </div>
        )}

        {weather && !loading && (
          <>
            <section className="rounded-3xl border border-[#D4AF37]/30 bg-white/5 p-6 text-center">
              <p className="text-sm text-[#D4AF37]">
                {t.now} · {cities[city][lang]}
              </p>

              <div className="mt-5 text-6xl">
                {condition(weather.symbol, lang).icon}
              </div>

              <p className="mt-3 text-5xl font-bold">
                {Math.round(weather.temperature)}°C
              </p>

              <p className="mt-3 text-lg text-[#D4AF37]">
                {condition(weather.symbol, lang).text}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/15 pt-6">
                <div>
                  <p className="text-xs text-white/60">
                    {t.humidity}
                  </p>
                  <p className="mt-2 font-bold">
                    {Math.round(weather.humidity)}%
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/60">
                    {t.wind}
                  </p>
                  <p className="mt-2 font-bold">
                    {Math.round(weather.wind)} m/s
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs text-white/50">
                {t.updated} {formatTime(weather.updated)}
                {" · "}UZT
              </p>
            </section>

            <section className="mt-6">
              <h2 className="mb-4 text-xl font-bold text-[#D4AF37]">
                {t.forecast}
              </h2>

              <div className="space-y-3">
                {weather.days.map((day) => {
                  const info = condition(day.symbol, lang);

                  return (
                    <article
                      key={day.date}
                      className="rounded-2xl border border-white/15 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold">
                            {formatDay(day.date)}
                          </p>
                          <p className="mt-1 text-xs text-white/60">
                            {info.text}
                          </p>
                        </div>

                        <span className="text-3xl">
                          {info.icon}
                        </span>

                        <div className="text-right">
                          <p className="font-bold text-[#D4AF37]">
                            {Math.round(day.max)}°
                          </p>
                          <p className="text-sm text-white/60">
                            {Math.round(day.min)}°
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-white/60">
                        ☔ {t.rain}:{" "}
                        {day.precipitation.toFixed(1)} mm
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          </>
        )}

        <p className="mt-6 text-center text-sm leading-relaxed text-white/60">
          {t.note}
        </p>

        <p className="mt-3 text-center text-xs text-white/50">
          <a
            href="https://www.met.no/en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {t.source}
          </a>
          {" · "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CC BY 4.0
          </a>
        </p>
      </div>
    </main>
  );
}
