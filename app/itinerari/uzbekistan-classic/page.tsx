import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import {
   FaPassport,
  FaMoneyBillWave,
  FaWifi,
  FaSun,
  FaUtensils,
  FaSuitcase,
  FaBriefcaseMedical,
  FaChevronDown,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";

const days = [
  {
     day: "1° GIORNO",
  title: "Tashkent, la capitale tra passato e modernità",
  subtitle: "Il primo incontro con l'Uzbekistan",
  image: "/itinerari/uzbekistan-classic/tashkent-.jpg",
  text: `Arrivo a Tashkent e incontro con il nostro staff locale. Dopo il trasferimento in hotel e un po' di riposo, inizia la scoperta della capitale uzbeka, dove la tradizione orientale incontra l'eredità dell'epoca sovietica.

La visita parte dalla Città Vecchia con il complesso religioso di Khast Imam, che custodisce il celebre Corano del Califfo Osman, uno dei manoscritti coranici più antichi al mondo.

Si prosegue tra le spettacolari stazioni della metropolitana di Tashkent, autentiche opere d'arte sotterranee, e il vivace Bazar Chorsu, ricco di spezie, pane tradizionale e colori della Via della Seta.

Passeggiata in Piazza dell'Indipendenza e in Piazza Amir Temur, cuore della città moderna.

Cena in ristorante locale e pernottamento.`,
  mapCity: "tashkent",
  },
  {
    day: "2° GIORNO",
  title: "Tashkent ✈ Urgench – Khiva",
  subtitle: "La città delle Mille e una Notte",
  image: "/itinerari/uzbekistan-classic/khiva.jpg",
  text: `Dopo la prima colazione trasferimento in aeroporto e volo interno verso Urgench. Da qui si raggiunge Khiva, antica città carovaniera lungo la Via della Seta.

L'intera giornata è dedicata alla visita della straordinaria cittadella fortificata di Ichan-Kala, Patrimonio Mondiale UNESCO, con madrase, moschee, minareti e abitazioni tradizionali perfettamente conservate.

Durante la visita sarà possibile osservare anche la preparazione del tradizionale pane uzbeko.

Khiva incanta con le sue mura color ocra, le cupole turchesi e un'atmosfera orientale senza tempo che al tramonto regala scorci indimenticabili.

Cena in ristorante locale e pernottamento.`,
  mapCity: "khiva",
  },
{
   day: "3° GIORNO",
  title: "Khiva – Bukhara",
  subtitle: "Attraversando il deserto del Kyzylkum",
  image: "/itinerari/uzbekistan-classic/bukhara.jpg",
  text: `Partenza per Bukhara attraversando il suggestivo deserto del Kyzylkum, le celebri "sabbie rosse" dell'Asia Centrale. Durante il viaggio si costeggia il maestoso fiume Amu Darya, conosciuto nell'antichità con il nome di Oxus.

Dopo una sosta lungo il percorso si raggiunge Bukhara nel tardo pomeriggio. Passeggiata nella splendida piazza Lyabi-Khauz, cuore della città storica.

La serata si conclude con una cena in un tipico home restaurant, dove assisteremo alla preparazione del celebre plov, piatto simbolo della cucina uzbeka.

Pernottamento in hotel.`,
  mapCity: "khivaBukhara",
},
{
   day: "4° GIORNO",
  title: "Bukhara",
  subtitle: "La città santa della Via della Seta",
  image: "/itinerari/uzbekistan-classic/bukhara1.jpg",
  text: `Intera giornata dedicata alla scoperta di Bukhara, una delle città più affascinanti e spirituali dell'Asia Centrale, per secoli crocevia di mercanti, studiosi e pellegrini lungo la Via della Seta.

Si visitano il Mausoleo dei Samanidi, autentico capolavoro dell'architettura islamica, la maestosa Fortezza Ark, la Moschea Bolo-Khauz, la caratteristica madrasa Chor Minor e il monumentale complesso Po-i-Kalyan.

La visita prosegue nel quartiere ebraico, con la storica sinagoga (se aperta), e tra gli antichi bazar coperti di Toqi Telpak Furushon e Toqi Zargaron, dove ancora oggi si respirano le atmosfere dei mercati della Via della Seta.

Cena in ristorante locale e pernottamento.`,
  mapCity: "bukhara",
},
{
  day: "5° GIORNO",
  title: "Bukhara – Shahrisabz – Samarcanda",
  subtitle: "Sulle orme di Tamerlano",
  image: "/itinerari/uzbekistan-classic/shahrisabz.jpg",
  text: `Dopo la prima colazione partenza per Shahrisabz, la città natale di Amir Temur, conosciuto in Occidente come Tamerlano. Il suo nome significa "Città Verde" e rappresenta uno dei luoghi più importanti della storia dell'Impero Timuride.

Visita delle monumentali rovine del Palazzo Ak-Saray, dei complessi funerari Dorus-Saodat e Dorut-Tilovat e della grande Moschea Kok-Gumbaz, testimonianze dello splendore dell'antica capitale timuride.

Nel pomeriggio proseguimento verso Samarcanda. Arrivo, sistemazione in hotel e passeggiata serale davanti alla magnifica Piazza Registan illuminata, uno degli scenari più suggestivi dell'Asia Centrale.

Cena in ristorante locale e pernottamento.`,
  mapCity: "shahrisabz",
},
{
    day: "6° GIORNO",
  title: "Samarcanda",
  subtitle: "La perla dell'Oriente",
  image: "/itinerari/uzbekistan-classic/samarcanda-.jpg",
  text: `Intera giornata dedicata alla visita di Samarcanda, città simbolo della Via della Seta e autentico gioiello dell'architettura timuride.

Si visita la spettacolare Piazza Registan con le tre celebri madrase di Ulugh Beg, Sher-Dor e Tilla-Kari, la monumentale Moschea Bibi-Khanim e il vivace Bazar Siyob, ricco di colori, profumi e prodotti tipici locali.

Ogni angolo di Samarcanda racconta il fasto dell'Impero di Tamerlano e il ruolo che questa città ebbe come uno dei principali centri culturali e commerciali dell'Oriente.

Cena in ristorante locale e pernottamento.`,
  mapCity: "samarkand",
},
{
  day: "7° GIORNO",
  title: "Samarcanda – Tashkent",
  subtitle: "L'ultimo saluto alla Via della Seta",
  image: "/itinerari/uzbekistan-classic/gur-e-amir.jpg",
  text: `Ultime visite dedicate ai luoghi più iconici di Samarcanda: l'Osservatorio di Ulugh Beg, il suggestivo complesso monumentale di Shah-i-Zinda, il villaggio di Konigil con la dimostrazione dell'antica produzione della carta di seta e il Mausoleo Gur-e-Amir, luogo di sepoltura di Tamerlano e dei suoi discendenti.

Nel tardo pomeriggio trasferimento alla stazione ferroviaria e partenza con il treno veloce per Tashkent.

Dopo la cena in ristorante locale, trasferimento in aeroporto per il volo di rientro, portando con sé i colori, i profumi e i ricordi di un viaggio indimenticabile lungo la Via della Seta.`,
  mapCity: "samarkandTashkent",
},
 ];
const highlights = [
  "Tour Operator & DMC autorizzato in Uzbekistan",
  "Guide locali professionali parlanti italiano",
  "Assistenza italiana prima, durante e dopo il viaggio",
  "Un itinerario completo tra storia, cultura e tradizioni",
  "Esperienze autentiche lungo la Via della Seta",
  "Organizzazione completa dall’arrivo alla partenza",
];
const dayMaps: Record<string, string> = {
  tashkent: "https://www.google.com/maps/d/view?mid=1_bsk3HCMYWfPUjxpnEDbcq0G7MVUg24&z=13",
 khiva: "https://www.google.com/maps/d/view?mid=17fccGjbIAcWbfAAhOfpSn4jUTEHd_l4&z=15",
  khivaBukhara: "https://www.google.com/maps/d/view?mid=1jHOV0ZloFW2tmqv3bwOIuKXui2CLTXs&z=8",
  bukhara: "https://www.google.com/maps/d/view?mid=14xu6_BHKVZ6ceGrYq9UKlAPOsw2UpUg&z=15",
  shahrisabz: "https://www.google.com/maps/d/view?mid=1PqKMnoi39mdosyI619HOTlJOR-OBeOo&z=13",
  samarkand: "https://www.google.com/maps/d/view?mid=1eI2fi1QYz_vqlAF_y3rrsxu1lNy7PFY&z=14",
  samarkandTashkent: "https://www.google.com/maps/d/view?mid=1czTa7vw98i3PH9TwqhP2t-hwbQUVkYE&z=13",
};


export default function UzbekistanClassicPage() {
  return (
    <main className="min-h-screen bg-[#080414] text-white">
      <div className="mx-auto max-w-[620px] px-4 pb-24">
        <header className="sticky top-3 z-50 mt-3 flex items-center justify-between rounded-[2rem] border border-white/15 bg-[#120A24]/90 px-5 py-4 backdrop-blur">
          <Link href="/" className="text-sm font-bold text-[#D4AF37]">
            ← Home
          </Link>

          <div className="text-right">
            <p className="text-xs font-bold tracking-[0.22em]">
              GOLDEN TERRA TRAVEL LLC
            </p>
            <p className="text-[10px] text-white/70">
              Tour Operator & DMC in Uzbekistan
            </p>
          </div>
        </header>

        <section className="mt-5 overflow-hidden rounded-[2rem] border border-[#6800C8]/50 bg-[#16072F]">
          <Image
  src="/itinerari/uzbekistan-classic/hero.jpg"
  alt="Uzbekistan Classico"
  width={1536}
  height={1024}
  priority
  className="w-full h-auto"
/>

          <div className="p-7">
            <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
              ITINERARIO CLASSICO
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              Uzbekistan Classico
            </h1>
<p className="mt-3 text-xl font-semibold text-[#D4AF37]">
  7 giorni • 7 notti
</p>
<p className="mt-4 text-lg leading-relaxed text-white/80">
  Un viaggio di 7 giorni alla scoperta di Tashkent, Khiva, Bukhara, Shahrisabz e Samarcanda, lungo l'antica Via della Seta.
</p>
            
            <p className="mt-4 text-lg leading-relaxed text-white/80">
  Un itinerario tra città Patrimonio UNESCO, bazar storici, madrase e l'eredità di Tamerlano, accompagnato dall'autentica ospitalità uzbeka, dai sapori della cucina locale e dai sorrisi di un popolo che accoglie ogni viaggiatore con il cuore.
</p>

            <a
              href="#programma"
              className="mt-7 inline-block rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black"
            >
              Scopri l’itinerario
            </a>
          </div>
        </section>
<section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
  <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
    PARTENZE GARANTITE 2026-2027
  </p>

  <h2 className="mt-4 text-3xl font-bold">
    Scegli la data che preferisci
  </h2>

  <p className="mt-4 leading-relaxed text-white/80">
    Parti quando preferisci: tutte le date indicate sono partenze garantite.
  </p>

  <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
    {[
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
    ].map((date) => (
     <div
  key={date}
  className="flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-semibold transition-all duration-300 hover:border-[#E6C24A] hover:bg-white/10 hover:-translate-y-1"
>
  <FaCalendarCheck className="mr-3 text-[#E6C24A]" />
  {date}
</div>
    ))}
  </div>
</section>
        <section className="mt-6 grid grid-cols-2 gap-4">
  <Image
    src="/itinerari/uzbekistan-classic/ospitalita.jpg"
    alt="Ospitalità uzbeka"
    width={700}
    height={1000}
    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
  />

  <Image
    src="/itinerari/uzbekistan-classic/sapori.jpg"
    alt="Sapori dell'Uzbekistan"
    width={700}
    height={1000}
    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
  />
</section>

<section className="mt-4 rounded-[2rem] border border-white/15 bg-[#16072F] p-4 md:p-6">
  <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
    MAPPA INTERATTIVA
  </p>

  <h2 className="mt-3 text-2xl font-bold">
    Scopri il percorso del viaggio
  </h2>

  <p className="mt-3 leading-relaxed text-white/80">
    Esplora le città che visiteremo durante il tour lungo la Via della Seta.
  </p>

  <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10">
    <iframe
      className="block h-[520px] w-full"
      src="https://www.google.com/maps/d/u/6/embed?mid=1vu2o_yPQMUKKNsm2c2FSMMzYWyTxNU8&ehbc=2E312F"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    />
  </div>
</section>

<section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
  <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
    IL VIAGGIO
  </p>

  <h2 className="mt-4 text-3xl font-bold">
    L’essenza dell’Uzbekistan autentico
  </h2>

  <p className="mt-4 leading-relaxed text-white/80">
    Un itinerario che racchiude arte, cultura e accoglienza senza tempo: dalle città leggendarie della Via della Seta alla storia di Tamerlano e allo splendore timuride.
  </p>

  <p className="mt-4 leading-relaxed text-white/80">
    Il programma è indicativo e può subire variazioni in base agli operativi voli, alle condizioni locali, alla disponibilità dei servizi e all’organizzazione del viaggio.
  </p>
</section>

        <section
          id="programma"
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            PROGRAMMA
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Giorno per giorno
          </h2>

          <div className="mt-8 space-y-8">
            {days.map((item) => (
              <article
                key={item.day}
                className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0F0620]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={700}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-sm font-bold text-[#D4AF37]">
                    {item.day}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-1 text-base font-medium tracking-wide text-[#D4AF37]">
                      {item.subtitle}
                    </p>
                  )}

                  <div className="mt-4 space-y-4 leading-relaxed text-white/75">
                    {item.text.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <a
                    href={dayMaps[item.mapCity]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#f0ca55]"
                  >
                    <FaMapMarkerAlt className="mr-2 h-5 w-5 shrink-0" />
                    Mappa del giorno
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
<section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
  <p className="text-sm font-semibold tracking-[0.4em] text-[#D4AF37] uppercase">
    L&apos;ALTRO UZBEKISTAN
  </p>

  <h2 className="mt-3 text-4xl font-extrabold leading-tight">
    Oltre le città leggendarie
    <br />
    della Via della Seta
  </h2>

  <p className="mt-4 leading-relaxed text-white/80">
    Estensioni del Tour Classico pensate per chi desidera vivere un Uzbekistan
    ancora più autentico.
  </p>

  <div className="mt-8 grid gap-6">
    {[
      {
        title: "Notte in yurta tra le fortezze del Khorezm",
        image: "/itinerari/uzbekistan-classic/estensioni/yurta.jpg",
        text: `Le leggendarie fortezze di sabbia del Khorezm emergono dal deserto come città perdute. Un viaggio tra archeologia, silenzi infiniti e tradizioni nomadi, con pernottamento in yurta sotto il cielo stellato dell’Asia Centrale.`,
        message:
          "Buongiorno, vorrei ricevere informazioni sul Tour Classico con l'estensione Notte in yurta tra le fortezze del Khorezm. Grazie.",
      },
      {
        title: "Valle di Fergana",
        image: "/itinerari/uzbekistan-classic/estensioni/fergana.jpg",
        text: `Culla delle più antiche tradizioni artigianali uzbeke, la Valle di Fergana custodisce l'arte della ceramica, della seta e dell'ospitalità tramandata da generazioni.`,
        message:
          "Buongiorno, vorrei ricevere informazioni sul Tour Classico con l'estensione Valle di Fergana. Grazie.",
      },
      {
        title: "Mar d’Aral",
        image: "/itinerari/uzbekistan-classic/estensioni/mar-aral.jpg",
        text: `Dove un tempo si estendeva uno dei più grandi mari interni del mondo, oggi si apre un paesaggio surreale di sabbia, relitti e orizzonti infiniti.

Il Mar d'Aral racconta una delle più grandi tragedie ambientali dell'Asia Centrale: antichi porti abbandonati, navi adagiate nel deserto e silenzi sospesi nel tempo.

Un'esperienza intensa e fuori dai percorsi tradizionali, tra memoria, natura estrema e il fascino malinconico di un luogo unico al mondo.`,
        message:
          "Buongiorno, vorrei ricevere informazioni sul Tour Classico con l'estensione Mar d'Aral. Grazie.",
      },
      {
        title: "Ugam-Chatkal e Lago Charvak",
        image: "/itinerari/uzbekistan-classic/estensioni/charvak.jpg",
        text: `A breve distanza da Tashkent, la verde regione di Bostonlik custodisce alcuni dei paesaggi naturali più spettacolari dell'Uzbekistan. 

        Qui si trova il magnifico Lago Charvak, dalle acque turchesi, incastonato tra le maestose montagne del Tian Shan Occidentale. 

        Nel cuore del Parco Nazionale Ugam-Chatkal, tra vallate, foreste e cime che superano i 4.000 metri, si apre un mondo di natura incontaminata e panorami mozzafiato. 

        Una destinazione ideale in ogni stagione, tra escursioni, trekking, sport acquatici e il fascino autentico delle montagne dell'Asia Centrale. 

        Un luogo dove il silenzio della natura, l'azzurro del lago e la grandiosità del Tian Shan si fondono in un'esperienza indimenticabile.`,
        message:
          "Buongiorno, vorrei ricevere informazioni sul Tour Classico con l'estensione Ugam-Chatkal e Lago Charvak. Grazie.",
      },
    ].map((item) => (
      <article
        key={item.title}
        className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0F0620]"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={1200}
          height={675}
          className="aspect-video w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-2xl font-bold">{item.title}</h3>

         <div className="mt-3 space-y-4 leading-relaxed text-white/75">
  {item.text.split("\n\n").map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
</div>

          <a
            href={`https://wa.me/393475218989?text=${encodeURIComponent(
              item.message
            )}`}
            target="_blank"
            className="mt-5 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#f0ca55]"
          >
          
 
  <FaWhatsapp className="mr-2 h-6 w-6 text-black" />
  Chiedi informazioni
</a>
        </div>
      </article>
    ))}
  </div>

  <p className="mt-10 text-center text-2xl font-bold leading-relaxed text-[#D4AF37]">
  Esperienze autentiche.
  <br />
  Per chi desidera andare oltre il Tour Classico.
</p>
</section>
<section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            I NOSTRI PUNTI DI FORZA
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Perché scegliere Golden Terra Travel
          </h2>

          <div className="mt-6 grid gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-semibold"
              >
                <span className="mr-3 text-xl text-[#D4AF37]">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
<section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6">
  <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
    INFORMAZIONI UTILI
  </p>

  <h2 className="mt-4 text-3xl font-bold">
    Tutto quello che c&apos;è da sapere prima della partenza
  </h2>

  <p className="mt-4 leading-relaxed text-white/80">
    Alcune informazioni pratiche per organizzare al meglio il vostro viaggio in Uzbekistan.
  </p>

  <div className="mt-8 space-y-4">

    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="flex items-center text-lg font-semibold">
          <FaPassport className="mr-3 text-[#E6C24A]" />
          Documenti
        </span>
        <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <p className="mt-5 leading-8 text-white/75">
        Per i cittadini italiani è necessario il passaporto con validità residua
        di almeno <strong>6 mesi</strong> dalla data di rientro.
        <br /><br />
        Per soggiorni turistici in Uzbekistan non è richiesto il visto entro i
        limiti previsti dalla normativa vigente.
      </p>
    </details>

    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="flex items-center text-lg font-semibold">
          <FaMoneyBillWave className="mr-3 text-[#E6C24A]" />
          Valuta e pagamenti
        </span>
        <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <p className="mt-5 leading-8 text-white/75">
        La valuta ufficiale è il <strong>Som uzbeko (UZS)</strong>.
        <br /><br />
        Nelle principali città sono disponibili bancomat e uffici di cambio.
        Le carte di credito sono generalmente accettate negli hotel, nei
        ristoranti e nelle principali attività turistiche.
        <br /><br />
        Per mercati e piccoli acquisti è consigliabile avere sempre con sé una
        piccola quantità di contanti.
      </p>
    </details>

    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="flex items-center text-lg font-semibold">
          <FaWifi className="mr-3 text-[#E6C24A]" />
          Telefonia e Internet
        </span>
        <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <p className="mt-5 leading-8 text-white/75">
       <div className="mt-5 space-y-4 leading-8 text-white/75">

  <p>
    Naviga in Internet fin dal tuo arrivo in Uzbekistan <strong>senza costi di roaming</strong>.
  </p>

  <p>
    Golden Terra Travel consiglia <strong>Holafly</strong>, la eSIM internazionale che permette di connettersi in pochi minuti senza sostituire la SIM del proprio telefono.
  </p>

  <p>
    <strong>Ti consigliamo di acquistare e installare la eSIM prima della partenza</strong>, così sarà pronta ad attivarsi automaticamente al tuo arrivo in Uzbekistan.
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Installazione semplice tramite QR Code</li>
    <li>Attivazione automatica all'arrivo</li>
    <li>Nessun costo di roaming internazionale</li>
    <li>Assistenza clienti 24 ore su 24</li>
    <li>Ottima copertura di rete durante il viaggio</li>
  </ul>

  <a
    href="https://esim.holafly.com/it/?sref_id=gvulg3l&utm_campaign=referral_program&utm_source=loyalty"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#f0ca55]"
  >
    📶 Acquista la tua eSIM Holafly
  </a>

</div>
      </p>
    </details>
    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="flex items-center text-lg font-semibold">
          <FaBriefcaseMedical className="mr-3 text-[#E6C24A]" />
          Salute e sicurezza
        </span>
        <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <p className="mt-5 leading-8 text-white/75">
        Per i viaggiatori provenienti dall'Italia non sono previste vaccinazioni
        obbligatorie.
        <br /><br />
        Si consiglia di portare con sé eventuali farmaci di uso personale e una
        piccola farmacia da viaggio.
        <br /><br />
        Durante il soggiorno è consigliato consumare acqua in bottiglia.
      </p>
    </details>
<details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
  <summary className="flex cursor-pointer list-none items-center justify-between">
    <span className="flex items-center text-lg font-semibold">
      <FaBriefcaseMedical className="mr-3 text-[#E6C24A]" />
      Assicurazione di viaggio
    </span>
    <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <div className="mt-5 space-y-4 leading-8 text-white/75">
    <p>
      Per viaggiare con maggiore serenità, Golden Terra Travel consiglia di
      stipulare prima della partenza un&apos;assicurazione di viaggio e sanitaria.
    </p>

    <p>Una buona polizza può includere:</p>

    <ul className="list-disc space-y-2 pl-6">
      <li>Spese mediche e assistenza sanitaria</li>
      <li>Annullamento del viaggio</li>
      <li>Assistenza durante il viaggio</li>
      <li>Smarrimento o ritardo del bagaglio</li>
      <li>Rientro anticipato per imprevisti</li>
    </ul>

    <p>
      Di seguito trovi alcuni riferimenti utili per confrontare le diverse
      soluzioni assicurative:
    </p>

    <div className="space-y-3">
      <a
        href="https://www.allianz-assicurazioneviaggio.it"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
      >
        🛡️ Allianz Global Assistance
      </a>

      <a
        href="https://heymondo.it/contatti-heymondo/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
      >
        🌍 Heymondo
      </a>

      <div className="rounded-xl border border-white/15 bg-white/5 p-4">
        ☎️ <strong>Columbus Assicurazioni</strong>
        <br />
        Numero Verde: <strong>800 986 782</strong>
      </div>
    </div>

    <p className="text-sm leading-7 text-white/60">
      La scelta e la stipula dell&apos;assicurazione sono a discrezione del
      viaggiatore. Golden Terra Travel mette a disposizione questi riferimenti
      come semplice servizio informativo.
    </p>
  </div>
</details>
    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
  <summary className="flex cursor-pointer list-none items-center justify-between">
    <span className="flex items-center text-lg font-semibold">
      <FaSun className="mr-3 text-[#E6C24A]" />
      Clima e meteo
    </span>
    <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <div className="mt-5 space-y-4 leading-8 text-white/75">
    <p>
      L&apos;Uzbekistan ha un clima continentale, con estati calde e secche,
      primavere e autunni piacevoli e inverni freddi.
    </p>

    <p>
      I periodi migliori per visitare il Paese sono la <strong>primavera</strong> e
      l&apos;<strong>autunno</strong>, quando le temperature sono miti e ideali
      per le visite.
    </p>

    <p>
      Prima della partenza ti consigliamo di consultare le previsioni meteo
      aggiornate delle principali città del tour.
    </p>

    <div className="grid gap-3">
      <a
        href="https://www.google.com/search?q=meteo+Tashkent"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
      >
        🌤️ Meteo Tashkent
      </a>

      <a
        href="https://www.google.com/search?q=meteo+Khiva"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
      >
        🌤️ Meteo Khiva
      </a>

      <a
        href="https://www.google.com/search?q=meteo+Bukhara"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
      >
        🌤️ Meteo Bukhara
      </a>

      <a
        href="https://www.google.com/search?q=meteo+Samarkand"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
      >
        🌤️ Meteo Samarcanda
      </a>
    </div>
  </div>
</details>
<details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
  <summary className="flex cursor-pointer list-none items-center justify-between">
    <span className="flex items-center text-lg font-semibold">
      <FaPlug className="mr-3 text-[#E6C24A]" />
      Elettricità e prese
    </span>
    <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <div className="mt-5 space-y-4 leading-8 text-white/75">
    <p>
      In Uzbekistan la corrente elettrica è a <strong>220 Volt / 50 Hz</strong>.
    </p>

    <p>
      Le prese più diffuse sono di <strong>tipo C e F</strong>, le stesse
      utilizzate nella maggior parte dei Paesi europei, compresa l'Italia.
    </p>

    <p>
      Nella maggior parte dei casi <strong>non è necessario alcun adattatore</strong>.
      Se utilizzi dispositivi particolari, può essere comunque utile portare
      con sé un adattatore universale.
    </p>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      💡 <strong>Consiglio Golden Terra Travel</strong>
      <br />
      Porta con te anche un power bank: durante le visite giornaliere sarà
      molto utile per ricaricare lo smartphone mentre utilizzi mappe, fotografie
      e Internet.
    </div>
  </div>
</details>
    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
      <summary className="flex cursor-pointer list-none items-center justify-between">
        <span className="flex items-center text-lg font-semibold">
          <FaUtensils className="mr-3 text-[#E6C24A]" />
          Cucina
        </span>
        <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <p className="mt-5 leading-8 text-white/75">
        Tra le specialità della cucina uzbeka da non perdere:
        <br /><br />
        • Plov
        <br />
        • Samsa
        <br />
        • Shashlik
        <br />
        • Lagman
        <br />
        • Pane tradizionale Non
        <br /><br />
        Eventuali esigenze alimentari possono essere comunicate al momento della
        prenotazione.
      </p>
    </details>
<details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
  <summary className="flex cursor-pointer list-none items-center justify-between">
    <span className="flex items-center text-lg font-semibold">
      <FaPhoneAlt className="mr-3 text-[#E6C24A]" />
      Numeri utili
    </span>
    <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <div className="mt-5 space-y-4 leading-8 text-white/75">

    <p>
      Durante il viaggio è sempre consigliabile avere a portata di mano i
      principali numeri di emergenza e i contatti del tour.
    </p>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      🚒 <strong>Vigili del Fuoco</strong><br />
      101
    </div>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      🚓 <strong>Polizia</strong><br />
      102
    </div>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      🚑 <strong>Ambulanza</strong><br />
      103
    </div>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      🇮🇹 <strong>Ambasciata d'Italia a Tashkent</strong><br />
      +998 78 150 81 11
    </div>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <strong>🇺🇿 Golden Terra Travel - Uzbekistan</strong>

      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href="tel:+998977181870"
          className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black transition hover:bg-[#f0ca55]"
        >
          📞 Chiama
        </a>

        <a
          href="https://wa.me/998977181870"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#D4AF37] px-5 py-2 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>

    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <strong>🇮🇹 Golden Terra Travel - Italia</strong>

      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href="tel:+393475218989"
          className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black transition hover:bg-[#f0ca55]"
        >
          📞 Chiama
        </a>

        <a
          href="https://wa.me/393475218989"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#D4AF37] px-5 py-2 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>

    <div className="rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-4">
      💡 <strong>Consiglio Golden Terra Travel</strong>
      <br />
      Salva questi contatti prima della partenza: in caso di necessità potrai
      contattare rapidamente il nostro staff sia dall'Italia che direttamente
      dall'Uzbekistan.
    </div>

  </div>
</details>

    <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
  <summary className="flex cursor-pointer list-none items-center justify-between">
    <span className="flex items-center text-lg font-semibold">
      <FaSuitcase className="mr-3 text-[#E6C24A]" />
      Cosa mettere in valigia
    </span>
    <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <div className="mt-5 space-y-4 leading-8 text-white/75">

    <p>
      Per vivere il viaggio in totale comfort, ti consigliamo di preparare una valigia pratica e adatta alle diverse condizioni climatiche che potresti incontrare.
    </p>

    <ul className="list-disc space-y-2 pl-6">
      <li>👟 Scarpe comode per le visite a piedi.</li>
      <li>👕 Abbigliamento leggero e traspirante.</li>
      <li>🧥 Una giacca o felpa per la sera.</li>
      <li>🧢 Cappello e occhiali da sole.</li>
      <li>🧴 Crema solare e burrocacao.</li>
      <li>💊 Farmaci personali e medicinali di uso abituale.</li>
      <li>🔋 Power bank e caricabatterie.</li>
      <li>📄 Passaporto e documenti di viaggio.</li>
      <li>💧 Borraccia o bottiglia riutilizzabile.</li>
    </ul>

    <div className="rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-4">
      💡 <strong>Consiglio Golden Terra Travel</strong><br />
      Ricorda che durante le visite a moschee e luoghi di culto è consigliato un abbigliamento rispettoso: spalle e ginocchia coperte sono sempre una scelta appropriata.
    </div>

  </div>

    </details>
<section className="mt-10 rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-br from-[#16072F] to-[#24104A] p-8 text-center">

  <h2 className="text-3xl font-bold text-[#D4AF37]">
    🇺🇿 Buon viaggio!
  </h2>

  <p className="mt-6 leading-8 text-white/80">
    Grazie per aver scelto <strong>Golden Terra Travel</strong>.
  </p>

  <p className="mt-4 leading-8 text-white/80">
    Ti auguriamo un viaggio ricco di emozioni, storia e incontri
    indimenticabili lungo l'antica Via della Seta.
  </p>

  <p className="mt-4 leading-8 text-white/80">
    Per qualsiasi necessità durante il soggiorno, il nostro staff sarà sempre
    a tua disposizione per offrirti assistenza e supporto.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">

    <a
      href="tel:+393475218989"
      className="rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#f0ca55]"
    >
      🇮🇹 Contatta l'Italia
    </a>

    <a
      href="https://wa.me/998977181870"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-[#D4AF37] px-6 py-3 font-bold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
    >
      🇺🇿 WhatsApp Uzbekistan
    </a>

  </div>

  <p className="mt-8 text-sm tracking-[0.25em] text-[#D4AF37]">
    GOLDEN TERRA TRAVEL
  </p>

</section>
    
  </div>
</section>
        
                <section
  id="contact"
  className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] p-6"
>
  <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
    RICHIEDI INFORMAZIONI
  </p>

  <h2 className="mt-4 text-3xl font-bold">
    Vuoi ricevere il programma?
  </h2>

  <p className="mt-4 text-white/75">
    Prima della partenza sarete seguiti dal nostro staff in Italia. Durante il
    viaggio potrete contare anche sull'assistenza diretta del nostro team in
    Uzbekistan.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <a
      href="https://wa.me/393475218989"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl bg-[#E6C24A] px-5 py-4 text-center font-bold text-black transition hover:bg-[#F0D46A]"
    >
      <FaWhatsapp className="mx-auto mb-2 h-6 w-6 text-black" />
      WhatsApp Italia
    </a>

    <a
      href="https://wa.me/998977181870"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl bg-[#E6C24A] px-5 py-4 text-center font-bold text-black transition hover:bg-[#F0D46A]"
    >
      <FaWhatsapp className="mx-auto mb-2 h-6 w-6 text-black" />
      WhatsApp Uzbekistan
    </a>
  </div>

  <a
    href="mailto:info@goldenterratravel.com"
    className="mt-4 block rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-center font-bold transition hover:bg-white/10"
  >
    Email: info@goldenterratravel.com
  </a>
</section>
      </div>
    </main>
  );
}