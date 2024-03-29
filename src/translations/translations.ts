import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
  home: {
    h1: "Hi, my name is Karol",
    h2: "more information about me and projects",
    h3: "You will find by clicking buttons below",
    h4: "or using menu above",
    projectsButtonText: "PROJECTS",
    infoButtonText: "INFO",
  },
  projects: {
    technologies: "Technologies",
    projectAboutId987:
      "The project is a web application built with React, utilizing SASS for styling and TypeScript for type checking. The front-end is responsive with some level of RWD also using tailwind. The front-end communicates with the back-end, which is built with Node.js and utilizes expressJs to communicate with a MongoDB database. It is also dockerized and deployed on my private server. The docker containers are managed with Docker Compose, making the deployment and management of the application more efficient. The server is set up with automatic backups to ensure data integrity and reliability. Soon will be rewritten to nextJs",
    projectAboutId988:
      "The project is a web application built with React, utilizing SASS for styling and TypeScript for type checking. The front-end is responsive with some level of RWD. The front-end communicates with the back-end, which is built with Node.js and utilizes expressJs to communicate with a MongoDB database. The GraphQL API provides data to the front-end, which is then rendered for the user. It is also dockerized and deployed on my private server. The docker containers are managed with Docker Compose, making the deployment and management of the application more efficient. The server is set up with automatic backups to ensure data integrity and reliability.",
    projectAboutId989:
      "This is nodeJs backend project with mongoDB database. Page is showing riddles app which has basics of crud styled with bootstrap and scss.",
    projectAboutId990:
      "This is rails backend project with sql. Page is showing To-Do app which has basics of to-do apps.",
    projectAboutId991:
      "Project was done according to exact layout, page is responsive with pagination. Page is about fetching gthub users list and print them on the screen. There's also as addition couple tests with react testing library. More details You can see in readme_2 and design.pdf file.",
    projectAboutId992:
      "Project was done according to requirements from task. Page is about fetching books from the server and print them on the screen. There's also pagination.",
    projectAboutId993:
      "Task is based on materials which comes from graphql documentation page. Page shows forum which uses most advantages of graphql query language.",
    projectAboutId994: "Project was done according to requirements from task.",
    projectAboutId995:
      "Project which helps to split expenses f.e. if small group of people go on the vacation where they pay often for someone elese. App let to create summary which split this expenses by the persons and print how much they owe or how much someone owes them.",
    projectAboutId996:
      "Project was done according to requirements from task. As addition there's possibility to sort by name.",
    projectAboutId997:
      "To-do app where user can add, delete, mark and unmark done tasks. As addition there's possibility to sort, create 3k notes all with pagination.",
    projectAboutId998:
      "One of the older projects which generates pie chart based on introduced expenses. There's possibility to save and load data to browser cache. Saves are erased after 12 months.",
    projectAboutId999:
      "One of the older projects which generates gants diagram in real time systems.",
  },
  about: {
    quote:
      "Develop a passion for learning. If you do, you will never cease to grow.",
    aboutHeader: "My experience is wide, I can divide it on two branches:",
    listItem1: "Experience in automation branch",
    listItem2: "Experience in IT branch",
    schoolHeader: "University",
    schoolDescription:
      "I'm type of person which likes to fully use the time. That's why I've simultaneously studied at the university(non-stationary) and developed professionally. With this I've graduated Poznan University of Technology(Automation and Robotics) with scholarship. At the university I've participated in interesting projects, most interesting was based on Python and artificial neural networks.",
    professionHeader: "Professional life",
    professionDescriptionAutomation:
      "Experience in automation branch I was gaining for 5 years. In my professional life I was working as maintenance specialist in maintenance department. My main tasks were about leading installation of processing machines(investor side), translating operator trainings, repairing and maintaining these machines. Further as younger autoamtion specialist I was creating algorithms to control water or gas processes. Some of my projects were about automating pumping station in capital city of Poland(Warsaw), automating railway stations buildings(BMS) and international project with set of relief valves ",
    professionDescriptionIt:
      "Currenly I'm picking challenges in IT branch as front-end developer. A lot of my time I've spended on non commercial projects, that's why I'm proggressing fast. I've experience in such technologies: react, typescript, sass, ruby, node or python and much more.",
    privatelyHeader: "Privately",
    privatelyDescriptionPart1:
      "My personal life is not any different to professional. I live to the full. I like travelling and hiking, f.e. in last years I've reached ",
    privatelyDescriptionRysy: "Rysy",
    privatelyDescriptionPart2: " peak and section of ",
    privatelyDescriptionOrla: "Eagle's Path",
    privatelyDescriptionPart3:
      ". I've learned basics of piano and latino dance. I also spend free time learning languages, for now Ukrainian language, later on I'm planning to resume Germany language lessons.",

    footerText: "I am eager to take on next challenges",
  },
  footer: "Created on the portfolio usage. All rights © reserverd.",
  notFound: "Page not found!",
};

const translationsPl = {
  home: {
    h1: "Cześć, nazywam sie Karol",
    h2: "więcej informacji o mnie oraz projekty",
    h3: "znajdziesz klikając poniższe przyciski",
    h4: "lub korzystając z górnego menu",
    projectsButtonText: "PROJEKTY",
    infoButtonText: "INFO",
  },
  projects: {
    technologies: "Technologie",
    projectAboutId987:
      "Projekt został zbudowany z wykorzystaniem React, używając SASS do stylizacji oraz TypeScript do sprawdzania typów. Front-end jest responsywny wykorzystując również Tailwind. Front-end komunikuje się z back-endem, który jest zbudowany w Node.js i wykorzystując NextJs do komunikacji z bazą danych MongoDB. Dodatkowo, projekt jest zoptymalizowany za pomocą Dockera i uruchomiony na prywatnym serwerze. Kontenery są zarządzane za pomocą narzędzi takich jak Docker Compose, co ułatwia wdrożenie i zarządzanie aplikacją. Serwer jest skonfigurowany w taki sposób aby tworzć automatyczne kopie zapasowe, zapewniając w ten sposób integralność i niezawodność danych. Wkrótce aplikacja zostanie przepisana na NextJs.",
    projectAboutId988:
      "Projekt został zbudowany z wykorzystaniem React, używając SASS do stylizacji oraz TypeScript do sprawdzania typów. Front-end jest responsywny z pewnym poziomem RWD. Front-end komunikuje się z back-endem, który jest zbudowany w Node.js i wykorzystując NextJs do komunikacji z bazą danych MongoDB. GraphQL API dostarcza dane do front-endu, które są renderowane dla użytkownika. Dodatkowo, projekt jest zoptymalizowany za pomocą Dockera i uruchomiony na prywatnym serwerze. Kontenery są zarządzane za pomocą narzędzi takich jak Docker Compose, co ułatwia wdrożenie i zarządzanie aplikacją. Serwer jest skonfigurowany w taki sposób aby tworzć automatyczne kopie zapasowe, zapewniając w ten sposób integralność i niezawodność danych.",
    projectAboutId989:
      "Zadanie w pelni backendowe oparte o nodeJs. Strona z zagadkami wykorzystujaca podstawowy CRUD, baze mongoDB, wystylowana w boostrapie z dodatkiem scssa.",
    projectAboutId990:
      "Zadanie w pelni backendowe oparte o railsy oraz sql'a. Strona przedstawia klasyczna - prosta aplikacje To-Do.",
    projectAboutId991:
      "Projekt wykonany pod zadany layout, strona jest responsywna oraz posiada paginację. Pobierana oraz wyświetlana jest lista użytkowników serwisu github. W aplikacji zostało dodanych również kilka testów z React Testing Library. Szczegóły zadania znajdują sie w readme_2 oraz design.pdf.",
    projectAboutId992:
      "Projekt wykonany zgodnie z technologiami wymaganymi w zadaniu. Pobierana oraz wyświetlana jest lista książek, dodana została również paginacja.",
    projectAboutId993:
      "Zadanie oparte o materiały dostępne na stronie z dokumentacja graphql. Strona przedstawia forum, które wykorzystuje większość zalet graphql'a.",
    projectAboutId994:
      "Projekt wykonany zgodnie z technologiami wymaganymi w zadaniu.",
    projectAboutId995:
      "Projekt podziału wydatków np. dla grup wyjeżdżających na wakacje, gdzie za poszczególne wydatki płacą różne osoby. Pozwala ona stworzyć podsumowanie dla całej grupy na zasadzie dzielenia wartości którą każdy członek grupy powinien zwrócić lub otrzymać od reszty grupy.",
    projectAboutId996:
      "Projekt wykonany zgodnie z technologiami wymaganymi w zadaniu. Dodana została funkcja sortowania po nazwie.",
    projectAboutId997:
      "To-do app, w którym można dodawac, usuwać i odznaczać wykonane notatki. Dodatkowo wprowadzono sortowanie, możliwość stworzenia 3 tysięcy notatek i paginację.",
    projectAboutId998:
      "Jeden ze starszych projektów, który generuje wykres kołowy na podstawie wprowadzonych wydatków. Możliwość zapisania oraz wczytania danych do i z pamięci podręcznej. Zapisy są usuwane po upływie roku.",
    projectAboutId999:
      "Jeden ze starszych projektów, który generuje wykresy ganta w systemach czasu rzeczywistego.",
  },
  about: {
    quote:
      "Wykształć w sobie pasję do nauki. Jesli Ci się uda juz nigdy nie przestaniesz się rozwijać.",
    aboutHeader:
      "Moje doświadczenie jest rozległe, dlatego podzielę je na dwie branże:",

    listItem1: "Doświadczenie w branży automatyki",
    listItem2: "Doświadczenie w branży IT",
    schoolHeader: "Uczelnia",
    schoolDescription:
      "Jestem typem osoby, która lubi wykorzystywać swój czas w pełni. Dlatego rownólegle edukowałem się na uczelni(niestacjonarnie) oraz rozwijałem zawodowo. Dzięki temu ukonczyłem studia na Politechnice Poznańskiej z kierunku automatyki i robotyki uzyskując stypendium. Na uczelni podejmowałem się ciekawych projektów, najciekawsze z nich były związane z jezykiem Python oraz sztucznymi sieciami neuronowymi.",
    professionHeader: "Życie zawodowe",
    professionDescriptionAutomation:
      "Doświadczenie w branzy automatyki zdobywałem aktywnie przez 5 lat. W moim życiu zawodowym pracowałem jako specjalista utrzymania ruchu, gdzie moimi głownymi zadaniami było prowadzenie instalacji maszyn po stronie inwestora, naprawy i renowacje maszyn oraz tłumaczenie szkoleń operatorskich. Dalej jako specjalista ds. automatyki tworzyłem algorytmy sterujące procesami. Jednymi z moich projektów były: przepompownia wody w Warszawie, systemy BMS na dworcach PKP oraz międzynarodowy projekt stacji ZZU.",
    professionDescriptionIt:
      "Obecnie kolejne wyzwania podejmuję w branzy IT. Sporo czasu spedzilem na projektach nie komercyjnych, stąd szybko progresuję. Posiadam doświadczenie z technologiami takimi jak: react, typescript, sass, ruby, node czy python.",
    privatelyHeader: "Prywatnie",
    privatelyDescriptionPart1:
      "Moje życie prywatne nie odbiega bardzo od zawodowego. Czerpię życie pełnymi garściami. Lubię podróżować i chodzić po górach np. w ubiegłych latach wszedłem na ",
    privatelyDescriptionRysy: "Rysy",
    privatelyDescriptionPart2: " oraz przeszedłem pewien odcinek ",
    privatelyDescriptionOrla: "Orlej Perci",
    privatelyDescriptionPart3:
      ". Nauczyłem się podstaw gry na pianinie oraz tańca latino. Aktywnie uczę się języków. Na ten moment Ukraiński, później planuję wznowić naukę języka Niemieckiego.",
    footerText: "Chętnie podejmę się kolejnych wyzwań",
  },
  footer: "Stworzono na potrzeby portfolio. Prawa autorskie © zastrzeżone.",
  notFound: "Strona o podanym linku nie istnieje!",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      pl: { translation: translationsPl },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
