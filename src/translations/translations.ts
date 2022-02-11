import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsEn = {
  home: {
    h1: 'Hi, my name is Minta Karol',
    h2: 'more information about me and projects',
    h3: 'You will find by clicking buttons below',
    h4: 'or using menu above',
    projectsButtonText: 'PROJECTS',
    infoButtonText: 'INFO',
  },
  projects: {
    technologies: 'Technologies',
    projectAboutId992:
      'Project was done according to exact layout, page is responsive with pagination. Page is about fetching gthub users list and print them on the screen. More details You can see in readme_2 and design.pdf file.',
    projectAboutId993:
      "Project was done according to requirements from task. Page is about fetching books from the server and print them on the screen. There's also pagination.",
    projectAboutId994: 'Project was done according to requirements from task.',
    projectAboutId995:
      'Project to split expenses f.e. if small group of people go on the vacation where they pay often for someone elese. App let to create summary which split this expenses on the persons and print how much they owe or how much someone owes them.',
    projectAboutId996:
      "Project was done according to requirements from task. As addition there's possibility to sort by name.",
    projectAboutId997:
      "To-do app where user can add, delete, mark and unmark done tasks. As addition there's possibility to sort, create 3k notes all with pagination.",
    projectAboutId998:
      "One of the older projects which generates pie chart based on introduced expenses. There's possibility to save and load data to browser cache. Saves are erased after 12 months.",
    projectAboutId999:
      'One of the older projects which generates gants diagram in real time systems.',
  },
  about: {
    quote:
      'Develop a passion for learning. If you do, you will never cease to grow.',
    aboutHeader: 'My experience is wide, I can divide it on two branches:',
    listItem1: 'Experience in automation branch',
    listItem2: 'Experience in IT(front-end) branch',
    schoolHeader: 'University',
    schoolDescription:
      "I'm type of person which likes to fully use the time. That's why I've simultaneously studied at the university(non-stationary) and developed professionally. With this I've graduated Poznan University of Technology(Automation and Robotics) with scholarship. At the university I've participated in interesting projects, most interesting was based on Python and artificial neural networks.",
    professionHeader: 'Professional life',
    professionDescriptionAutomation:
      'Experience in automation branch I was gaining for 5 years. In my professional life I was working as maintenance specialist in maintenance department. My main tasks were about leading installation of processing machines(investor side), translating operator trainings, repairing and maintaining these machines. Further as younger autoamtion specialist I was creating algorithms to control water or gas processes. Some of my projects were about automating pumping station in capital city of Poland(Warsaw), automating railway stations buildings(BMS) and international project with set of relief valves ',
    professionDescriptionIt:
      "Currenly I'm picking challenges in IT branch as front-end developer. A lot of my time I've spended on non commercial projects, that's why I'm proggressing fast. I've experience in such technologies: react, typescript, sassy or python. I know much more usefull frameworks like redux, react-router etc. Currently I'm developing writing tests with React Testing Library and GraphQL.",
    privatelyHeader: 'Privately',
    privatelyDescriptionPart1:
      "My personal life is not any different to professional. I live to the full. I like travelling and hiking, f.e. in last years I've reached ",
    privatelyDescriptionRysy: 'Rysy',
    privatelyDescriptionPart2: ' peak and section of ',
    privatelyDescriptionOrla: "Eagle's Path",
    privatelyDescriptionPart3:
      ". I've learned basics of piano and latino dance. I also spend free time learning languages, for now Ukrainian and Russian language, later on I'm planning to resume Germany language lessons.",

    footerText: 'I am eager to take on next challenges',
  },
  notFound: 'Page not found!',
};

const translationsPl = {
  home: {
    h1: 'Czesc, nazywam sie Minta Karol',
    h2: 'wiecej informacji o mnie oraz projekty',
    h3: 'znajdziesz klikajac ponizsze przyciski',
    h4: 'lub korzystajac z gornego menu',
    projectsButtonText: 'PROJEKTY',
    infoButtonText: 'INFO',
  },
  projects: {
    technologies: 'Technologie',
    projectAboutId992:
      'Projekt wykonany pod zadany layout, strona jest responsywna oraz posiada paginacje. Pobierana oraz wyswietlana jest lista uzytkownikow serwisu github. Szczegoly zadania znajduja sie w readme_2 oraz design.pdf.',
    projectAboutId993:
      'Projekt wykonany zgodnie z technologiami wymaganymi w zadaniu. Pobierana oraz wyswietlana jest lista ksiazek, dodana zostala rowniez paginacja.',
    projectAboutId994:
      'Projekt wykonany zgodnie z technologiami wymaganymi w zadaniu.',
    projectAboutId995:
      'Projekt podzialu wydatkow np. dla grup wyjezdzajcych na wakacje, gdzie za poszczegolne wydatki placa rozne osoby. Pozwala ona stworzyc podsumowanie dla calej grupy na zasadzie dzielenia wartosci ktora kazdy czlonek grupy powinien zwrocic lub otrzymac od reszty grupy',

    projectAboutId996:
      'Projekt wykonany zgodnie z technologiami wymaganymi w zadaniu. Dodana zostala funkcja sortowania po nazwie.',

    projectAboutId997:
      'To-do app, w ktorym mozna dodawac, usuwac i odznaczac wykonane notatki. Dodatkowo wprowadzono sortowanie, mozliwosc stworzenia 3 tysiecy notatek i paginacja.',

    projectAboutId998:
      'Jeden ze starszych projektow, ktory generuje wykres kolowy na podstawie wprowadzonych wydatkow. Mozliwosc zapisania oraz wczytania danych do i z pamieci podrecznej. Zapisy usuwane po uplywie roku',

    projectAboutId999:
      'Jeden ze starszych projektow, ktory generuje wykresy ganta w systemach czasu rzeczywistego.',
  },
  about: {
    quote:
      'Wykształć w sobie pasję do nauki. Jesli Ci się uda juz nigdy nie przestaniesz się rozwijać.',
    aboutHeader:
      'Moje doswiadczenie jest obszerne, mozna je podzielic na dwie branze:',

    listItem1: 'Doswiadczenie w branzy automatyki',
    listItem2: 'Doswiadczenie w branzy IT(front-end)',
    schoolHeader: 'Uczelnia',
    schoolDescription:
      'Jestem typem osoby, ktora lubi wykorzystywac swoj czas w pelni. Dlatego rownolegle edukowalem sie na uczelni(niestacjonarnie) oraz rozwijalem zawodowo. Dzieki temu ukonczylem studia na Politechnice Poznanskiej z kierunku automatyki i robotyki uzyskujac stypendium. Na uczelni podejmowalem sie ciekawych projektow, najciekawsze z nich byly zwiazane z jezykiem Python oraz sztucznymi sieciami neuronowymi.',
    professionHeader: 'Zycie zawodowe',
    professionDescriptionAutomation:
      'Doswiadczenie w branzy automatyki zdobywalem aktywnie przez 5 lat. W moim zyciu zawodowym pracowalem jako specjalista utrzymania ruchu, gdzie moimi glownymi zadaniami bylo prowadzenie instalacji maszyn po stronie inwestora, naprawy i renowacje maszyn oraz tlumaczenie szkolen operatorskich. Dalej jako specjalista ds. automatyki tworzylem algorytmy sterujace procesami. Jednymi z moich projektow byly: przepompownia wody w Warszawie, systemy BMS na dworcach PKP oraz miedzynarodowy projekt stacji ZZU.',
    professionDescriptionIt:
      'Obecnie kolejne wyzwania podejmuje w branzy IT. Sporo czasu spedzilem na projektach nie komercyjnych, stad szybko progresuje. Posiadam doswiadczenie z technologiami takimi jak: react, typescript, sassy czy python. Znam rowniez wiele innych przydatnych frameworkow jak redux, react-router itd. Obecnie rozwijam sie w pisaniu testow(React Testing Library) oraz zglebianiu GraphQL.',
    privatelyHeader: 'Prywatnie',
    privatelyDescriptionPart1:
      'Moje zycie prywatne nie odbiega duzo od zawodowego. Czerpie zycie pelnymi garsciami. Lubie podrozowac i chodzic po gorach np. w ubieglych latach wszedlem na ',
    privatelyDescriptionRysy: 'Rysy',
    privatelyDescriptionPart2: ' oraz przeszedlem pewien odcinek ',
    privatelyDescriptionOrla: 'Orlej Perci',
    privatelyDescriptionPart3:
      '. Nauczylem sie podstaw gry na pianinie oraz tanca latino. Aktywnie ucze sie jezykow. Na ten moment Ukrainski i Rosyjki, pozniej planuje wznowic nauke Niemieckiego.',
    footerText: 'Chetnie podejme sie kolejnych wyzwan',
  },
  notFound: 'Strona o podanym linku nie istnieje!',
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      pl: { translation: translationsPl },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
