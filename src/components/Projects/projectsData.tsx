import { ProjectDetailsType } from '../../types';
import metapakTaskImage from '../../images/projects/github-users.png';
import bookAppImage from '../../images/projects/book-app.png';
import leocodeAppImage from '../../images/projects/search-list.png';
import expensesSplitterApp from '../../images/projects/moneySplitter_1.png';
import qarsonCarrApp from '../../images/projects/qrson-car-app.png';
import warsawExpoApp from '../../images/projects/warsaw-expo-app.png';
import expensesApp from '../../images/projects/expenses.png';
import scrTaskApp from '../../images/projects/scrTask.png';

export const projectsData: ProjectDetailsType[] = [
  {
    technologiesShort: 'React | Redux | Typescript',
    technologiesLong:
      'React | Redux | Typescript | Scss | Ajax | Routing | RWD | Eslint + Prettier',
    imgPath: metapakTaskImage,
    imgAlt: 'Users list',
    projectName: 'Github-Users-App',
    codeHref: 'https://github.com/Karlos97/METAPAK-task-public',
    liveHref: 'https://karlos97.github.io/METAPAK-task-public/',
    about:
      'Projekt wykonany pod zadany layout, strona jest responsywna, szczegoly zadania znajduja sie w readme_2 oraz design.pdf.',
    show: false,
    id: '992',
  },
  {
    technologiesShort: 'React | Redux | Ajax',
    technologiesLong: 'React | Redux | Scss | Ajax | Routing | Prettier',
    imgPath: bookAppImage,
    imgAlt: 'Book list',
    projectName: 'Book-App',
    codeHref: 'https://github.com/Karlos97/METAPAK-task-public',
    liveHref: 'https://karlos97.github.io/METAPAK-task-public/',
    about: 'Projekt wykonany zgodnie z wymaganymi technologia.',
    show: false,
    id: '993',
  },

  {
    technologiesShort: 'React | Redux | Typescript',
    technologiesLong: 'React | Redux | Scss | Ajax | Typescript',
    imgPath: leocodeAppImage,
    imgAlt: 'Book list',
    projectName: 'Search-list',
    codeHref: 'https://github.com/Karlos97/METAPAK-task-public',
    liveHref: 'https://karlos97.github.io/leocode-app/',
    about: 'Projekt wykonany zgodnie z wymaganymi technologia.',
    show: false,
    id: '994',
  },
  {
    technologiesShort: 'React | Context | Scss',
    technologiesLong: 'React | Context | Scss',
    imgPath: expensesSplitterApp,
    imgAlt: 'Expenses',
    projectName: 'Search-list',
    codeHref: 'https://github.com/Karlos97/METAPAK-task-public',
    liveHref: 'https://karlos97.github.io/expense-splitter/',
    about:
      'Projekt podzialu wydatkow np. dla grup wyjezdzajcych na wakacje, gdzie za poszczegolne wydatki placa rozne osoby.',
    show: false,
    id: '995',
  },
  {
    technologiesShort: 'React | Ajax | Scss',
    technologiesLong: 'React | Ajax | Scss',
    imgPath: qarsonCarrApp,
    imgAlt: 'Cars list',
    projectName: 'Carr-app',
    codeHref: 'https://github.com/Karlos97/METAPAK-task-public',
    liveHref: 'https://karlos97.github.io/qarson-car-app',
    about:
      'Projekt podzialu wydatkow np. dla grup wyjezdzajcych na wakacje, gdzie za poszczegolne wydatki placa rozne osoby.',
    show: false,
    id: '996',
  },
  {
    technologiesShort: 'React | Scss',
    technologiesLong: 'React | Scss',
    imgPath: warsawExpoApp,
    imgAlt: 'Notes',
    projectName: 'To-do-app',
    codeHref: 'https://github.com/Karlos97/warsaw-expo',
    liveHref: 'https://karlos97.github.io/warsaw-expo/',
    about:
      'To-do app, w ktorym mozna dodawac, usuwac i odznaczac wykonane notatki. Dodatkowo wprowadzono sortowanie i mozliwosc stworzenia 3 tysiecy notatek.',
    show: false,
    id: '997',
  },
  {
    technologiesShort: 'React | Scss',
    technologiesLong: 'React | Scss',
    imgPath: expensesApp,
    imgAlt: 'Cars list',
    projectName: 'Car-app',
    codeHref: 'https://github.com/Karlos97/expenses',
    liveHref: 'https://karlos97.github.io/expenses/',
    about:
      ' Jeden ze starszych projektow, ktory generuje wykres kolowy na podstawie wprowadzonych wydatkow. Mozliwosc zapisania oraz wczytania danych do i z pamieci podrecznej.',
    show: false,
    id: '998',
  },
  {
    technologiesShort: 'React | Scss',
    technologiesLong: 'React | Scss',
    imgPath: scrTaskApp,
    imgAlt: 'Gant diagram',
    projectName: 'Gant-diagram-app',
    codeHref: 'https://github.com/Karlos97/SCR_Projekt',
    liveHref: 'https://karlos97.github.io/SCR_Projekt/',
    about:
      ' Jeden ze starszych projektow, ktory generuje wykresy ganta w systemach czasu rzeczywistego.',
    show: false,
    id: '999',
  },
];
