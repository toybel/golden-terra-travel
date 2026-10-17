
"use client";

import { useEffect, useState } from "react";

type Language = "it" | "en";

type Position = {
  latitude: number;
  longitude: number;
  accuracy: number;
};

const translations = {
  it: {
    back: "← Torna alla valigia",
    title: "La mia posizione",
    subtitle: "Ritrova e condividi il punto in cui ti trovi.",
    privacy:
      "La tua posizione viene richiesta soltanto quando premi il pulsante. Non viene salvata né inviata a Golden Terra Travel.",
    find: "📍 Trova la mia posizione",
    searching: "Sto cercando la tua posizione...",
    found: "Posizione trovata!",
    accuracy: "Precisione indicativa",
    meters: "metri",
    maps: "🗺️ Apri su Google Maps",
    whatsapp: "💬 Condividi su WhatsApp",
    refresh: "🔄 Aggiorna la posizione",
    mapTitle: "La tua posizione sulla mappa",
    message: "Ecco la mia posizione:",
    unsupported: "Il tuo dispositivo non supporta la geolocalizzazione.",
    denied:
      "Permesso negato. Per utilizzare questa funzione, abilita la posizione nelle impostazioni del browser.",
    unavailable:
      "Non riesco a determinare la posizione. Controlla che il GPS sia attivo e riprova.",
    timeout: "La ricerca della posizione ha impiegato troppo tempo. Riprova.",
    generic: "Si è verificato un problema. Riprova.",
    secure:
      "Per utilizzare il GPS, apri la pagina tramite HTTPS oppure su localhost.",
    note:
      "Controlla che il punto sulla mappa sia corretto prima di condividerlo.",
  },
  en: {
    back: "← Back to packing list",
    title: "My location",
    subtitle: "Find and share your current location.",
    privacy:
      "Your location is requested only when you press the button. It is not stored or sent to Golden Terra Travel.",
    find: "📍 Find my location",
    searching: "Finding your location...",
    found: "Location found!",
    accuracy: "Approximate accuracy",
    meters: "metres",
    maps: "🗺️ Open in Google Maps",
    whatsapp: "💬 Share on WhatsApp",
    refresh: "🔄 Refresh location",
    mapTitle: "Your location on the map",
    message: "Here is my location:",
    unsupported: "Your device does not support geolocation.",
    denied:
      "Location permission denied. Enable location access in your browser settings.",
    unavailable:
      "Unable to determine your location. Check that GPS is enabled and try again.",
    timeout: "Finding your location took too long. Please try again.",
    generic: "Something went wrong. Please try again.",
    secure:
      "Location access requires HTTPS or localhost.",
    note:
      "Check that the location on the map is correct before sharing it.",
  },
};

export default function LocationPage() {
  const [lang, setLang] = useState<Language>("it");
  const [position, setPosition] = useState<Position | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");

    if (urlLang === "it" || urlLang === "en") {
      setLang(urlLang);
    } else {
      const savedLang = localStorage.getItem("uzbekistan-packing-lang");

      if (savedLang === "it" || savedLang === "en") {
        setLang(savedLang);
      }
    }
  }, []);

  const t = translations[lang];

  function findLocation() {
    setError("");
    setLoading(true);

    if (!window.isSecureContext) {
      setError(t.secure);
      setLoading(false);
      return;
    }

    if (!("geolocation" in navigator)) {
      setError(t.unsupported);
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (result) => {
        setPosition({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
          accuracy: result.coords.accuracy,
        });

        setLoading(false);
      },
      (geoError) => {
        setPosition(null);

        if (geoError.code === 1) {
          setError(t.denied);
        } else if (geoError.code === 2) {
          setError(t.unavailable);
        } else if (geoError.code === 3) {
          setError(t.timeout);
        } else {
          setError(t.generic);
        }

        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }
    );
  }

  const mapsUrl = position
    ? `https://www.google.com/maps?q=${position.latitude},${position.longitude}`
    : "";

  const whatsappUrl = position
    ? `https://wa.me/?text=${encodeURIComponent(
        `${t.message}\n${mapsUrl}`
      )}`
    : "";

  const mapEmbedUrl = position
    ? `https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=16&output=embed`
    : "";

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
                onClick={() => {
                  setLang(language);
                  setError("");
                }}
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
          <div className="mb-3 text-5xl">📍</div>

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

        <section className="mb-6 rounded-3xl border border-[#D4AF37]/30 bg-white/5 p-5">
          <p className="mb-5 text-center text-sm leading-relaxed text-white/75">
            🔒 {t.privacy}
          </p>

          <button
            type="button"
            onClick={findLocation}
            disabled={loading}
            className="w-full rounded-full bg-[#D4AF37] px-5 py-4 font-bold text-[#16072F] transition hover:opacity-90 disabled:opacity-60"
          >
            {loading
              ? t.searching
              : position
              ? t.refresh
              : t.find}
          </button>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-center text-sm text-red-200"
            >
              {error}
            </p>
          )}
        </section>

        {position && (
          <>
            <section className="mb-6 rounded-3xl border border-[#D4AF37]/30 bg-white/5 p-5 text-center">
              <h2 className="text-xl font-bold text-[#D4AF37]">
                ✓ {t.found}
              </h2>

              <p className="mt-3 text-sm text-white/70">
                {t.accuracy}: ±{Math.round(position.accuracy)} {t.meters}
              </p>

              <p className="mt-3 text-xs text-white/50">
                {t.note}
              </p>
            </section>

            <section className="mb-6 overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-white/5">
              <h2 className="p-5 text-center text-lg font-bold text-[#D4AF37]">
                {t.mapTitle}
              </h2>

              <iframe
                title={t.mapTitle}
                src={mapEmbedUrl}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </section>

            <div className="space-y-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-[#D4AF37] px-5 py-4 text-center font-bold text-[#D4AF37]"
              >
                {t.maps}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-[#D4AF37] px-5 py-4 text-center font-bold text-[#16072F]"
              >
                {t.whatsapp}
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
