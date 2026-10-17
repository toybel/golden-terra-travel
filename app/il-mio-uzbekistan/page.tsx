"use client";

import { useEffect, useState } from "react";
import InformazioniUtili from "../../components/InformazioniUtili";

const translations = {
  it: {
    back: "← Torna alla Home",
    title: "La mia valigia",
    subtitle: "Prepara il tuo viaggio in Uzbekistan!",
    progress: "Hai preparato",
    of: "di",
    items: "cose",
    reset: "Azzera la lista",
    toolsTitle: "🇺🇿 I tuoi strumenti di viaggio",
    packingTitle: "🧳 Cosa mettere in valigia",
    categories: [
      {
        title: "Documenti",
        items: [
          "Passaporto",
          "Biglietti aerei",
          "Assicurazione viaggio",
          "Prenotazioni e voucher",
        ],
      },
      {
        title: "Abbigliamento",
        items: [
          "Scarpe comode",
          "Vestiti adatti alla stagione",
          "Giacca o felpa",
          "Cappello e occhiali da sole",
        ],
      },
      {
        title: "Salute e igiene",
        items: [
          "Medicinali personali",
          "Kit di primo soccorso",
          "Protezione solare",
          "Prodotti per l'igiene",
        ],
      },
      {
        title: "Tecnologia",
        items: [
          "Telefono e caricabatterie",
          "Power bank",
          "Adattatore universale",
          "Fotocamera",
        ],
      },
      {
        title: "Altre cose utili",
        items: [
          "Contanti e carte",
          "Zainetto giornaliero",
          "Borraccia",
          "Una copia dei documenti",
        ],
      },
    ],
  },
  en: {
    back: "← Back to Home",
    title: "My packing list",
    subtitle: "Get ready for your trip to Uzbekistan!",
    progress: "You've packed",
    of: "of",
    items: "items",
    reset: "Reset checklist",
    toolsTitle: "🇺🇿 Your travel tools",
    packingTitle: "🧳 What to pack",
    categories: [
      {
        title: "Documents",
        items: [
          "Passport",
          "Flight tickets",
          "Travel insurance",
          "Bookings and vouchers",
        ],
      },
      {
        title: "Clothing",
        items: [
          "Comfortable shoes",
          "Seasonal clothing",
          "Jacket or sweatshirt",
          "Hat and sunglasses",
        ],
      },
      {
        title: "Health and hygiene",
        items: [
          "Personal medication",
          "First aid kit",
          "Sunscreen",
          "Toiletries",
        ],
      },
      {
        title: "Technology",
        items: [
          "Phone and charger",
          "Power bank",
          "Universal adapter",
          "Camera",
        ],
      },
      {
        title: "Other essentials",
        items: [
          "Cash and cards",
          "Day backpack",
          "Water bottle",
          "Copies of documents",
        ],
      },
    ],
  },
};

export default function MyUzbekistanPage() {
  const [lang, setLang] = useState<"it" | "en">("it");
  const [checked, setChecked] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = localStorage.getItem("uzbekistan-packing-lang");

    if (urlLang === "it" || urlLang === "en") {
      setLang(urlLang);
    } else if (savedLang === "it" || savedLang === "en") {
      setLang(savedLang);
    }

    try {
      const saved = JSON.parse(
        localStorage.getItem("uzbekistan-packing-items") || "[]"
      );

      if (Array.isArray(saved)) {
        setChecked(
          saved.filter(
            (item): item is string => typeof item === "string"
          )
        );
      }
    } catch {
      setChecked([]);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    localStorage.setItem(
      "uzbekistan-packing-items",
      JSON.stringify(checked)
    );
    localStorage.setItem("uzbekistan-packing-lang", lang);
  }, [checked, lang, ready]);

  const t = translations[lang];

  const total = t.categories.reduce(
    (sum, category) => sum + category.items.length,
    0
  );

  const percentage = Math.round((checked.length / total) * 100);

  function toggleItem(id: string) {
    setChecked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#16072F] px-4 py-8 text-white">
      <div className="mx-auto max-w-2xl">

        <div className="mb-6 flex items-center justify-between gap-3">
          <a href="/" className="text-sm text-[#D4AF37]">
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

        <div className="mb-8 text-center">
          <div className="mb-3 text-5xl">🧳</div>

          <p className="text-xs tracking-[0.3em] text-[#D4AF37]">
            GOLDEN TERRA TRAVEL
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {t.title}
          </h1>

          <p className="mt-3 text-white/70">
            {t.subtitle}
          </p>
        </div>

        <h2 className="mb-5 mt-9 text-center text-2xl font-bold text-[#D4AF37]">
          {t.toolsTitle}
        </h2>

        <a
          href={`/il-mio-uzbekistan/frasario?lang=${lang}`}
          className="mb-6 block rounded-3xl border border-[#D4AF37]/40 bg-white/5 p-5 text-center transition hover:border-[#D4AF37] hover:bg-white/10"
        >
          <div className="mb-2 text-4xl">🗣️</div>

          <h3 className="text-xl font-bold text-[#D4AF37]">
            {lang === "it" ? "Parla uzbeko!" : "Speak Uzbek!"}
          </h3>

          <p className="mt-2 text-sm text-white/70">
            {lang === "it"
              ? "Scopri 25 parole e frasi utili per il tuo viaggio."
              : "Discover 25 useful words and phrases for your journey."}
          </p>

          <span className="mt-4 inline-block rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-[#16072F]">
            {lang === "it" ? "Apri il frasario" : "Open phrasebook"}
          </span>
        </a>

        <a
          href={`/il-mio-uzbekistan/cambio?lang=${lang}`}
          className="mb-6 block rounded-3xl border border-[#D4AF37]/40 bg-white/5 p-5 text-center transition hover:border-[#D4AF37] hover:bg-white/10"
        >
          <div className="mb-2 text-4xl">💱</div>

          <h3 className="text-xl font-bold text-[#D4AF37]">
            {lang === "it" ? "Cambio valuta" : "Currency converter"}
          </h3>

          <p className="mt-2 text-sm text-white/70">
            {lang === "it"
              ? "Converti euro e som uzbeki con il cambio aggiornato."
              : "Convert euros, US dollars and British pounds to Uzbek som."}
          </p>

          <span className="mt-4 inline-block rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-[#16072F]">
            {lang === "it" ? "Apri il convertitore" : "Open converter"}
          </span>
        </a>

        <a
          href={`/il-mio-uzbekistan/meteo?lang=${lang}`}
          className="mb-6 block rounded-3xl border border-[#D4AF37]/40 bg-white/5 p-5 text-center transition hover:border-[#D4AF37] hover:bg-white/10"
        >
          <div className="mb-2 text-4xl">🌤️</div>

          <h3 className="text-xl font-bold text-[#D4AF37]">
            {lang === "it" ? "Meteo Uzbekistan" : "Uzbekistan Weather"}
          </h3>

          <p className="mt-2 text-sm text-white/70">
            {lang === "it"
              ? "Controlla il tempo a Tashkent, Samarcanda, Bukhara e Khiva."
              : "Check the weather in Tashkent, Samarkand, Bukhara and Khiva."}
          </p>

          <span className="mt-4 inline-block rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-[#16072F]">
            {lang === "it" ? "Controlla il meteo" : "Check weather"}
          </span>
        </a>

        <a
          href={`/il-mio-uzbekistan/posizione?lang=${lang}`}
          className="mb-6 block rounded-3xl border border-[#D4AF37]/40 bg-white/5 p-5 text-center transition hover:border-[#D4AF37] hover:bg-white/10"
        >
          <div className="mb-2 text-4xl">📍</div>

          <h3 className="text-xl font-bold text-[#D4AF37]">
            {lang === "it" ? "La mia posizione" : "My location"}
          </h3>

          <p className="mt-2 text-sm text-white/70">
            {lang === "it"
              ? "Trova la tua posizione sulla mappa e condividila tramite WhatsApp."
              : "Find your location on the map and share it via WhatsApp."}
          </p>

          <span className="mt-4 inline-block rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-[#16072F]">
            {lang === "it" ? "Apri la mia posizione" : "Open my location"}
          </span>
        </a>

        <InformazioniUtili lang={lang} />

        <h2 className="mb-6 mt-10 text-center text-2xl font-bold text-[#D4AF37]">
          {t.packingTitle}
        </h2>

        <section className="mb-6 rounded-3xl border border-[#D4AF37]/30 bg-white/5 p-5">
          <p className="mb-3 text-center font-semibold">
            {t.progress} {checked.length} {t.of} {total} {t.items}
          </p>

          <div className="h-3 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-[#D4AF37] transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="mt-2 text-center text-sm text-[#D4AF37]">
            {percentage}%
          </p>
        </section>

        <div className="space-y-5">
          {t.categories.map((category, categoryIndex) => (
            <section
              key={categoryIndex}
              className="rounded-3xl border border-white/15 bg-white/5 p-5"
            >
              <h3 className="mb-4 text-xl font-bold text-[#D4AF37]">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const id = `${categoryIndex}-${itemIndex}`;
                  const isChecked = checked.includes(id);

                  return (
                    <label
                      key={id}
                      className="flex cursor-pointer items-center gap-3 rounded-xl bg-white/5 p-3"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(id)}
                        className="h-5 w-5 accent-[#D4AF37]"
                      />

                      <span
                        className={
                          isChecked ? "text-white/50 line-through" : ""
                        }
                      >
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                lang === "it"
                  ? "Vuoi azzerare la lista?"
                  : "Reset the checklist?"
              )
            ) {
              setChecked([]);
            }
          }}
          className="mt-8 w-full rounded-full border border-white/30 px-5 py-3 text-sm text-white/80"
        >
          {t.reset}
        </button>

      </div>
    </main>
  );
}



