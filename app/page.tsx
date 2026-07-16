"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
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

import { it } from "../messages/it";
import { en } from "../messages/en";

type Language = "it" | "en";

export default function Home() {
  const [language, setLanguage] = useState<Language>("it");
  const t = language === "it" ? it : en;

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
              <p className="text-sm font-bold tracking-[0.28em]">{t.brand.name}</p>
              <p className="text-[10px] tracking-[0.28em] text-white/80">
                {t.brand.subtitle}
              </p>
            </div>
          </div>

          <div className="flex gap-1 rounded-full bg-white/10 p-1 text-xs font-bold">
            <button
              type="button"
              onClick={() => setLanguage("it")}
              aria-pressed={language === "it"}
              className={`rounded-full px-3 py-2 transition ${
                language === "it"
                  ? "bg-[#D4AF37] text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {t.language.it}
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`rounded-full px-3 py-2 transition ${
                language === "en"
                  ? "bg-[#D4AF37] text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {t.language.en}
            </button>
          </div>
        </header>

       <section className="mt-4 overflow-hidden rounded-[2rem] border border-[#6800C8]/50 bg-[#16072F]">
  <Image
    src={
      language === "it"
        ? "/hero/hero-home.jpg"
        : "/hero/hero-home-en.jpg"
    }
    alt="Uzbekistan"
    width={1200}
    height={900}
    priority
    className="h-[280px] w-full rounded-[2rem] object-cover object-top sm:h-[360px] md:h-[470px]"
  />

          <div className="px-7 py-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">{t.hero.title}</h1>
            <p className="mt-2 text-sm text-white/80">{t.hero.subtitle}</p>

            <div className="mt-8 grid gap-4 text-center">
              <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.04] px-5 py-4">
                <FaMapMarkedAlt className="mx-auto text-4xl text-[#D4AF37]" />
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {t.hero.authenticTitle}
                </h3>
                <p className="mt-1 text-sm text-white/75">{t.hero.authenticText}</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.04] px-5 py-4">
                <FaGlobe className="mx-auto text-4xl text-[#D4AF37]" />
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {t.hero.guidesTitle}
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
                  {t.hero.assistanceTitle}
                </h3>
                <p className="mt-1 text-sm text-white/75">{t.hero.assistanceText}</p>
              </div>
            </div>

            <div className="mt-9 flex justify-center gap-4">
              <a
                href="#tours"
                className="rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black"
              >
                {t.hero.discoverTours}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold"
              >
                {t.hero.contactUs}
              </a>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#16072F] px-6 py-7 text-center">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">{t.event.label}</p>
          <p className="mt-4 text-lg text-white/80">{t.event.intro}</p>
          <h2 className="mt-2 text-3xl font-bold text-white">{t.event.title}</h2>
          <p className="mt-4 text-lg font-semibold text-[#D4AF37]">{t.event.date}</p>
          <p className="mt-2 text-white/70">{t.event.place}</p>
          <div className="mt-5 rounded-xl border border-dashed border-[#D4AF37]/40 bg-white/5 px-4 py-3">
            <p className="text-sm text-white/80">{t.event.stand}</p>
          </div>
          <p className="mt-5 text-sm text-white/80">{t.event.closing}</p>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">{t.strengths.label}</p>
          <h2 className="mt-4 text-3xl font-bold">{t.strengths.title}</h2>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {t.strengths.items.map((item) => (
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
            {t.toursSection.label}
          </p>
          <h2 className="mt-4 text-3xl font-bold">{t.toursSection.title}</h2>

          <div className="mt-8 space-y-8">
            {t.tours.map((tour, index) => (
              <Fragment key={tour.title}>
                <a
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

                        {index === 2 ? (
                          <>
                            <p className="mt-4 leading-7 text-white/80">{t.navruz.intro}</p>
                            <div className="mt-5 space-y-2 font-semibold text-white/90">
                              {t.navruz.places.map((place) => (
                                <p key={place}>✨ {place}</p>
                              ))}
                            </div>
                            <p className="mt-5 leading-7 text-white/75">
                              {t.navruz.closing}
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
                      {t.departures.label}
                    </p>
                    <h2 className="mt-4 text-3xl font-bold">{t.departures.title}</h2>
                    <p className="mt-4 leading-relaxed text-white/80">
                      {t.departures.text}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                      {t.departures.dates.map((date) => (
                        <div
                          key={date}
                          className="flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-white/10"
                        >
                          <FaCalendarCheck className="shrink-0 text-[#D4AF37]" />
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
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">{t.team.label}</p>
          <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0F0620]">
            <Image
              src="/team/shukhrat-silvia.jpg"
              alt="Shukhrat and Silvia"
              width={900}
              height={1350}
              className="h-auto w-full rounded-[2rem]"
            />
            <div className="p-5">
              <h2 className="text-3xl font-bold">{t.team.title}</h2>
              <p className="mt-3 text-white/75">{t.team.text}</p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
          <p className="text-center text-xs tracking-[0.35em] text-[#D4AF37]">
            {t.social.label}
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold">{t.social.title}</h2>
          <p className="mt-3 text-center text-white/70">{t.social.text}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {[
              ["https://www.facebook.com/viadellasetauzbekistan", "Facebook", <FaFacebookF key="fb" />],
              ["https://www.instagram.com/viaggiare_in_uzbekistan/", "Instagram", <FaInstagram key="ig" />],
              ["https://t.me/GoldenTerraTravel", "Telegram", <FaTelegramPlane key="tg" />],
              ["https://www.tiktok.com/@viadellasetauzbekistan?_t=8lFjOD0Uwsq&_r=1", "TikTok", <FaTiktok key="tt" />],
              ["https://www.youtube.com/@goldenterratravelviaggiare2861", "YouTube", <FaYoutube key="yt" />],
            ].map(([href, label, icon]) => (
              <a
                key={String(label)}
                href={String(href)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={String(label)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                {icon}
              </a>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">{t.contacts.label}</p>
          <h2 className="mt-4 text-3xl font-bold">{t.contacts.title}</h2>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {t.contacts.items.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
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
          <a href="#">{t.bottomNav.home}</a>
          <a href="#tours">{t.bottomNav.tours}</a>
          <a href="#contact">{t.bottomNav.contact}</a>
        </div>
      </nav>
    </main>
  );
}
