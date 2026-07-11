import Image from "next/image";
import Link from "next/link";

import { HiMapPin } from "react-icons/hi2";

import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPassport,
  FaMoneyBillWave,
  FaWifi,
  FaSun,
  FaUtensils,
  FaSuitcase,
  FaBriefcaseMedical,
  FaChevronDown,
  FaPhoneAlt,
  FaCalendarCheck,
  FaPlug,
  FaPlane,
  FaMosque,
  FaRoad,
  FaTrain,
  FaStar,
} from "react-icons/fa";
const days = [
  {
    day: "1° GIORNO",
    icon: "plane",
    title: "Arrivo a Tashkent",
    subtitle: "Benvenuti in Uzbekistan",
    image: "/itinerari/uzbekistan-classic/tashkent-.jpg",
    text: `Arrivo all'Aeroporto Internazionale di Tashkent con il volo Turkish Airlines TK370, previsto intorno alle ore 00:55.

Incontro con il nostro assistente locale e trasferimento in hotel con mezzi privati.

Pernottamento in hotel.`,
    mapCity: "arrivalTashkent",
  },
  {
    day: "2° GIORNO",
    icon: "mosque",
    title: "Tashkent, tra storia e modernità",
    subtitle: "La capitale tra tradizione e architettura contemporanea",
    image: "/itinerari/uzbekistan-classic/tashkent-1.png",
    text: `Prima colazione in hotel.

La giornata è dedicata alla scoperta di **Tashkent**, la vivace capitale dell'Uzbekistan, dove il fascino della tradizione convive armoniosamente con l'architettura contemporanea.

La visita inizia dalla **Città Vecchia**, un dedalo di strette viuzze costeggiate da antiche abitazioni in mattoni crudi, per poi raggiungere il **Complesso di Khast Imam**, cuore spirituale della città.

Il complesso custodisce alcune delle più antiche testimonianze della cultura islamica dell'Asia Centrale ed è formato da moschee, madrase, mausolei e biblioteche storiche decorate con splendide maioliche turchesi. Tra i monumenti più importanti si trovano la **Madrasa Barak Khan** del XVI secolo, il **Mausoleo di Kaffal Shashi**, santo patrono di Tashkent, e la **Moschea Tilla Sheikh**.

Passeggiare tra i cortili silenziosi del **Complesso di Khast Imam** significa immergersi nell'atmosfera mistica della Via della Seta, tra cupole azzurre, archi decorati e antiche tradizioni spirituali.

Si prosegue con la spettacolare **Metropolitana di Tashkent**, autentico museo sotterraneo dell'epoca sovietica, celebre per le sue eleganti stazioni decorate con mosaici, marmi e lampadari.

Visita del **Bazar Chorsu**, il più grande mercato tradizionale dell'Asia Centrale, dove profumi di spezie, frutta secca, pane appena sfornato e prodotti locali raccontano la quotidianità del popolo uzbeko. Durante la visita sarà possibile assistere anche alla preparazione del tipico pane uzbeko.

La giornata continua con **Piazza dell'Indipendenza** e **Piazza Amir Temur**, dominata dalla monumentale statua equestre del grande condottiero e circondata dagli edifici simbolo della capitale, tra cui il celebre **Hotel Uzbekistan**.

Cena in ristorante.

Pernottamento in hotel.`,
    mapCity: "tashkent",
  },
  {
    day: "3° GIORNO",
    icon: "plane",
    title: "Tashkent • Urgench • Khiva",
    subtitle: "La città delle Mille e Una Notte",
    image: "/itinerari/uzbekistan-classic/khiva.jpg",
    text: `Prima colazione in hotel e trasferimento all'aeroporto per il volo interno verso **Urgench**.

All'arrivo, proseguimento per **Khiva**, la leggendaria "città delle Mille e Una Notte". Sistemazione in hotel e inizio della visita della straordinaria **Ichan Kala**, la città antica fortificata dichiarata **Patrimonio Mondiale UNESCO**.

Circondata da imponenti mura di argilla, **Ichan Kala** custodisce minareti turchesi, madrase, moschee, antichi palazzi e suggestivi cortili decorati con splendide maioliche blu e turchesi. Al tramonto, le sue strade silenziose regalano un'atmosfera unica lungo la Via della Seta.

Durante la visita si scopriranno la **Kunya Ark**, antica cittadella dei sovrani di Khiva, il raffinato **Palazzo Tash-Hauli**, il celebre **Minareto Kalta Minor**, simbolo della città, la monumentale **Madrasa Muhammad Amin Khan**, il magnifico **Mausoleo di Pahlavan Mahmud**, luogo sacro e capolavoro dell'architettura di Khiva, e la suggestiva **Moschea Juma**, famosa per la sua sala sostenuta da oltre duecento colonne lignee scolpite.

Durante il percorso sarà inoltre possibile assistere alla preparazione del tradizionale **pane uzbeko** e, se la fortuna lo permetterà, incontrare le tipiche celebrazioni matrimoniali locali.

Cena in ristorante locale e passeggiata serale nel centro storico illuminato.

Pernottamento in hotel.`,
    mapCity: "tashkentUrgenchKhiva",
  },
  {
    day: "4° GIORNO",
    icon: "road",
    title: "Khiva • Bukhara",
    subtitle: "Attraversando il deserto del Kyzylkum",
    image: "/itinerari/uzbekistan-classic/bukhara.jpg",
    text: `Prima colazione in hotel.

Partenza per **Bukhara** attraversando gli spettacolari paesaggi del **Deserto del Kyzylkum**, il cui nome significa "sabbie rosse". Durante il viaggio si costeggerà il maestoso **fiume Amu Darya**, uno dei più importanti corsi d'acqua dell'Asia Centrale.

Arrivo a **Bukhara** e sistemazione in hotel.

In serata vivrete un'esperienza autentica in un tipico **home restaurant**, dove assisterete alla preparazione del **Plov**, il piatto nazionale uzbeko, simbolo di convivialità e tradizione.

Passeggiata serale nella suggestiva **Piazza Lyabi-Hauz**, splendidamente illuminata.

Cena in ristorante.

Pernottamento in hotel.`,
    mapCity: "khivaBukhara",
  },
  {
    day: "5° GIORNO",
    icon: "mosque",
    title: "Bukhara, la Città Santa",
    subtitle: "Nel cuore spirituale della Via della Seta",
    image: "/itinerari/uzbekistan-classic/bukhara1.jpg",
    text: `Prima colazione in hotel.

Intera giornata dedicata alla scoperta di **Bukhara**, una delle città più sacre e affascinanti dell'Asia Centrale, per secoli importante centro religioso, culturale e commerciale lungo la Via della Seta.

La visita comprende il **Mausoleo dei Samanidi**, la **Moschea Bolo-Khauz**, la maestosa **Fortezza Ark**, la caratteristica **Madrasa Chor Minor** e il monumentale **Complesso Po-i-Kalyan**, autentico simbolo della città.

Il **Complesso Po-i-Kalyan**, costruito tra il XII e il XVI secolo, riunisce alcuni dei più importanti capolavori dell'architettura islamica dell'Asia Centrale: il maestoso **Minareto Kalon**, alto quasi 47 metri e simbolo di Bukhara, la spettacolare **Moschea Kalon**, una delle più grandi dell'Uzbekistan, e la prestigiosa **Madrasa Mir-i Arab**, ancora oggi sede di studi islamici.

La visita prosegue tra gli antichi **bazar coperti** della città e nel suggestivo **quartiere ebraico**, con visita della storica **sinagoga** (se aperta).

Al termine delle visite tempo a disposizione.

Cena in ristorante locale.

Pernottamento in hotel.`,
    mapCity: "bukhara",
  },
  {
    day: "6° GIORNO",
    icon: "train",
    title: "Bukhara • Gijduvan • Samarcanda",
    subtitle: "Tra ceramiche e città leggendarie",
    image: "/itinerari/uzbekistan-classic/guduvan.png",
    text: `Prima colazione in hotel.

Partenza per **Samarcanda**, con trasferimento organizzato in **auto** oppure con il **treno veloce**, in base all'organizzazione del tour.

Nel trasferimento via strada è prevista una sosta a **Gijduvan**, celebre centro della ceramica uzbeka, con visita al prestigioso laboratorio della **famiglia Narzullaev**, dove da generazioni si tramandano le antiche tecniche di lavorazione della ceramica. Sarà possibile osservare gli artigiani al lavoro, visitare il museo privato e degustare il tradizionale pane locale.

Chi viaggia in treno potrà invece godere di tempo libero a **Bukhara** prima del trasferimento alla stazione ferroviaria e della partenza con il moderno **treno veloce** per Samarcanda.

All'arrivo sistemazione in hotel.

Dopo cena passeggiata serale nella spettacolare **Piazza Registan**, illuminata in tutta la sua magnificenza.

Pernottamento in hotel.`,
    mapCity: "bukharaGijduvanSamarcanda",
  },
  {
    day: "7° GIORNO",
    icon: "star",
    title: "Samarcanda, la Perla della Via della Seta",
    subtitle: "Nel cuore dell'antico Impero di Tamerlano",
    image: "/itinerari/uzbekistan-classic/samarcanda2.jpg",
    text: `Prima colazione in hotel.

Intera giornata dedicata alla scoperta di **Samarcanda**, una delle città più antiche del mondo e autentico gioiello della **Via della Seta**.

Il cuore della visita è la spettacolare **Piazza Registan**, considerata una delle piazze monumentali più belle del mondo islamico. Per secoli rappresentò il centro politico, culturale e commerciale dell'Asia Centrale, luogo d'incontro di mercanti, studiosi e viaggiatori provenienti da Oriente e Occidente.

La piazza è dominata dalle magnifiche **Madrasa di Ulugh Beg**, **Sher-Dor** e **Tillya-Kari**, straordinari capolavori dell'architettura timuride, impreziositi da mosaici turchesi, maioliche e raffinati decori geometrici.

La visita prosegue con la monumentale **Moschea Bibi-Khanym**, il **Mausoleo Gur-e Amir**, luogo di sepoltura di **Tamerlano**, e il vivace **Bazar Siyob**, ricco di profumi, colori e specialità della tradizione uzbeka.

Al termine delle visite tempo a disposizione.

Cena in ristorante locale.

Pernottamento in hotel.`,
    mapCity: "samarkand",
  },
  {
    day: "8° GIORNO",
    icon: "train",
    title: "Samarcanda • Tashkent",
    subtitle: "L'ultimo saluto alla Via della Seta",
    image: "/itinerari/uzbekistan-classic/gur-e-amir.jpg",
    text: `Prima colazione in hotel.

La mattinata è dedicata alle ultime visite di **Samarcanda**, con il magnifico **Complesso di Shah-i-Zinda**, autentico capolavoro dell'arte islamica, e lo storico **Osservatorio di Ulugh Beg**, uno dei più importanti centri astronomici del XV secolo.

A seguire una delle esperienze più autentiche del viaggio: visita al **Villaggio di Konigil**, dove si trova la storica manifattura della **Carta di Samarcanda**. Qui sarà possibile assistere all'antica lavorazione artigianale della carta ottenuta dalla corteccia del gelso, secondo tecniche tramandate da secoli.

Nel tardo pomeriggio partenza con il **treno veloce** per **Tashkent**.

Cena in ristorante locale.

Successivamente trasferimento all'**Aeroporto Internazionale di Tashkent** per il volo **Turkish Airlines TK371**, previsto intorno alle ore **02:35** del giorno successivo.

Fine dei nostri servizi, con il cuore colmo di ricordi, colori e atmosfere dell'antica Via della Seta.`,
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
  arrivalTashkent:
    "https://www.google.com/maps/d/u/6/viewer?mid=1YlmVCEGdcJyGlDjir2gkPLbKgxVIiEc",

  tashkent:
    "https://www.google.com/maps/d/u/6/viewer?mid=1B1klRr5PwVkqcWLjCOVQA31Po4FfjrI",

  tashkentUrgenchKhiva:
    "https://www.google.com/maps/d/u/6/viewer?mid=1AwdsbB6Jw1GHciA0eTGJ7rz91MTABNo",

  khivaBukhara:
    "https://www.google.com/maps/d/u/6/viewer?mid=19fFQ2Rxaovy-reF2y7u2FzI6qN6EYEw",

  bukhara:
    "https://www.google.com/maps/d/u/6/viewer?mid=1nF4K57NBLwIuUMGqN5uMeB6S3csM5cI",

  bukharaGijduvanSamarcanda:
    "https://www.google.com/maps/d/u/6/viewer?mid=1mJL_K103plggEhstakP2UkwDISbF3BU",

  samarkand:
    "https://www.google.com/maps/d/u/6/viewer?mid=1jUOQe5RAHJH9ojzAJiQO_hI-1RRivoM",

  samarkandTashkent:
    "https://www.google.com/maps/d/u/6/viewer?mid=15wiEHoLBXfkXPoDsYKW0b_QMR-XPL50",
};

const dayIcons = {
  plane: <FaPlane className="h-7 w-7 shrink-0 text-[#D4AF37]" />,
  mosque: <FaMosque className="h-7 w-7 shrink-0 text-[#D4AF37]" />,
  road: <FaRoad className="h-7 w-7 shrink-0 text-[#D4AF37]" />,
  train: <FaTrain className="h-7 w-7 shrink-0 text-[#D4AF37]" />,
  star: <FaStar className="h-7 w-7 shrink-0 text-[#D4AF37]" />,
};

export default function UzbekistanClassicPage() {
  return (
    <main className="min-h-screen bg-[#080414] text-white">
      <div className="mx-auto max-w-[620px] px-4 pb-24 sm:px-5">
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

          <div className="px-7 py-7">
            <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
              ITINERARIO CLASSICO
            </p>

            <h1 className="mt-4 text-4xl font-bold">Uzbekistan Classico</h1>
            <p className="mt-3 text-xl font-semibold text-[#D4AF37]">
              8 giorni • 7 notti
            </p>
            <p className="mt-4 text-lg text-justify leading-8 text-white/85">
              Un viaggio di 8 giorni alla scoperta di Tashkent, Khiva, Bukhara,
              Gijduvan e Samarcanda, lungo l'antica Via della Seta.
            </p>

            <p className="mt-4 text-lg text-justify leading-8 text-white/85">
              Un itinerario tra città Patrimonio UNESCO, bazar storici, madrase
              e antiche tradizioni della Via della Seta, arricchito
              dall'autentica ospitalità uzbeka, dai sapori della cucina locale e
              dai sorrisi di un popolo che accoglie ogni viaggiatore con il
              cuore.
            </p>

            <a
              href="#programma"
              className="mt-7 inline-block rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black"
            >
              Scopri l’itinerario
            </a>
          </div>
        </section>
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            PARTENZE GARANTITE 2026-2027
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Scegli la data che preferisci
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Parti quando preferisci: tutte le date indicate sono partenze
            garantite.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
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
              "13 Maggio",
            ].map((date) => (
              <div
                key={date}
                className="flex min-h-[72px] items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-3 py-3 text-center text-sm font-semibold leading-tight transition-all duration-300 hover:-translate-y-1 hover:border-[#E6C24A] hover:bg-white/10 sm:text-base"
              >
                <FaCalendarCheck className="h-5 w-5 shrink-0 text-[#E6C24A]" />
                <span>{date}</span>
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

        <section className="mt-4 rounded-[2rem] border border-white/15 bg-[#16072F] px-6 py-7 md:p-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            MAPPA INTERATTIVA
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Scopri il percorso del viaggio
          </h2>

          <p className="mt-3 text-justify leading-8 text-white/85">
            Esplora le città che visiteremo durante il tour lungo la Via della
            Seta.
          </p>

          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10">
            <iframe
              className="block h-[520px] w-full"
              src="https://www.google.com/maps/d/u/6/embed?mid=12wC1NP7fO8dEAsd8Lch93hYelH27OW0&ehbc=2E312"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">IL VIAGGIO</p>

          <h2 className="mt-4 text-3xl font-bold">
            L’essenza dell’Uzbekistan autentico
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Un itinerario che racchiude arte, cultura e accoglienza senza tempo:
            dalle città leggendarie della Via della Seta ai capolavori
            dell'architettura islamica, tra antiche tradizioni e autentica
            ospitalità uzbeka.
          </p>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Il programma è indicativo e può subire variazioni in base agli
            operativi voli, alle condizioni locali, alla disponibilità dei
            servizi e all’organizzazione del viaggio.
          </p>
        </section>

        <section
          id="programma"
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">PROGRAMMA</p>

          <h2 className="mt-4 text-3xl font-bold">Giorno per giorno</h2>

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

                <div className="px-4 py-6">
                  <p className="text-sm font-bold text-[#D4AF37]">{item.day}</p>

                  <div className="mt-2 flex items-center gap-3">
                    {item.icon && dayIcons[item.icon as keyof typeof dayIcons]}

                    <h3 className="text-[1.65rem] font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {item.subtitle && (
                    <p className="mt-1 text-base font-medium tracking-wide text-[#D4AF37]">
                      {item.subtitle}
                    </p>
                  )}

                  <div className="mt-4 space-y-4 text-justify leading-8 text-white/80">
                    {item.text.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: paragraph.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong class='text-white'>$1</strong>",
                          ),
                        }}
                      />
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
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <h2 className="text-5xl font-black uppercase leading-none tracking-[0.04em] text-[#D4AF37] md:text-7xl">
            L&apos;altro
            <br />
            Uzbekistan
          </h2>

          <div className="my-5 h-px w-full bg-[#D4AF37]/60" />

          <p className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Oltre le città leggendarie della Via della Seta
          </p>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Estensioni del Tour Classico pensate per chi desidera vivere un
            Uzbekistan ancora più autentico.
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

                <div className="px-6 py-6">
                  <h3 className="text-[1.65rem] font-bold leading-tight">
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-4 text-justify leading-8 text-white/80">
                    {item.text.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/393475218989?text=${encodeURIComponent(
                      item.message,
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
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
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
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            INFORMAZIONI UTILI
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Tutto quello che c&apos;è da sapere prima della partenza
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Alcune informazioni pratiche per organizzare al meglio il vostro
            viaggio in Uzbekistan.
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

              <p className="mt-5 text-justify leading-8 text-white/80">
                Per i cittadini italiani è necessario il passaporto con validità
                residua di almeno <strong>6 mesi</strong> dalla data di rientro.
                <br />
                <br />
                Per soggiorni turistici in Uzbekistan non è richiesto il visto
                entro i limiti previsti dalla normativa vigente.
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

              <p className="mt-5 text-justify leading-8 text-white/80">
                La valuta ufficiale è il <strong>Som uzbeko (UZS)</strong>.
                <br />
                <br />
                Nelle principali città sono disponibili bancomat e uffici di
                cambio. Le carte di credito sono generalmente accettate negli
                hotel, nei ristoranti e nelle principali attività turistiche.
                <br />
                <br />
                Per mercati e piccoli acquisti è consigliabile avere sempre con
                sé una piccola quantità di contanti.
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

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Naviga in Internet fin dal tuo arrivo in Uzbekistan{" "}
                  <strong>senza costi di roaming</strong>.
                </p>

                <p>
                  Golden Terra Travel consiglia <strong>Holafly</strong>, la
                  eSIM internazionale che permette di connettersi in pochi
                  minuti senza sostituire la SIM del proprio telefono.
                </p>

                <p>
                  <strong>
                    Ti consigliamo di acquistare e installare la eSIM prima
                    della partenza
                  </strong>
                  , così sarà pronta ad attivarsi automaticamente al tuo arrivo
                  in Uzbekistan.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Installazione semplice tramite QR Code</li>
                  <li>Attivazione automatica all&apos;arrivo</li>
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
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaBriefcaseMedical className="mr-3 text-[#E6C24A]" />
                  Salute e sicurezza
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <p className="mt-5 text-justify leading-8 text-white/80">
                Per i viaggiatori provenienti dall'Italia non sono previste
                vaccinazioni obbligatorie.
                <br />
                <br />
                Si consiglia di portare con sé eventuali farmaci di uso
                personale e una piccola farmacia da viaggio.
                <br />
                <br />
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

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Per viaggiare con maggiore serenità, Golden Terra Travel
                  consiglia di stipulare prima della partenza
                  un&apos;assicurazione di viaggio e sanitaria.
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
                  Di seguito trovi alcuni riferimenti utili per confrontare le
                  diverse soluzioni assicurative:
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
                  La scelta e la stipula dell&apos;assicurazione sono a
                  discrezione del viaggiatore. Golden Terra Travel mette a
                  disposizione questi riferimenti come semplice servizio
                  informativo.
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

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  L&apos;Uzbekistan ha un clima continentale, con estati calde e
                  secche, primavere e autunni piacevoli e inverni freddi.
                </p>

                <p>
                  I periodi migliori per visitare il Paese sono la{" "}
                  <strong>primavera</strong> e l&apos;<strong>autunno</strong>,
                  quando le temperature sono miti e ideali per le visite.
                </p>

                <p>
                  Prima della partenza ti consigliamo di consultare le
                  previsioni meteo aggiornate delle principali città del tour.
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

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  In Uzbekistan la corrente elettrica è a{" "}
                  <strong>220 Volt / 50 Hz</strong>.
                </p>

                <p>
                  Le prese più diffuse sono di <strong>tipo C e F</strong>, le
                  stesse utilizzate nella maggior parte dei Paesi europei,
                  compresa l'Italia.
                </p>

                <p>
                  Nella maggior parte dei casi{" "}
                  <strong>non è necessario alcun adattatore</strong>. Se
                  utilizzi dispositivi particolari, può essere comunque utile
                  portare con sé un adattatore universale.
                </p>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  💡 <strong>Consiglio Golden Terra Travel</strong>
                  <br />
                  Porta con te anche un power bank: durante le visite
                  giornaliere sarà molto utile per ricaricare lo smartphone
                  mentre utilizzi mappe, fotografie e Internet.
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

              <p className="mt-5 text-justify leading-8 text-white/80">
                Tra le specialità della cucina uzbeka da non perdere:
                <br />
                <br />
                • Plov
                <br />
                • Samsa
                <br />
                • Shashlik
                <br />
                • Lagman
                <br />
                • Pane tradizionale Non
                <br />
                <br />
                Eventuali esigenze alimentari possono essere comunicate al
                momento della prenotazione.
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

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Durante il viaggio è sempre consigliabile avere a portata di
                  mano i principali numeri di emergenza e i contatti del tour.
                </p>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🚒 <strong>Vigili del Fuoco</strong>
                  <br />
                  101
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🚓 <strong>Polizia</strong>
                  <br />
                  102
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🚑 <strong>Ambulanza</strong>
                  <br />
                  103
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🇮🇹 <strong>Ambasciata d'Italia a Tashkent</strong>
                  <br />
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
                  Salva questi contatti prima della partenza: in caso di
                  necessità potrai contattare rapidamente il nostro staff sia
                  dall'Italia che direttamente dall'Uzbekistan.
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

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Per vivere il viaggio in totale comfort, ti consigliamo di
                  preparare una valigia pratica e adatta alle diverse condizioni
                  climatiche che potresti incontrare.
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
                  💡 <strong>Consiglio Golden Terra Travel</strong>
                  <br />
                  Ricorda che durante le visite a moschee e luoghi di culto è
                  consigliato un abbigliamento rispettoso: spalle e ginocchia
                  coperte sono sempre una scelta appropriata.
                </div>
              </div>
            </details>
            <section className="mt-10 rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-br from-[#16072F] to-[#24104A] p-8 text-center">
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                🇺🇿 Buon viaggio!
              </h2>

             <p className="mt-6 text-white/85">
  Grazie per aver scelto
</p>

<p className="mt-2 text-2xl font-bold text-[#D4AF37]">
  Golden Terra Travel
</p>

              <p className="mt-4 leading-8 text-white/85">
                Ti auguriamo un viaggio ricco di emozioni, storia e incontri
                indimenticabili lungo l'antica Via della Seta.
              </p>

              <p className="mt-4 leading-8 text-white/85">
                Per qualsiasi necessità durante il soggiorno, il nostro staff
                sarà sempre a tua disposizione per offrirti assistenza e
                supporto.
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
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            RICHIEDI INFORMAZIONI
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Vuoi ricevere il programma?
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/80">
            Prima della partenza sarete seguiti dal nostro staff in Italia.
            Durante il viaggio potrete contare anche sull'assistenza diretta del
            nostro team in Uzbekistan.
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
