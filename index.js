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
    avatar: "images/autorzy/martyna.jpg",
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

for (let i = 1; i <= 12; i++) {

  const square = document.createElement('div');
square.className = 'square';
content.appendChild(square);
}







