
"use client";

import { useState } from "react";

type Props = {
  lang?: string;
};

export default function InformazioniUtili({ lang = "it" }: Props) {
  const en = lang === "en";
  const [open, setOpen] = useState<number | null>(null);

  const sections = [
    {
      icon: "🛂",
      title: en ? "Travel documents" : "Documenti",
      content: (
        <>
          <p>
            {en
              ? "Italian citizens need a passport with at least 3 months of remaining validity after their return date."
              : "Per i cittadini italiani è necessario il passaporto con validità residua di almeno 3 mesi dalla data di rientro."}
          </p>
          <p>
            {en
              ? "Italian citizens do not normally need a tourist visa for stays within the limits established by current regulations. Requirements for other nationalities may differ."
              : "Per soggiorni turistici, i cittadini italiani non necessitano normalmente di un visto entro i limiti previsti dalla normativa vigente. Per altre nazionalità possono valere regole differenti."}
          </p>
          <p>
            {en
              ? "Always check current entry requirements before departure."
              : "Verifica sempre i requisiti d'ingresso aggiornati prima della partenza."}
          </p>
        </>
      ),
    },
    {
      icon: "💵",
      title: en ? "Currency and payments" : "Valuta e pagamenti",
      content: (
        <>
          <p>
            {en
              ? "The official currency is the Uzbek som (UZS)."
              : "La valuta ufficiale è il som uzbeko (UZS)."}
          </p>
          <p>
            {en
              ? "ATMs and exchange offices are available in major cities. Payment cards are generally accepted in hotels, restaurants and major tourist establishments."
              : "Nelle principali città sono disponibili bancomat e uffici di cambio. Le carte sono generalmente accettate negli hotel, nei ristoranti e nelle principali attività turistiche."}
          </p>
          <p>
            {en
              ? "Keep some cash for markets and small purchases. You can use the currency converter above to check exchange rates."
              : "Tieni un po' di contanti per mercati e piccoli acquisti. Per controllare il cambio puoi utilizzare il convertitore qui sopra."}
          </p>
        </>
      ),
    },
    {
      icon: "📶",
      title: en ? "Mobile and Internet" : "Telefonia e Internet",
      content: (
        <>
          <p>
            {en
              ? "An international eSIM can help you stay connected without replacing your physical SIM."
              : "Una eSIM internazionale può aiutarti a rimanere connesso senza sostituire la SIM fisica."}
          </p>
          <p>
            {en
              ? "Golden Terra Travel recommends Holafly. Check your phone's compatibility, coverage, data plan and activation conditions before purchasing."
              : "Golden Terra Travel consiglia Holafly. Prima dell'acquisto verifica compatibilità del telefono, copertura, piano dati e condizioni di attivazione."}
          </p>
          <a
            href="https://esim.holafly.com/it/?sref_id=gvulg3l&utm_campaign=referral_program&utm_source=loyalty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#D4AF37] px-5 py-3 font-bold text-[#16072F]"
          >
            {en ? "📶 Explore Holafly eSIM" : "📶 Scopri la eSIM Holafly"}
          </a>
        </>
      ),
    },
    {
      icon: "🩺",
      title: en ? "Health and safety" : "Salute e sicurezza",
      content: (
        <>
          <p>
            {en
              ? "Bring your regular medications and a small travel first-aid kit."
              : "Porta con te i farmaci personali e una piccola farmacia da viaggio."}
          </p>
          <p>
            {en
              ? "Bottled drinking water is recommended during your stay."
              : "Durante il soggiorno è consigliato consumare acqua in bottiglia."}
          </p>
          <p>
            {en
              ? "Check any applicable health and vaccination requirements before travelling."
              : "Prima del viaggio verifica eventuali requisiti sanitari e vaccinali aggiornati."}
          </p>
        </>
      ),
    },
    {
      icon: "🛡️",
      title: en ? "Travel insurance" : "Assicurazione di viaggio",
      content: (
        <>
          <p>
            {en
              ? "Golden Terra Travel recommends considering travel and medical insurance before departure."
              : "Golden Terra Travel consiglia di valutare un'assicurazione di viaggio e sanitaria prima della partenza."}
          </p>
          <p>
            {en
              ? "Depending on the policy, coverage may include medical expenses, trip cancellation, assistance, baggage problems and early return."
              : "A seconda della polizza, le coperture possono includere spese mediche, annullamento, assistenza, problemi con il bagaglio e rientro anticipato."}
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.allianz-assicurazioneviaggio.it"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#D4AF37] underline-offset-4"
            >
              🛡️ Allianz Global Assistance
            </a>
            <a
              href="https://heymondo.it/contatti-heymondo/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#D4AF37] underline-offset-4"
            >
              🌍 Heymondo
            </a>
            <p>☎️ Columbus Assicurazioni: 800 986 782</p>
          </div>
          <p className="text-sm text-white/60">
            {en
              ? "These references are provided for information only. The traveller is responsible for choosing and purchasing insurance."
              : "Questi riferimenti sono forniti a titolo informativo. La scelta e la stipula dell'assicurazione spettano al viaggiatore."}
          </p>
        </>
      ),
    },
    {
      icon: "🔌",
      title: en ? "Electricity and plugs" : "Elettricità e prese",
      content: (
        <>
          <p>
            {en
              ? "Uzbekistan uses 220 V / 50 Hz electricity, mainly with type C and F sockets."
              : "In Uzbekistan la corrente è a 220 V / 50 Hz e le prese più diffuse sono di tipo C e F."}
          </p>
          <p>
            {en
              ? "Depending on your plugs, an adapter may be needed. A power bank is useful during excursions."
              : "A seconda delle spine dei tuoi dispositivi, potrebbe servire un adattatore. Un power bank è molto utile durante le escursioni."}
          </p>
        </>
      ),
    },
    {
      icon: "🍽️",
      title: en ? "Uzbek cuisine" : "Cucina",
      content: (
        <>
          <p>
            {en
              ? "Some traditional Uzbek specialities worth trying:"
              : "Tra le specialità della cucina uzbeka da provare:"}
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Plov</li>
            <li>Samsa</li>
            <li>Shashlik</li>
            <li>Lagman</li>
            <li>{en ? "Traditional non bread" : "Pane tradizionale non"}</li>
          </ul>
          <p>
            {en
              ? "Please communicate dietary requirements when booking."
              : "Comunica eventuali esigenze alimentari al momento della prenotazione."}
          </p>
        </>
      ),
    },
    {
      icon: "📞",
      title: en ? "Useful contacts" : "Numeri utili",
      content: (
        <>
          <p>
            {en
              ? "Keep emergency numbers and your tour operator's contacts handy."
              : "Tieni sempre a portata di mano i numeri di emergenza e i contatti del tour."}
          </p>

          <div className="grid gap-2">
            <p>🚒 {en ? "Fire brigade" : "Vigili del Fuoco"}: <strong>101</strong></p>
            <p>🚓 {en ? "Police" : "Polizia"}: <strong>102</strong></p>
            <p>🚑 {en ? "Ambulance" : "Ambulanza"}: <strong>103</strong></p>
            <p>
              🇮🇹 {en ? "Italian Embassy in Tashkent" : "Ambasciata d'Italia a Tashkent"}:
              {" "}<a href="tel:+998781508111" className="underline">+998 78 150 81 11</a>
            </p>
          </div>

          <Contact
            title="🇺🇿 Golden Terra Travel – Uzbekistan"
            phone="+998977181870"
            en={en}
          />
          <Contact
            title="🇮🇹 Golden Terra Travel – Italia"
            phone="+393475218989"
            en={en}
          />

          <p className="text-sm text-white/65">
            {en
              ? "Save these numbers before departure so you can quickly reach the team when needed."
              : "Salva questi numeri prima della partenza per contattare rapidamente il nostro staff in caso di necessità."}
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="mt-8 rounded-[2rem] border border-[#D4AF37]/30 bg-[#16072F] p-5 text-white sm:p-7">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#D4AF37]">
        {en ? "USEFUL INFORMATION" : "INFORMAZIONI UTILI"}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-white">
        📖 {en ? "Your practical travel guide" : "La tua guida pratica di viaggio"}
      </h2>

      <p className="mt-3 leading-7 text-white/75">
        {en
          ? "Everything you may need before and during your trip to Uzbekistan."
          : "I consigli da tenere a portata di mano prima e durante il viaggio in Uzbekistan."}
      </p>

      <div className="mt-6 space-y-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/15 bg-white/5"
          >
            <button
              type="button"
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between gap-3 p-4 text-left font-semibold"
            >
              <span>
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </span>
              <span className="text-[#D4AF37]">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="space-y-4 border-t border-white/10 px-4 pb-5 pt-4 leading-7 text-white/85">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({
  title,
  phone,
  en,
}: {
  title: string;
  phone: string;
  en: boolean;
}) {
  const digits = phone.replace(/\D/g, "");

  return (
    <div className="rounded-xl border border-[#D4AF37]/30 bg-white/5 p-4">
      <p className="font-bold">{title}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href={`tel:${phone}`}
          className="rounded-full bg-[#D4AF37] px-4 py-2 font-semibold text-[#16072F]"
        >
          📞 {en ? "Call" : "Chiama"}
        </a>
        <a
          href={`https://wa.me/${digits}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#D4AF37] px-4 py-2 font-semibold text-[#D4AF37]"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
