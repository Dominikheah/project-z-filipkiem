// =====================
// KONFIGURACJA PORTALU
// =====================
const site = {
  meta: {
    title: "Lokalna redakcja",
    description: "Wiadomości, kultura i sport z naszej gminy – codziennie najważniejsze lokalne tematy.",
    language: "pl-PL",
  },
  nav: [
    { label: "Start", path: "index.html" },
    { label: "O redakcji", path: "autorzy.html" },
    { label: "Kategorie", path: "kategorie.html" },
    { label: "Aktualności", path: "aktualnosci.html" },
    { label: "Kontakt", path: "kontakt.html" },
  ],
  social: [
    { id: "facebook", label: "Facebook", url: "#" },
    { id: "instagram", label: "Instagram", url: "#" },
    { id: "x", label: "X (Twitter)", url: "#" },
  ],
  contact: {
    email: "kontakt@lokalna-redakcja.pl",
    phone: "+48 600 111 222",
    address: "ul. Rynek 5, 00-000 Nasze Miasto",
    mapImage: "images/mapa-miasta.jpg",
  },
};

// =====================
// KATEGORIE (DZIAŁY)
// =====================
const categories = [
  {
    id: "miasto-gmina",
    name: "Miasto i gmina",
    description: "Decyzje urzędu, inwestycje, komunikacja i sprawy mieszkańców.",
    color: "#0EA5E9",
    icon: "icon-townhall",
    cover: "images/kategorie/miasto.jpg",
  },
  {
    id: "kultura",
    name: "Kultura lokalna",
    description: "Wydarzenia, recenzje, rozmowy z twórcami.",
    color: "#8B5CF6",
    icon: "icon-mask",
    cover: "images/kategorie/kultura.jpg",
  },
  {
    id: "sport",
    name: "Sport lokalny",
    description: "Relacje z meczów, ligi amatorskie, sylwetki zawodników.",
    color: "#10B981",
    icon: "icon-sport",
    cover: "images/kategorie/sport.jpg",
  },
  {
    id: "biznes",
    name: "Biznes i rynek",
    description: "Lokalne firmy, targi, praca i inicjatywy przedsiębiorców.",
    color: "#F59E0B",
    icon: "icon-briefcase",
    cover: "images/kategorie/biznes.jpg",
  },
  {
    id: "interwencje",
    name: "Interwencje",
    description: "Zgłoszenia mieszkańców, bezpieczeństwo, ważne ostrzeżenia.",
    color: "#EF4444",
    icon: "icon-alert",
    cover: "images/kategorie/interwencje.jpg",
  },
];

// =====================
// AUTORZY / REDAKCJA
// =====================
const authors = [
  {
    id: "martyna-grabowska",
    name: "Martyna Grabowska",
    role: "Redaktorka naczelna",
    cover: "images/autorzy/martyna.jpg",
    bio: "Koordynuje pracę redakcji, pisze o sprawach samorządowych.",
    email: "martyna@lokalna-redakcja.pl",
    socials: { x: "#", instagram: "#" },
    beats: ["miasto-gmina", "interwencje"],
  },
  {
    id: "piotr-wasilewski",
    name: "Piotr Wasilewski",
    role: "Reporter",
    avatar: "images/autorzy/piotr.jpg",
    bio: "Lubi tematy społeczne i szybkie relacje z miejsca zdarzeń.",
    email: "piotr@lokalna-redakcja.pl",
    socials: { facebook: "#", x: "#" },
    beats: ["interwencje", "biznes"],
  },
  {
    id: "ola-janicka",
    name: "Ola Janicka",
    role: "Dziennikarka kulturalna",
    avatar: "images/autorzy/ola.jpg",
    bio: "Recenzuje wydarzenia kulturalne i rozmawia z artystami.",
    email: "ola@lokalna-redakcja.pl",
    socials: { instagram: "#" },
    beats: ["kultura"],
  },
  {
    id: "damian-sobczak",
    name: "Damian Sobczak",
    role: "Dziennikarz sportowy",
    avatar: "images/autorzy/damian.jpg",
    bio: "Relacjonuje rozgrywki lokalnych drużyn i amatorki.",
    email: "damian@lokalna-redakcja.pl",
    socials: { x: "#" },
    beats: ["sport"],
  },
  {
    id: "nina-krol",
    name: "Nina Król",
    role: "Redaktorka działu biznes",
    avatar: "images/autorzy/nina.jpg",
    bio: "Pisze o lokalnych firmach, rynku pracy i inicjatywach.",
    email: "nina@lokalna-redakcja.pl",
    socials: { linkedin: "#" },
    beats: ["biznes", "miasto-gmina"],
  },
];
const posts = [
  {
    id: "remont-ulicy-dlugiej",
    slug: "remont-ulicy-dlugiej",
    title: "Remont ul. Długiej rusza w listopadzie",
    excerpt: "Utrudnienia potrwają około 3 miesięcy. Sprawdź objazdy.",
    content: "Ratusz ogłosił harmonogram prac na ul. Długiej. W pierwszym etapie zamknięte zostaną odcinki przy rynku...",
    cover: "https://picsum.photos/420/236?random=109",
    date: "2025-10-20T08:00:00+02:00",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
    tags: ["inwestycje", "drogi", "komunikat"],
    readingMinutes: 3,
    featured: true,
  },
  {
    id: "festiwal-filmowy-pod-szkolnym-niebem",
    slug: "festiwal-filmowy-pod-szkolnym-niebem",
    title: "Festiwal filmowy „Pod szkolnym niebem” już w sobotę",
    excerpt: "Plenerowe pokazy, warsztaty i spotkania z twórcami.",
    content: "Na placu przy domu kultury stanie ekran o szerokości 12 metrów. Organizatorzy zapowiadają konkurs krótkich metraży...",
    cover: "https://picsum.photos/420/236?random=108",
    date: "2025-10-17T12:00:00+02:00",
    categoryId: "kultura",
    authorId: "ola-janicka",
    tags: ["kino", "wydarzenia"],
    readingMinutes: 2,
    featured: true,
  },
  {
    id: "derby-pilki-noznej-lider-pokonany",
    slug: "derby-pilki-noznej-lider-pokonany",
    title: "Derby piłki nożnej: lider pokonany 2:1",
    excerpt: "Decydująca bramka w 89. minucie po kontrze gospodarzy.",
    content: "Mecz rozpoczął się od przewagi gości, ale po przerwie miejscowi przejęli inicjatywę...",
    cover: "https://picsum.photos/420/236?random=107",
    date: "2025-10-12T18:30:00+02:00",
    categoryId: "sport",
    authorId: "damian-sobczak",
    tags: ["piłka nożna", "derby"],
    readingMinutes: 3,
    featured: true,
  },
  {
    id: "targi-pracy-w-hali-sportowej",
    slug: "targi-pracy-w-hali-sportowej",
    title: "Targi pracy w hali sportowej – 40 wystawców",
    excerpt: "Oferty staży i etatów dla uczniów i absolwentów.",
    content: "W programie konsultacje CV, warsztaty z rekruterami i strefa doradztwa zawodowego...",
    cover: "https://picsum.photos/420/236?random=106",
    date: "2025-10-08T10:00:00+02:00",
    categoryId: "biznes",
    authorId: "nina-krol",
    tags: ["praca", "targi", "edukacja"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "awaria-wodociagow-na-osiedlu",
    slug: "awaria-wodociagow-na-osiedlu",
    title: "Awaria wodociągów na osiedlu Północ – beczkowozy",
    excerpt: "Przerwa w dostawie wody potrwa do godz. 18:00.",
    content: "Zakład komunalny informuje o pęknięciu magistrali przy ul. Leśnej. Na miejscu pracują służby...",
    cover: "https://picsum.photos/420/236?random=105",
    date: "2025-10-23T07:30:00+02:00",
    categoryId: "interwencje",
    authorId: "piotr-wasilewski",
    tags: ["awaria", "komunikat"],
    readingMinutes: 1,
    featured: true,
  },
  {
    id: "otwarcie-inkubatora-przedsiebiorczosci",
    slug: "otwarcie-inkubatora-przedsiebiorczosci",
    title: "Otwarcie Inkubatora Przedsiębiorczości",
    excerpt: "Nowa przestrzeń dla startujących firm w centrum miasta.",
    content: "W budynku dawnej poczty powstało miejsce coworkingowe z doradztwem i szkoleniami...",
    cover: "https://picsum.photos/420/236?random=104",
    date: "2025-09-29T09:00:00+02:00",
    categoryId: "biznes",
    authorId: "nina-krol",
    tags: ["startup", "coworking"],
    readingMinutes: 3,
    featured: false,
  },
  {
    id: "modernizacja-parkowej-alei",
    slug: "modernizacja-parkowej-alei",
    title: "Modernizacja parkowej alei – więcej zieleni",
    excerpt: "Ławki, oświetlenie LED i nowe nasadzenia drzew.",
    content: "Zarząd zieleni zapowiada także budki lęgowe i łąkę kwietną przy stawie...",
    cover: "https://picsum.photos/420/236?random=103",
    date: "2025-10-05T14:15:00+02:00",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
    tags: ["zieleń", "inwestycje"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "premiera-spektaklu-teatr-mlodych",
    slug: "premiera-spektaklu-teatr-mlodych",
    title: "Premiera spektaklu Teatru Młodych",
    excerpt: "„Mosty” – opowieść o sąsiedztwie i wspólnocie.",
    content: "Po spektaklu rozmowa z reżyserką i aktorami. Bilety do odbioru bezpłatnie w DK...",
    cover: "https://picsum.photos/420/236?random=102",
    date: "2025-10-16T19:00:00+02:00",
    categoryId: "kultura",
    authorId: "ola-janicka",
    tags: ["teatr", "premiera"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "turniej-siatkowki-amatorow",
    slug: "turniej-siatkowki-amatorow",
    title: "Turniej siatkówki amatorów – zapisy otwarte",
    excerpt: "Drużyny 6-osobowe, finał w niedzielę.",
    content: "Zgłoszenia przez formularz MOSiR. Organizator zapewnia sprzęt i sędziowanie...",
    cover: "https://picsum.photos/420/236?random=101",
    date: "2025-09-21T16:45:00+02:00",
    categoryId: "sport",
    authorId: "damian-sobczak",
    tags: ["siatkówka", "turniej"],
    readingMinutes: 2,
    featured: false,
  },
  {
    id: "patrole-spoleczne-na-osiedlach",
    slug: "patrole-spoleczne-na-osiedlach",
    title: "Patrole społeczne na osiedlach – pilotaż",
    excerpt: "Wspólne działania straży miejskiej i mieszkańców.",
    content: "Celem programu jest szybsza reakcja na drobne wykroczenia i poprawa bezpieczeństwa...",
    cover: "https://picsum.photos/420/236?random=10",
    date: "2025-10-03T11:30:00+02:00",
    categoryId: "interwencje",
    authorId: "piotr-wasilewski",
    tags: ["bezpieczeństwo", "osiedla"],
    readingMinutes: 3,
    featured: false,
  },
];


const navbarContainer = document.getElementById('navbar');


const nav = document.createElement('nav');


const logo = document.createElement('div');
logo.className = 'logo';
logo.textContent = 'Lokalna Redakcja';


const menuItems = ['Start', 'O redakcji', 'Kategorie', 'Aktualności', 'Kontakt'];
const ul = document.createElement('ul');

menuItems.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#'   // tymczasowe linki
  a.textContent = item;
  li.appendChild(a);
  ul.appendChild(li);
});

// Składamy navbar
nav.appendChild(logo);
nav.appendChild(ul);
navbarContainer.appendChild(nav);



const content = document.getElementById('content');

for (let i = 0; i <= posts.length; i++) {

  let square = document.createElement('div');
square.classList.add("square");


let img = document.createElement("img");
let imgSrc = posts[i].cover;
img.src = imgSrc;
square.appendChild(img);
content.appendChild(square);

}








