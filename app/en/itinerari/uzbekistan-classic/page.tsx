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
    day: "DAY 1",
    icon: "plane",
    title: "Arrival in Tashkent",
    subtitle: "Welcome to Uzbekistan",
    image: "/itinerari/uzbekistan-classic/tashkent-.jpg",
    text: `Arrival at Tashkent International Airport on Turkish Airlines flight TK370, scheduled at approximately 00:55.

Meet our local assistant and transfer to the hotel by private vehicle.

Overnight at the hotel.`,
    mapCity: "arrivalTashkent",
  },
  {
    day: "DAY 2",
    icon: "mosque",
    title: "Tashkent, between history and modernity",
    subtitle: "The capital between tradition and contemporary architecture",
    image: "/itinerari/uzbekistan-classic/tashkent-1.png",
    text: `Breakfast at the hotel.

The day is dedicated to discovering **Tashkent**, Uzbekistan's lively capital, where the charm of tradition blends harmoniously with contemporary architecture.

The visit begins in the **Old City**, a maze of narrow lanes lined with traditional mud-brick houses, before reaching the **Khast Imam Complex**, the spiritual heart of the city.

The complex preserves some of the oldest testimonies of Islamic culture in Central Asia and includes mosques, madrasas, mausoleums and historic libraries decorated with beautiful turquoise tiles. Its most important monuments include the 16th-century **Barak Khan Madrasa**, the **Mausoleum of Kaffal Shashi**, patron saint of Tashkent, and the **Tilla Sheikh Mosque**.

Walking through the quiet courtyards of the **Khast Imam Complex** means immersing yourself in the mystical atmosphere of the Silk Road, among blue domes, decorated arches and ancient spiritual traditions.

Continue with the spectacular **Tashkent Metro**, a true underground museum from the Soviet era, renowned for its elegant stations decorated with mosaics, marble and chandeliers.

Visit **Chorsu Bazaar**, the largest traditional market in Central Asia, where the aromas of spices, dried fruit, freshly baked bread and local produce tell the story of everyday Uzbek life. During the visit, you may also watch the preparation of traditional Uzbek bread.

The day continues with **Independence Square** and **Amir Temur Square**, dominated by the monumental equestrian statue of the great leader and surrounded by the capital's landmark buildings, including the famous **Hotel Uzbekistan**.

Dinner at a restaurant.

Overnight at the hotel.`,
    mapCity: "tashkent",
  },
  {
    day: "DAY 3",
    icon: "plane",
    title: "Tashkent • Urgench • Khiva",
    subtitle: "The city of One Thousand and One Nights",
    image: "/itinerari/uzbekistan-classic/khiva.jpg",
    text: `Breakfast at the hotel and transfer to the airport for the domestic flight to **Urgench**.

Upon arrival, continue to **Khiva**, the legendary "city of One Thousand and One Nights". Check in at the hotel and begin exploring the extraordinary **Ichan Kala**, the fortified old city listed as a **UNESCO World Heritage Site**.

Surrounded by imposing clay walls, **Ichan Kala** is home to turquoise minarets, madrasas, mosques, ancient palaces and atmospheric courtyards decorated with splendid blue and turquoise tiles. At sunset, its quiet streets create a unique Silk Road atmosphere.

During the visit you will discover the **Kunya Ark**, the ancient citadel of Khiva's rulers; the refined **Tash-Hauli Palace**; the famous **Kalta Minor Minaret**, symbol of the city; the monumental **Muhammad Amin Khan Madrasa**; the magnificent **Mausoleum of Pahlavan Mahmud**, a sacred site and masterpiece of Khivan architecture; and the evocative **Juma Mosque**, famous for its hall supported by more than two hundred carved wooden columns.

Along the way, you may also watch traditional **Uzbek bread** being prepared and, with a little luck, encounter a local wedding celebration.

Dinner at a local restaurant followed by an evening walk through the illuminated historic centre.

Overnight at the hotel.`,
    mapCity: "tashkentUrgenchKhiva",
  },
  {
    day: "DAY 4",
    icon: "road",
    title: "Khiva • Bukhara",
    subtitle: "Across the Kyzylkum Desert",
    image: "/itinerari/uzbekistan-classic/bukhara.jpg",
    text: `Breakfast at the hotel.

Depart for **Bukhara**, crossing the spectacular landscapes of the **Kyzylkum Desert**, whose name means "red sands". During the journey, travel alongside the mighty **Amu Darya River**, one of Central Asia's most important waterways.

Arrive in **Bukhara** and check in at the hotel.

In the evening, enjoy an authentic experience in a traditional **home restaurant**, where you will watch the preparation of **Plov**, Uzbekistan's national dish and a symbol of hospitality and tradition.

Evening walk through the beautifully illuminated **Lyabi-Hauz Square**.

Dinner at a restaurant.

Overnight at the hotel.`,
    mapCity: "khivaBukhara",
  },
  {
    day: "DAY 5",
    icon: "mosque",
    title: "Bukhara, the Holy City",
    subtitle: "In the spiritual heart of the Silk Road",
    image: "/itinerari/uzbekistan-classic/bukhara1.jpg",
    text: `Breakfast at the hotel.

A full day dedicated to discovering **Bukhara**, one of Central Asia's most sacred and fascinating cities and, for centuries, an important religious, cultural and commercial centre along the Silk Road.

The visit includes the **Samanid Mausoleum**, the **Bolo-Khauz Mosque**, the majestic **Ark Fortress**, the distinctive **Chor Minor Madrasa** and the monumental **Po-i-Kalyan Complex**, one of the city's true symbols.

Built between the 12th and 16th centuries, the **Po-i-Kalyan Complex** brings together some of the greatest masterpieces of Islamic architecture in Central Asia: the majestic **Kalon Minaret**, almost 47 metres high and a symbol of Bukhara; the spectacular **Kalon Mosque**, one of the largest in Uzbekistan; and the prestigious **Mir-i Arab Madrasa**, still an active centre of Islamic studies today.

The visit continues through the city's ancient **covered bazaars** and atmospheric **Jewish quarter**, including the historic **synagogue** when open.

Free time after the visits.

Dinner at a local restaurant.

Overnight at the hotel.`,
    mapCity: "bukhara",
  },
  {
    day: "DAY 6",
    icon: "train",
    title: "Bukhara • Gijduvan • Samarkand",
    subtitle: "Between ceramics and legendary cities",
    image: "/itinerari/uzbekistan-classic/guduvan.png",
    text: `Breakfast at the hotel.

Depart for **Samarkand**, travelling either by **private car** or by **high-speed train**, depending on the tour arrangements.

When travelling by road, stop in **Gijduvan**, a renowned centre of Uzbek ceramics, and visit the prestigious workshop of the **Narzullaev family**, where ancient pottery techniques have been passed down for generations. You will be able to watch the artisans at work, visit the private museum and taste traditional local bread.

Guests travelling by train will instead enjoy free time in **Bukhara** before transferring to the railway station and boarding the modern **high-speed train** to Samarkand.

Upon arrival, check in at the hotel.

After dinner, enjoy an evening walk through the spectacular **Registan Square**, illuminated in all its splendour.

Overnight at the hotel.`,
    mapCity: "bukharaGijduvanSamarcanda",
  },
  {
    day: "DAY 7",
    icon: "star",
    title: "Samarkand, the Pearl of the Silk Road",
    subtitle: "In the heart of Tamerlane's ancient empire",
    image: "/itinerari/uzbekistan-classic/samarcanda2.jpg",
    text: `Breakfast at the hotel.

A full day dedicated to discovering **Samarkand**, one of the oldest cities in the world and a true jewel of the **Silk Road**.

The highlight of the visit is spectacular **Registan Square**, considered one of the most beautiful monumental squares in the Islamic world. For centuries it was the political, cultural and commercial centre of Central Asia, a meeting place for merchants, scholars and travellers from East and West.

The square is framed by the magnificent **Ulugh Beg**, **Sher-Dor** and **Tillya-Kari Madrasas**, extraordinary masterpieces of Timurid architecture adorned with turquoise mosaics, glazed tiles and refined geometric decoration.

Continue to the monumental **Bibi-Khanym Mosque**, the **Gur-e Amir Mausoleum**, burial place of **Tamerlane**, and the lively **Siyob Bazaar**, filled with the aromas, colours and flavours of Uzbek tradition.

Free time after the visits.

Dinner at a local restaurant.

Overnight at the hotel.`,
    mapCity: "samarkand",
  },
  {
    day: "DAY 8",
    icon: "train",
    title: "Samarkand • Tashkent",
    subtitle: "A final farewell to the Silk Road",
    image: "/itinerari/uzbekistan-classic/gur-e-amir.jpg",
    text: `Breakfast at the hotel.

The morning is dedicated to the final sights of **Samarkand**, including the magnificent **Shah-i-Zinda Complex**, a true masterpiece of Islamic art, and the historic **Ulugh Beg Observatory**, one of the most important astronomical centres of the 15th century.

Continue with one of the journey's most authentic experiences: a visit to **Konigil Village**, home to the historic **Samarkand paper workshop**. Here you can observe the ancient craft of producing paper from mulberry bark using techniques handed down through the centuries.

In the late afternoon, depart by **high-speed train** for **Tashkent**.

Dinner at a local restaurant.

Later, transfer to **Tashkent International Airport** for **Turkish Airlines flight TK371**, scheduled at approximately **02:35** the following day.

End of our services, taking home memories, colours and atmospheres from the ancient Silk Road.`,
    mapCity: "samarkandTashkent",
  },
];
const highlights = [
  "Licensed Tour Operator & DMC in Uzbekistan",
  "Professional local English-speaking guides",
  "International assistance before, during and after the journey",
  "A complete itinerary through history, culture and traditions",
  "Authentic experiences along the Silk Road",
  "Complete organisation from arrival to departure",
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
            <div className="mt-2 flex justify-end gap-2 text-[10px] font-bold">
              <Link
                href="/itinerari/uzbekistan-classic"
                className="rounded-full bg-white/10 px-2 py-1 text-white/70"
              >
                IT
              </Link>
              <span className="rounded-full bg-[#D4AF37] px-2 py-1 text-black">
                EN
              </span>
            </div>
          </div>
        </header>

        <section className="mt-5 overflow-hidden rounded-[2rem] border border-[#6800C8]/50 bg-[#16072F]">
          <Image
            src="/itinerari/uzbekistan-classic/hero.jpg"
            alt="Classic Uzbekistan"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto"
          />

          <div className="px-7 py-7">
            <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
              CLASSIC ITINERARY
            </p>

            <h1 className="mt-4 text-4xl font-bold">Classic Uzbekistan</h1>
            <p className="mt-3 text-xl font-semibold text-[#D4AF37]">
              8 days • 7 nights
            </p>
            <p className="mt-4 text-lg text-justify leading-8 text-white/85">
              An 8-day journey discovering Tashkent, Khiva, Bukhara,
              Gijduvan and Samarkand along the ancient Silk Road.
            </p>

            <p className="mt-4 text-lg text-justify leading-8 text-white/85">
              An itinerary through UNESCO World Heritage cities, historic bazaars,
              madrasas and ancient Silk Road traditions, enriched by authentic
              Uzbek hospitality, the flavours of local cuisine and the warmth
              of a people who welcome every traveller from the heart.
            </p>

            <a
              href="#programma"
              className="mt-7 inline-block rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-black"
            >
              Discover the itinerary
            </a>
          </div>
        </section>
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            GUARANTEED DEPARTURES 2026-2027
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Choose your preferred date
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Travel when it suits you: all listed dates are guaranteed departures.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "5 August",
              "18 August",
              "6 September",
              "17 September",
              "19 October",
              "21 October",
              "3 November",
              "7 November",
              "29 December",
              "20 March",
              "13 May",
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
            alt="Uzbek hospitality"
            width={700}
            height={1000}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />

          <Image
            src="/itinerari/uzbekistan-classic/sapori.jpg"
            alt="Flavours of Uzbekistan"
            width={700}
            height={1000}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
        </section>

        <section className="mt-4 rounded-[2rem] border border-white/15 bg-[#16072F] px-6 py-7 md:p-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            INTERACTIVE MAP
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Discover the journey route
          </h2>

          <p className="mt-3 text-justify leading-8 text-white/85">
            Explore the cities we will visit during the tour along the Silk Road.
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
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">THE JOURNEY</p>

          <h2 className="mt-4 text-3xl font-bold">
            The essence of authentic Uzbekistan
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/85">
            An itinerary embracing timeless art, culture and hospitality: from the
            legendary cities of the Silk Road to masterpieces of Islamic
            architecture, ancient traditions and genuine Uzbek hospitality.
          </p>

          <p className="mt-4 text-justify leading-8 text-white/85">
            The programme is indicative and may change according to flight schedules,
            local conditions, service availability and tour organisation.
          </p>
        </section>

        <section
          id="programma"
          className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7"
        >
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">PROGRAMME</p>

          <h2 className="mt-4 text-3xl font-bold">Day by day</h2>

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

                <div className="px-5 py-6">
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
                    View today's map
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <h2 className="text-5xl font-black uppercase leading-none tracking-[0.04em] text-[#D4AF37] md:text-7xl">
            The Other
            <br />
            Uzbekistan
          </h2>

          <div className="my-5 h-px w-full bg-[#D4AF37]/60" />

          <p className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Beyond the legendary cities of the Silk Road
          </p>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Classic Tour extensions designed for travellers who wish to experience an
            even more authentic side of Uzbekistan.
          </p>

          <div className="mt-8 grid gap-6">
            {[
              {
                title: "A night in a yurt among the Khorezm fortresses",
                image: "/itinerari/uzbekistan-classic/estensioni/yurta.jpg",
                text: `The legendary sand fortresses of Khorezm rise from the desert like lost cities. A journey through archaeology, endless silence and nomadic traditions, including an overnight stay in a yurt beneath the starry skies of Central Asia.`,
                message:
                  "Hello, I would like information about the Classic Tour with the Night in a Yurt among the Khorezm Fortresses extension. Thank you.",
              },
              {
                title: "Fergana Valley",
                image: "/itinerari/uzbekistan-classic/estensioni/fergana.jpg",
                text: `The cradle of some of Uzbekistan's oldest craft traditions, the Fergana Valley preserves the arts of ceramics, silk-making and hospitality passed down through generations.`,
                message:
                  "Hello, I would like information about the Classic Tour with the Fergana Valley extension. Thank you.",
              },
              {
                title: "Aral Sea",
                image: "/itinerari/uzbekistan-classic/estensioni/mar-aral.jpg",
                text: `Where one of the world's largest inland seas once stretched, a surreal landscape of sand, shipwrecks and endless horizons now unfolds.

The Aral Sea tells the story of one of Central Asia's greatest environmental tragedies: abandoned ports, ships resting in the desert and a silence suspended in time.

An intense experience far from the usual routes, combining memory, extreme nature and the haunting beauty of a place unlike anywhere else in the world.`,
                message:
                  "Hello, I would like information about the Classic Tour with the Aral Sea extension. Thank you.",
              },
              {
                title: "Ugam-Chatkal and Lake Charvak",
                image: "/itinerari/uzbekistan-classic/estensioni/charvak.jpg",
                text: `A short distance from Tashkent, the green Bostonlik region is home to some of Uzbekistan's most spectacular natural landscapes.

        Here lies magnificent Lake Charvak, with turquoise waters framed by the majestic mountains of the Western Tian Shan.

        In the heart of Ugam-Chatkal National Park, among valleys, forests and peaks rising above 4,000 metres, you will discover pristine nature and breathtaking views.

        An ideal destination in every season, offering excursions, trekking, water sports and the authentic charm of Central Asia's mountains.

        A place where the silence of nature, the blue of the lake and the grandeur of the Tian Shan come together in an unforgettable experience.`,
                message:
                  "Hello, I would like information about the Classic Tour with the Ugam-Chatkal and Lake Charvak extension. Thank you.",
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
                    Request information
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-2xl font-bold leading-relaxed text-[#D4AF37]">
            Authentic experiences.
            <br />
            For travellers who wish to go beyond the Classic Tour.
          </p>
        </section>
        <section className="mt-6 rounded-[2rem] border border-white/15 bg-[#16072F] px-7 py-7">
          <p className="text-xs tracking-[0.35em] text-[#D4AF37]">
            OUR STRENGTHS
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Why choose Golden Terra Travel
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
            USEFUL INFORMATION
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Everything you need to know before departure
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/85">
            Practical information to help you prepare for your journey to Uzbekistan.
          </p>

          <div className="mt-8 space-y-4">
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaPassport className="mr-3 text-[#E6C24A]" />
                  Travel documents
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <p className="mt-5 text-justify leading-8 text-white/80">
                Travellers must hold a passport valid for at least
                <strong>3 months</strong> after the planned date of departure from Uzbekistan.
                <br />
                <br />
                Visa requirements depend on nationality and length of stay.
                Please check the current regulations before travelling.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaMoneyBillWave className="mr-3 text-[#E6C24A]" />
                  Currency and payments
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <p className="mt-5 text-justify leading-8 text-white/80">
                The official currency is the <strong>Uzbek Som (UZS)</strong>.
                <br />
                <br />
                ATMs and currency exchange offices are available in the main cities.
                Credit cards are generally accepted in hotels, restaurants and major
                tourist businesses.
                <br />
                <br />
                It is advisable to carry a small amount of cash for markets and minor purchases.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaWifi className="mr-3 text-[#E6C24A]" />
                  Mobile service and Internet
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Get online as soon as you arrive in Uzbekistan{" "}
                  <strong>without roaming charges</strong>.
                </p>

                <p>
                  Golden Terra Travel recommends <strong>Holafly</strong>, an
                  international eSIM that lets you connect within minutes
                  without replacing your phone's physical SIM card.
                </p>

                <p>
                  <strong>
                    We recommend purchasing and installing the eSIM before departure
                  </strong>
                  , so it will be ready to activate automatically when you arrive
                  in Uzbekistan.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Simple installation via QR code</li>
                  <li>Automatic activation upon arrival</li>
                  <li>No international roaming charges</li>
                  <li>24/7 customer support</li>
                  <li>Excellent network coverage during the journey</li>
                </ul>

                <a
                  href="https://esim.holafly.com/it/?sref_id=gvulg3l&utm_campaign=referral_program&utm_source=loyalty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#f0ca55]"
                >
                  📶 Purchase your Holafly eSIM
                </a>
              </div>
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaBriefcaseMedical className="mr-3 text-[#E6C24A]" />
                  Health and safety
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <p className="mt-5 text-justify leading-8 text-white/80">
                No compulsory vaccinations are generally required for travellers
                arriving from Italy.
                <br />
                <br />
                Bring any personal medication you may need, together with a small
                travel first-aid kit.
                <br />
                <br />
                Drinking bottled water is recommended during your stay.
              </p>
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaBriefcaseMedical className="mr-3 text-[#E6C24A]" />
                  Travel insurance
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  For greater peace of mind, Golden Terra Travel recommends taking out
                  travel and medical insurance before departure.
                </p>

                <p>A suitable policy may include:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Medical expenses and healthcare assistance</li>
                  <li>Trip cancellation</li>
                  <li>Assistance during the journey</li>
                  <li>Lost or delayed baggage</li>
                  <li>Early return due to unforeseen circumstances</li>
                </ul>

                <p>
                  Below are some useful providers you may consult when comparing
                  different insurance options:
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
                  The choice and purchase of insurance are entirely the traveller's
                  responsibility. Golden Terra Travel provides these references
                  solely for information.
                </p>
              </div>
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaSun className="mr-3 text-[#E6C24A]" />
                  Climate and weather
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Uzbekistan has a continental climate, with hot, dry summers,
                  pleasant springs and autumns, and cold winters.
                </p>

                <p>
                  The best seasons to visit are{" "}
                  <strong>spring</strong> and <strong>autumn</strong>,
                  when temperatures are mild and ideal for sightseeing.
                </p>

                <p>
                  Before departure, we recommend checking the latest weather forecasts
                  for the main cities on the itinerary.
                </p>

                <div className="grid gap-3">
                  <a
                    href="https://www.google.com/search?q=meteo+Tashkent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
                  >
                    🌤️ Tashkent weather
                  </a>

                  <a
                    href="https://www.google.com/search?q=meteo+Khiva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
                  >
                    🌤️ Khiva weather
                  </a>

                  <a
                    href="https://www.google.com/search?q=meteo+Bukhara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
                  >
                    🌤️ Bukhara weather
                  </a>

                  <a
                    href="https://www.google.com/search?q=meteo+Samarkand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/15 bg-white/5 p-4 font-semibold transition hover:bg-white/10"
                  >
                    🌤️ Samarkand weather
                  </a>
                </div>
              </div>
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaPlug className="mr-3 text-[#E6C24A]" />
                  Electricity and sockets
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  Electricity in Uzbekistan is supplied at{" "}
                  <strong>220 volts / 50 Hz</strong>.
                </p>

                <p>
                  The most common sockets are <strong>type C and F</strong>, the same
                  types used in much of continental Europe.
                </p>

                <p>
                  In most cases,{" "}
                  <strong>no adapter is required</strong>. However, a universal
                  adapter may still be useful for certain devices.
                </p>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  💡 <strong>Golden Terra Travel tip</strong>
                  <br />
                  Bring a power bank as well: it is useful for recharging your phone
                  during full days of sightseeing while using maps, taking photos
                  and accessing the Internet.
                </div>
              </div>
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaUtensils className="mr-3 text-[#E6C24A]" />
                  Cuisine
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <p className="mt-5 text-justify leading-8 text-white/80">
                Uzbek specialities not to be missed:
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
                Please advise us of any dietary requirements when booking.
              </p>
            </details>
            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaPhoneAlt className="mr-3 text-[#E6C24A]" />
                  Useful numbers
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  During the journey, keep the main emergency numbers and tour contacts
                  readily available.
                </p>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🚒 <strong>Fire brigade</strong>
                  <br />
                  101
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🚓 <strong>Police</strong>
                  <br />
                  102
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🚑 <strong>Ambulance</strong>
                  <br />
                  103
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  🇮🇹 <strong>Italian Embassy in Tashkent</strong>
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
                      📞 Call
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
                  <strong>🇮🇹 Golden Terra Travel - Italy</strong>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href="tel:+393475218989"
                      className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black transition hover:bg-[#f0ca55]"
                    >
                      📞 Call
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
                  💡 <strong>Golden Terra Travel tip</strong>
                  <br />
                  Save these contacts before departure so that you can quickly reach
                  our staff in Italy or Uzbekistan whenever needed.
                </div>
              </div>
            </details>

            <details className="group rounded-2xl border border-white/15 bg-white/5 p-5 transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="flex items-center text-lg font-semibold">
                  <FaSuitcase className="mr-3 text-[#E6C24A]" />
                  What to pack
                </span>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-5 space-y-4 text-justify leading-8 text-white/80">
                <p>
                  For a comfortable journey, pack practical clothing suitable for the
                  different weather conditions you may encounter.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>👟 Comfortable shoes for walking tours.</li>
                  <li>👕 Lightweight, breathable clothing.</li>
                  <li>🧥 A jacket or sweatshirt for the evening.</li>
                  <li>🧢 A hat and sunglasses.</li>
                  <li>🧴 Sunscreen and lip balm.</li>
                  <li>💊 Personal medication and any regular medicines.</li>
                  <li>🔋 Power bank and chargers.</li>
                  <li>📄 Passport and travel documents.</li>
                  <li>💧 A reusable water bottle.</li>
                </ul>

                <div className="rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-4">
                  💡 <strong>Golden Terra Travel tip</strong>
                  <br />
                  When visiting mosques and places of worship, respectful clothing is
                  recommended: covering shoulders and knees is always appropriate.
                </div>
              </div>
            </details>
            <section className="mt-10 rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-br from-[#16072F] to-[#24104A] p-8 text-center">
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                🇺🇿 Have a wonderful journey!
              </h2>

             <p className="mt-6 text-white/85">
  Thank you for choosing
</p>

<p className="mt-2 text-2xl font-bold text-[#D4AF37]">
  Golden Terra Travel
</p>

              <p className="mt-4 leading-8 text-white/85">
                We wish you a journey filled with emotion, history and unforgettable
                encounters along the ancient Silk Road.
              </p>

              <p className="mt-4 leading-8 text-white/85">
                Throughout your stay, our staff will be available whenever you need
                assistance or support.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+393475218989"
                  className="rounded-full bg-[#D4AF37] px-6 py-3 font-bold text-black transition hover:bg-[#f0ca55]"
                >
                  🇮🇹 Contact Italy
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
            REQUEST INFORMATION
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Would you like to receive the programme?
          </h2>

          <p className="mt-4 text-justify leading-8 text-white/80">
            Before departure, our team in Italy will assist you. During the journey,
            you can also rely on direct support from our team in Uzbekistan.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="https://wa.me/393475218989"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#E6C24A] px-5 py-4 text-center font-bold text-black transition hover:bg-[#F0D46A]"
            >
              <FaWhatsapp className="mx-auto mb-2 h-6 w-6 text-black" />
              WhatsApp Italy
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
