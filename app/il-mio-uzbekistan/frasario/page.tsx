
"use client";

import { useEffect, useState } from "react";

type Language = "it" | "en";
type Category = "greetings" | "food" | "travel" | "emergency";

const phrases: {
  id: number;
  category: Category;
  it: string;
  en: string;
  uz: string;
}[] = [
  { id: 1, category: "greetings", it: "Ciao", en: "Hello", uz: "Salom" },
  { id: 2, category: "greetings", it: "Buongiorno", en: "Good morning", uz: "Xayrli tong" },
  { id: 3, category: "greetings", it: "Arrivederci", en: "Goodbye", uz: "Xayr" },
  { id: 4, category: "greetings", it: "Grazie", en: "Thank you", uz: "Rahmat" },
  { id: 5, category: "greetings", it: "Per favore", en: "Please", uz: "Iltimos" },
  { id: 6, category: "greetings", it: "Sì", en: "Yes", uz: "Ha" },
  { id: 7, category: "greetings", it: "No", en: "No", uz: "Yo'q" },
  { id: 8, category: "greetings", it: "Come stai?", en: "How are you?", uz: "Qalaysiz?" },
  { id: 9, category: "greetings", it: "Sto bene", en: "I'm fine", uz: "Yaxshiman" },

  { id: 10, category: "food", it: "Acqua", en: "Water", uz: "Suv" },
  { id: 11, category: "food", it: "Tè", en: "Tea", uz: "Choy" },
  { id: 12, category: "food", it: "Pane", en: "Bread", uz: "Non" },
  { id: 13, category: "food", it: "Il conto, per favore", en: "The bill, please", uz: "Hisobni bering, iltimos" },
  { id: 14, category: "food", it: "È molto buono!", en: "It's delicious!", uz: "Juda mazali!" },
  { id: 15, category: "food", it: "Sono vegetariano/a", en: "I'm vegetarian", uz: "Men vegetarianman" },

  { id: 16, category: "travel", it: "Dov'è il bagno?", en: "Where is the toilet?", uz: "Hojatxona qayerda?" },
  { id: 17, category: "travel", it: "Quanto costa?", en: "How much is it?", uz: "Bu qancha turadi?" },
  { id: 18, category: "travel", it: "Dov'è l'hotel?", en: "Where is the hotel?", uz: "Mehmonxona qayerda?" },
  { id: 19, category: "travel", it: "Mi aiuti, per favore", en: "Please help me", uz: "Menga yordam bering, iltimos" },
  { id: 20, category: "travel", it: "Non capisco", en: "I don't understand", uz: "Tushunmadim" },
  { id: 21, category: "travel", it: "Parla inglese?", en: "Do you speak English?", uz: "Inglizcha gapirasizmi?" },

  { id: 22, category: "emergency", it: "Aiuto!", en: "Help!", uz: "Yordam!" },
  { id: 23, category: "emergency", it: "Ho bisogno di un medico", en: "I need a doctor", uz: "Menga shifokor kerak" },
  { id: 24, category: "emergency", it: "Chiami un'ambulanza", en: "Call an ambulance", uz: "Tez yordam chaqiring" },
  { id: 25, category: "emergency", it: "Ho perso il passaporto", en: "I've lost my passport", uz: "Pasportimni yo'qotdim" },
];

const translations = {
  it: {
    back: "← Torna alla valigia",
    title: "Parla uzbeko!",
    subtitle: "Le parole utili per il tuo viaggio",
    search: "Cerca una parola o una frase...",
    all: "Tutte",
    categories: {
      greetings: "Saluti e cortesia",
      food: "Cibo e ristorante",
      travel: "Durante il viaggio",
      emergency: "Emergenze",
    },
    empty: "Nessuna frase trovata",
  },
  en: {
    back: "← Back to packing list",
    title: "Speak Uzbek!",
    subtitle: "Useful words for your journey",
    search: "Search for a word or phrase...",
    all: "All",
    categories: {
      greetings: "Greetings and courtesy",
      food: "Food and restaurants",
      travel: "During your trip",
      emergency: "Emergencies",
    },
    empty: "No phrases found",
  },
};

export default function PhrasebookPage() {
  const [lang, setLang] = useState<Language>("it");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");

  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const savedLang = localStorage.getItem("uzbekistan-packing-lang");

    if (urlLang === "it" || urlLang === "en") {
      setLang(urlLang);
    } else if (savedLang === "it" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const t = translations[lang];

  const filtered = phrases.filter((phrase) => {
    const matchesCategory =
      category === "all" || phrase.category === category;

    const query = search.toLocaleLowerCase().trim();

    const matchesSearch =
      !query ||
      phrase.it.toLocaleLowerCase().includes(query) ||
      phrase.en.toLocaleLowerCase().includes(query) ||
      phrase.uz.toLocaleLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

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
          <div className="mb-3 text-5xl">🇺🇿</div>

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

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t.search}
          aria-label={t.search}
          className="mb-5 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-white/50 focus:border-[#D4AF37]"
        />

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-full px-4 py-2 text-sm ${
              category === "all"
                ? "bg-[#D4AF37] font-semibold text-[#16072F]"
                : "border border-white/20 bg-white/5"
            }`}
          >
            {t.all}
          </button>

          {(Object.keys(t.categories) as Category[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCategory(key)}
              className={`rounded-full px-4 py-2 text-sm ${
                category === key
                  ? "bg-[#D4AF37] font-semibold text-[#16072F]"
                  : "border border-white/20 bg-white/5"
              }`}
            >
              {t.categories[key]}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((phrase) => (
            <article
              key={phrase.id}
              className="rounded-2xl border border-white/15 bg-white/5 p-4"
            >
              <p className="text-sm text-white/70">
                {phrase[lang]}
              </p>

              <p className="mt-1 text-xl font-bold text-[#D4AF37]">
                {phrase.uz}
              </p>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="py-8 text-center text-white/60">
              {t.empty}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
