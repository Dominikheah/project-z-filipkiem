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
// KATEGORIE
// =====================
const categories = [
  {
    id: "miasto-gmina",
    name: "Miasto i gmina",
    description: "Decyzje urzędu, inwestycje, komunikacja i sprawy mieszkańców.",
    color: "#0EA5E9",
  },
  {
    id: "kultura",
    name: "Kultura lokalna",
    description: "Wydarzenia, recenzje, rozmowy z twórcami.",
    color: "#8B5CF6",
  },
  {
    id: "sport",
    name: "Sport lokalny",
    description: "Relacje z meczów, ligi amatorskie, sylwetki zawodników.",
    color: "#10B981",
  },
  {
    id: "biznes",
    name: "Biznes i rynek",
    description: "Lokalne firmy, targi, praca i inicjatywy przedsiębiorców.",
    color: "#F59E0B",
  },
  {
    id: "interwencje",
    name: "Interwencje",
    description: "Zgłoszenia mieszkańców, bezpieczeństwo, ważne ostrzeżenia.",
    color: "#EF4444",
  },
];

// =====================
// AUTORZY
// =====================
const authors = [
  {
    id: "martyna-grabowska",
    name: "Martyna Grabowska",
    role: "Redaktorka naczelna",
    avatar: "images/autorzy/martyna.jpg",
  },
  {
    id: "piotr-wasilewski",
    name: "Piotr Wasilewski",
    role: "Reporter",
    avatar: "images/autorzy/piotr.jpg",
  },
  {
    id: "ola-janicka",
    name: "Ola Janicka",
    role: "Dziennikarka kulturalna",
    avatar: "images/autorzy/ola.jpg",
  },
  {
    id: "damian-sobczak",
    name: "Damian Sobczak",
    role: "Dziennikarz sportowy",
    avatar: "images/autorzy/damian.jpg",
  },
  {
    id: "nina-krol",
    name: "Nina Król",
    role: "Redaktorka działu biznes",
    avatar: "images/autorzy/nina.jpg",
  },
];


const posts = [
  {
    id: "remont-ulicy-dlugiej",
    title: "Remont ul. Długiej rusza w listopadzie",
    excerpt: "Utrudnienia potrwają około 3 miesięcy. Sprawdź objazdy.",
    cover: "https://d-art.ppstatic.pl/kadry/k/r/1/22/82/651d75bd5d7dd_o_full.jpg",
    date: "2025-10-20",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
  },
  {
    id: "festiwal-filmowy",
    title: "Festiwal filmowy „Pod szkolnym niebem” już w sobotę",
    excerpt: "Plenerowe pokazy, warsztaty i spotkania z twórcami.",
    cover: "https://picsum.photos/id/1027/600/400",
    date: "2025-10-17",
    categoryId: "kultura",
    authorId: "ola-janicka",
  },
  {
    id: "derby-pilki-noznej",
    title: "Derby piłki nożnej: lider pokonany 2:1",
    excerpt: "Decydująca bramka w 89. minucie po kontrze gospodarzy.",
    cover: "https://picsum.photos/id/1035/600/400",
    date: "2025-10-12",
    categoryId: "sport",
    authorId: "damian-sobczak",
  },
  {
    id: "targi-pracy",
    title: "Targi pracy w hali sportowej – 40 wystawców",
    excerpt: "Oferty staży i etatów dla uczniów i absolwentów.",
    cover: "https://picsum.photos/id/1050/600/400",
    date: "2025-10-08",
    categoryId: "biznes",
    authorId: "nina-krol",
  },
  {
    id: "awaria-wodociagow",
    title: "Awaria wodociągów na osiedlu Północ – beczkowozy",
    excerpt: "Przerwa w dostawie wody potrwa do godz. 18:00.",
    cover: "https://picsum.photos/id/1040/600/400",
    date: "2025-10-23",
    categoryId: "interwencje",
    authorId: "piotr-wasilewski",
  },
  {
    id: "piknik-rodzinny",
    title: "Piknik rodzinny w Parku Miejskim",
    excerpt: "Atrakcje dla dzieci, muzyka na żywo i grill do późnego wieczora.",
    cover: "https://picsum.photos/id/1062/600/400",
    date: "2025-09-28",
    categoryId: "kultura",
    authorId: "ola-janicka",
  },
  {
    id: "nowy-szpital",
    title: "Nowy oddział w szpitalu powiatowym otwarty",
    excerpt: "Nowoczesny sprzęt i 20 dodatkowych łóżek dla pacjentów.",
    cover: "https://picsum.photos/id/1074/600/400",
    date: "2025-10-14",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
  },
  {
    id: "bieg-niepodleglosci",
    title: "Bieg Niepodległości – zapisy otwarte!",
    excerpt: "W tym roku trasa liczy 5 km, start 11 listopada o 11:11.",
    cover: "https://picsum.photos/id/1084/600/400",
    date: "2025-10-25",
    categoryId: "sport",
    authorId: "damian-sobczak",
  },
  {
    id: "nowa-fabryka",
    title: "Nowa fabryka otwarta w strefie przemysłowej",
    excerpt: "Zatrudnienie znajdzie ponad 150 osób z regionu.",
    cover: "https://i0.wp.com/nowoczesny-przemysl.pl/wp-content/uploads/2024/10/Panattoni_Fortaco_3.jpg?resize=640%2C359&ssl=1",
    date: "2025-09-30",
    categoryId: "biznes",
    authorId: "nina-krol",
  },
  {
    id: "zniszczony-pomnik",
    title: "Zniszczony pomnik w centrum miasta – policja szuka sprawców",
    excerpt: "Wandale działali w nocy. Straż miejska analizuje nagrania.",
    cover: "https://rzeszow-news.pl/wp-content/uploads/2025/08/528257152_122213567594119056_1058074323121109861_n.jpg",
    date: "2025-10-18",
    categoryId: "interwencje",
    authorId: "piotr-wasilewski",
  },
  {
    id: "koncert-charytatywny",
    title: "Koncert charytatywny dla hospicjum",
    excerpt: "Dochód z imprezy zostanie przekazany na potrzeby chorych.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TXS9OT0sAHHSYT1nJhsvmJa_cZ1YQWB1Dw&s",
    date: "2025-09-25",
    categoryId: "kultura",
    authorId: "ola-janicka",
  },
  {
    id: "otwarcie-parku",
    title: "Otwarcie nowego parku rekreacyjnego przy rzece",
    excerpt: "Plac zabaw, ścieżki rowerowe i fontanna — nowa przestrzeń dla mieszkańców.",
    cover: "https://nowasol.pl/wp-content/uploads/2025/10/park-krasnala-2-800x450.jpg",
    date: "2025-10-21",
    categoryId: "miasto-gmina",
    authorId: "martyna-grabowska",
  },
];
