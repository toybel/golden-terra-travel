


"use client";

import { useEffect, useState } from "react";

type Language = "it" | "en";
type ForeignCurrency = "EUR" | "USD" | "GBP";
type Direction = "toUZS" | "fromUZS";

type RateResponse = {
  date: string;
  base: string;
  quote: string;
  rate: number;
};

const currencies: ForeignCurrency[] = ["EUR", "USD", "GBP"];

const translations = {
  it: {
    back: "← Torna alla valigia",
    title: "Cambio valuta",
    subtitle: "Converti euro e som uzbeki in pochi secondi",
    currency: "Scegli la valuta",
    from: "Da",
    to: "A",
    rate: "Tasso di riferimento",
    updated: "Aggiornato al",
    loading: "Caricamento del cambio...",
    error: "Impossibile aggiornare il cambio. Controlla la connessione.",
    retry: "Riprova",
    swap: "Inverti la conversione",
    note: "Cambio indicativo. Banche e uffici di cambio possono applicare tassi differenti.",
    source: "Fonte: Frankfurter",
  },
  en: {
    back: "← Back to packing list",
    title: "Currency converter",
    subtitle: "Convert euros, US dollars and British pounds to Uzbek som and back",
    currency: "Choose currency",
    from: "From",
    to: "To",
    rate: "Reference exchange rate",
    updated: "Updated on",
    loading: "Loading exchange rate...",
    error: "Unable to update the exchange rate. Check your connection.",
    retry: "Try again",
    swap: "Reverse conversion",
    note: "Indicative exchange rate. Banks and exchange offices may offer different rates.",
    source: "Source: Frankfurter",
  },
};

export default function CurrencyPage() {
  const [lang, setLang] = useState<Language>("it");
  const [currency, setCurrency] = useState<ForeignCurrency>("EUR");
  const [direction, setDirection] = useState<Direction>("toUZS");
  const [amount, setAmount] = useState("100");

  const [rate, setRate] = useState<number | null>(null);
  const [rateDate, setRateDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = localStorage.getItem("uzbekistan-packing-lang");

    if (urlLang === "it" || urlLang === "en") {
      setLang(urlLang);
    } else if (savedLang === "it" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    if (lang === "it" && currency !== "EUR") {
      setCurrency("EUR");
    }
  }, [lang, currency]);

  const activeCurrency = lang === "it" ? "EUR" : currency;

  useEffect(() => {
    const controller = new AbortController();

    async function loadRate() {
      setLoading(true);
      setError(false);
      setRate(null);

      try {
        const response = await fetch(
          `https://api.frankfurter.dev/v2/rate/${activeCurrency.toLowerCase()}/uzs`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Exchange rate unavailable");
        }

        const data: RateResponse = await response.json();

        if (
          data.base !== activeCurrency ||
          data.quote !== "UZS" ||
          !Number.isFinite(data.rate) ||
          data.rate <= 0 ||
          !data.date
        ) {
          throw new Error("Invalid exchange rate");
        }

        setRate(data.rate);
        setRateDate(data.date);
      } catch {
        if (controller.signal.aborted) return;

        setRate(null);
        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRate();

    return () => controller.abort();
  }, [activeCurrency, refresh]);

  const t = translations[lang];

  const from = direction === "toUZS" ? activeCurrency : "UZS";
  const to = direction === "toUZS" ? "UZS" : activeCurrency;

  const numericAmount = Number(amount);
  const validAmount =
    amount.trim() !== "" &&
    Number.isFinite(numericAmount) &&
    numericAmount >= 0;

  const converted =
    rate !== null && validAmount
      ? direction === "toUZS"
        ? numericAmount * rate
        : numericAmount / rate
      : null;

  const locale = lang === "it" ? "it-IT" : "en-GB";

  function formatMoney(value: number, code: string) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: code,
      maximumFractionDigits: code === "UZS" ? 0 : 2,
    }).format(value);
  }

  function swap() {
    setDirection((current) =>
      current === "toUZS" ? "fromUZS" : "toUZS"
    );
    setAmount("");
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
          <div className="mb-3 text-5xl">💱</div>

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

        <section className="rounded-3xl border border-[#D4AF37]/30 bg-white/5 p-6">
          {lang === "en" && (
            <div className="mb-7">
              <p className="mb-3 text-sm text-white/70">
                {t.currency}
              </p>

              <div className="grid grid-cols-3 gap-2">
                {currencies.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrency(code)}
                    className={`rounded-2xl px-3 py-3 font-bold transition ${
                      activeCurrency === code
                        ? "bg-[#D4AF37] text-[#16072F]"
                        : "border border-white/20 bg-white/5 text-white"
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-5">
            <label
              htmlFor="amount"
              className="mb-2 block text-sm text-white/70"
            >
              {t.from} · {from}
            </label>

            <input
              id="amount"
              type="number"
              min="0"
              step="any"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="w-full rounded-2xl border border-white/20 bg-[#16072F] px-4 py-4 text-2xl font-semibold text-white outline-none focus:border-[#D4AF37]"
              placeholder="0"
            />
          </div>

          <div className="mb-5 text-center">
            <button
              type="button"
              onClick={swap}
              className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/20"
              aria-label={t.swap}
            >
              ⇅ {activeCurrency} / UZS
            </button>
          </div>

          <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-5 text-center">
            <p className="mb-2 text-sm text-white/70">
              {t.to} · {to}
            </p>

            {loading ? (
              <p className="text-white/70">{t.loading}</p>
            ) : converted !== null ? (
              <p className="break-words text-3xl font-bold text-[#D4AF37]">
                {formatMoney(converted, to)}
              </p>
            ) : (
              <p className="text-xl text-white/60">—</p>
            )}
          </div>

          {rate !== null && !loading && (
            <div className="mt-6 text-center">
              <p className="text-sm text-white/70">{t.rate}</p>

              <p className="mt-2 font-semibold text-[#D4AF37]">
                1 {activeCurrency} = {formatMoney(rate, "UZS")}
              </p>

              <p className="mt-2 text-xs text-white/60">
                {t.updated} {rateDate}
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 text-center">
              <p className="text-sm text-white/70">{t.error}</p>

              <button
                type="button"
                onClick={() => setRefresh((value) => value + 1)}
                className="mt-3 rounded-full border border-[#D4AF37] px-5 py-2 text-sm text-[#D4AF37]"
              >
                {t.retry}
              </button>
            </div>
          )}
        </section>

        <p className="mt-6 text-center text-sm leading-relaxed text-white/60">
          {t.note}
        </p>

        <p className="mt-3 text-center text-xs text-white/40">
          {t.source}
        </p>
      </div>
    </main>
  );
}


