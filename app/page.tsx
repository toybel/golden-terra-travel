import Image from "next/image";
import { Fragment } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
  FaCalendarCheck,
  FaMapMarkedAlt,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
const tours = [
  {
    title: "Uzbekistan Classico",
    text: "L'itinerario ideale per scoprire le città simbolo della Via della Seta.",
    image: "/tours/uzbekistan-classic.jpg",
    variant: "classic",
    href: "/itinerari/uzbekistan-classic",
    buttonLabel: "Vedi l'itinerario",
  },
  {
    title: "Capodanno sulla Via della Seta 2026",
    text: "Festeggia il Capodanno nel cuore della Via della Seta con un viaggio speciale tra città leggendarie, atmosfere indimenticabili e tradizioni uzbeke.",
    image: "/tours/capodanno.png",
    variant: "poster",
    href: "https://wa.me/393475218989?text=Buongiorno,%20vorrei%20ricevere%20il%20programma%20di%20Capodanno%20Uzbekistan%202027.",
    buttonLabel: "Richiedi il programma",
    external: true,
  },
  {
    title: "Pasqua & Navruz in Uzbekistan 2027",
    text: "Nel periodo più affascinante dell'anno, quando i mandorli sono in fiore e l'Uzbekistan celebra il Navruz, vi accompagneremo alla scoperta delle meraviglie della Via della Seta.",
    image: "/tours/navruz.jpg",
    variant: "poster",
    href: "https://wa.me/393475218989?text=Buongiorno,%20vorrei%20ricevere%20il%20programma%20di%20Pasqua%20%26%20Navruz%20Uzbekistan%202027.",
    buttonLabel: "Richiedi il programma",
    external: true,
  },
];

const guaranteedDepartures = [
  "5 Agosto",
  "18 Agosto",
  "6 Settembre",
  "17 Settembre",
  "19 Ottobre",
  "21 Ottobre",
  "3 Novembre",
  "7 Novembre",
  "29 Dicembre",
  "20 Marzo",
  "13 Maggio",
];

const contacts = [
  { label: "WhatsApp Italia", href: "https://wa.me/393475218989" },
  { label: "WhatsApp Uzbekistan", href: "https://wa.me/998977181870" },
  { label: "Email", href: "mailto:info@goldenterratravel.com" },
  { label: "Website", href: "https://www.goldenterratravel.com" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080414] text-white">
      <div className="mx-auto max-w-[620px] px-4 pb-24">
        <header className="sticky top-3 z-50 mt-3 flex items-center justify-between rounded-[2rem] border border-white/15 bg-[#120A24]/90 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/golden-terra-logo-white.png"
              alt="Golden Terra Travel LLC"
              width={85}
              height={85}
              className="h-16 w-auto object-contain sm:h-20"
            />
            <div>
              <p className="text-sm font-bold tracking-[0.28em]">
                GOLDEN TERRA TRAVEL LLC
              </p>
              <p className="text-[10px] tracking-[0.28em] text-white/80">
                TOUR OPERATOR & DMC IN UZBEKISTAN
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
            <button>IT</button>
            <button>EN</button>
          </div>
        </header>

        <section className="mt-4 overflow-hidden rounded-[2rem] border border-[#6800C8]/50 bg-[#16072F]">
          <Image
            src="/hero/hero-home.jpg"
            alt="Uzbekistan"
            width={1200}
            height={900}
            priority
            className="h-[280px] sm:h-[360px] md:h-[470px] w-full object-cover object-top rounded-[2rem]"
          />

          <div className="px-7 py-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Golden Terra Travel LLC
            </h1>

            <p className="mt-2 text-sm text-white/80">
              Tour Operator & DMC in Uzbekistan
            </p>

          <div className="mt-8 grid gap-4 text-center">
  <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.04] px-5 py-4">
    <FaMapMarkedAlt className="mx-auto text-4xl text-[#D4AF37]" />

    <h3 className="mt-3 text-lg font-semibold text-white">
      Viaggi autentici 
    </h3>

    <p className="mt-1 text-sm text-white/75">
      Oltre le città leggendarie della Via della Seta
    </p>
  </div>

  <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.04] px-5 py-4">
    <FaGlobe className="mx-auto text-4xl text-[#D4AF37]" />

    <h3 className="mt-3 text-lg font-semibold text-white">
      Guide locali professionali
    </h3>

    <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/75">
      <span>🇮🇹 Italiano</span>
      <span>🇬🇧 English</span>
      <span>🇫🇷 Français</span>
      <span>🇩🇪 Deutsch</span>
      <span>🇪🇸 Español</span>
      <span>🇷🇺 Русский</span>
    </div>
  </div>

  <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.04] px-5 py-4">
    <FaHandshake className="mx-auto text-4xl text-[#D4AF37]" />

    <h3 className="mt-3 text-lg font-semibold text-white">
      Assistenza dedicata
    </h3>

    <p className="mt-1 text-sm text-white/75">
      Prima, durante e dopo il viaggio.
    </p>
  </div>
</div>

            <div className="mt-9 flex justify-center gap-4">
              <a
                href="#tours"
                className="rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black"
              >
                Scopri i Tour
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold"
              >
                Contattaci
              </a>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#16072F] px-6 py-7 text-center">
  <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
    EVENTO 2026
  </p>

  <p className="mt-4 text-lg text-white/80">
    ✨ Saremo al
  </p>

  <h2 className="mt-2 text-3xl font-bold text-white">
    TTG Travel Experience
  </h2>

  <p className="mt-4 text-lg font-semibold text-[#D4AF37]">
    14–16 ottobre 2026
  </p>

  <p className="mt-2 text-white/70">
    Rimini Expo Centre
  </p>

  <div className="mt-5 rounded-xl border border-dashed border-[#D4AF37]/40 bg-white/5 px-4 py-3">
    <p className="text-sm text-white/80">
      📍 Padiglione e stand saranno comunicati prossimamente.
    </p>
  </div>

  <p className="mt-5 text-sm text-white/80">
    Ti aspettiamo a Rimini. Vieni a conoscere Golden Terra Travel.
  </p>
</section>

        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            I NOSTRI PUNTI DI FORZA
          </p>
          <h2 className="mt-4 text-3xl font-bold">PERCHÉ VIAGGIARE CON NOI</h2>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {[
              "Tour Operator & DMC autorizzato in Uzbekistan",
              "Guide locali professionali parlanti italiano",
              "Tour individuali, di gruppo e su misura",
              "Esperienze autentiche in tutto l'Uzbekistan",
              "Assistenza internazionale con referente italiana, prima, durante e dopo il viaggio.",
              "Organizzazione completa dall'arrivo alla partenza",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-semibold"
              >
                <span className="mr-3 text-xl text-[#D4AF37]">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="tours"
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            I NOSTRI TOUR
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Parti alla scoperta dell'Uzbekistan
          </h2>

          <div className="mt-8 space-y-8">
            {tours.map((tour, index) => (
              <Fragment key={tour.title}>
                <a
                  key={tour.title}
                  href={tour.href}
                  target={tour.external ? "_blank" : undefined}
                  rel={tour.external ? "noopener noreferrer" : undefined}
                  className="group block overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0F0620] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#D4AF37] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  {tour.variant === "poster" ? (
                    <>
                      <div className="flex items-center justify-center bg-[#0F0620] p-4">
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          width={900}
                          height={1300}
                          className="h-auto max-h-[720px] w-full rounded-[1.25rem] object-contain"
                        />
                      </div>

                      <div className="p-6 md:p-7">
                        <h3 className="text-2xl font-bold">{tour.title}</h3>

                        {tour.title.includes("Navruz") ? (
                          <>
                            <p className="mt-4 leading-7 text-white/80">
                              Nel periodo più affascinante dell&apos;anno, quando i mandorli
                              sono in fiore e l&apos;Uzbekistan celebra il Navruz, vi
                              accompagneremo alla scoperta delle meraviglie della Via
                              della Seta.
                            </p>

                            <div className="mt-5 space-y-2 font-semibold text-white/90">
                              <p>✨ Samarcanda</p>
                              <p>✨ Bukhara</p>
                              <p>✨ Khiva</p>
                              <p>✨ Tashkent</p>
                              <p>✨ Parco Nazionale Ugam-Chatkal</p>
                            </div>

                            <p className="mt-5 leading-7 text-white/75">
                              Un viaggio tra città leggendarie, tradizioni millenarie,
                              colori, profumi e paesaggi primaverili unici.
                            </p>
                          </>
                        ) : (
                          <p className="mt-4 leading-7 text-white/80">{tour.text}</p>
                        )}

                        <span className="mt-7 inline-flex rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black transition-transform duration-300 group-hover:scale-[1.02]">
                          {tour.buttonLabel}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        width={900}
                        height={650}
                        className="h-[280px] w-full object-cover sm:h-[320px]"
                      />
                      <div className="p-6 md:p-7">
                        <h3 className="text-2xl font-bold">{tour.title}</h3>
                        <p className="mt-3 text-white/75">{tour.text}</p>
                        <span className="mt-6 inline-flex rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black transition-transform duration-300 group-hover:scale-[1.02]">
                          {tour.buttonLabel}
                        </span>
                      </div>
                    </>
                  )}
                </a>

                {index === 0 && (
                  <section className="rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
                    <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
                      PARTENZE GARANTITE 2026-2027
                    </p>

                    <h2 className="mt-4 text-3xl font-bold">
                      Le nostre prossime partenze
                    </h2>

                    <p className="mt-4 leading-relaxed text-white/80">
                      Tutte le date indicate sono partenze garantite. Scegli il
                      periodo più adatto per vivere l&apos;Uzbekistan con noi.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                      {guaranteedDepartures.map((date) => (
                        <div
                          key={date}
                          className="flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-white/10"
                        >
                          <FaCalendarCheck className="text-[#D4AF37] shrink-0" />
                          {date}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </Fragment>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">TEAM</p>

          <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0F0620]">
            <Image
              src="/team/shukhrat-silvia.jpg"
              alt="Shukhrat and Silvia"
              width={900}
              height={1350}
              className="w-full h-auto rounded-[2rem]"
            />
            <div className="p-5">
              <h2 className="text-3xl font-bold">Shukhrat & Silvia</h2>
              <p className="mt-3 text-white/75">
                Un team italo-uzbeko che vi accompagna con competenza e passione
                prima, durante e dopo ogni viaggio.
              </p>
            </div>
          </div>
        </section>


        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
          <p className="text-center text-xs tracking-[0.35em] text-[#D4AF37]">
            SEGUICI
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold">
            Rimani in contatto con noi
          </h2>
          <p className="mt-3 text-center text-white/70">
            Scopri foto, video e novità lungo la Via della Seta.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/viadellasetauzbekistan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/viaggiare_in_uzbekistan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <FaInstagram />
            </a>

            <a
              href="https://t.me/GoldenTerraTravel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.tiktok.com/@viadellasetauzbekistan?_t=8lFjOD0Uwsq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.youtube.com/@goldenterratravelviaggiare2861"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <FaYoutube />
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">CONTATTI</p>
          <h2 className="mt-4 text-3xl font-bold">Siamo a tua disposizione</h2>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-bold"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[620px] rounded-t-[2rem] border border-white/15 bg-[#120A24]/95 px-6 py-4 backdrop-blur">
        <div className="flex justify-between text-xs text-white/80">
          <a href="#">Home</a>
          <a href="#tours">Tours</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </main>
  );
}
