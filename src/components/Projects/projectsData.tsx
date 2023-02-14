import { ProjectDetailsType } from "../../types";
import metapakTaskImage from "../../images/projects/github-users.png";
import bookAppImage from "../../images/projects/book-app.png";
import leocodeAppImage from "../../images/projects/search-list.png";
import expensesSplitterApp from "../../images/projects/moneySplitter_1.png";
import qarsonCarrApp from "../../images/projects/qrson-car-app.png";
import warsawExpoApp from "../../images/projects/warsaw-expo-app.png";
import expensesApp from "../../images/projects/expenses.png";
import scrTaskApp from "../../images/projects/scrTask.png";
import graphQL from "../../images/projects/graphQL.png";
import railsToDo from "../../images/projects/Rails-todo-app.png";
import riddlesApp from "../../images/projects/riddles-app.jpg";
import softblueApp from "../../images/projects/soft-blue.jpg";
import socksMarketApp from "../../images/projects/socks-market.jpg";

export const projectsData: ProjectDetailsType[] = [
  {
    technologiesShort: "React | NodeJs | MongoDB",
    technologiesLong:
      "React | NodeJs | MongoDB | Typescript | Scss | Tailwind | ExpressJs | GraphQL | Docker | Private Server | Auto SSL",
    imgPath: socksMarketApp,
    imgAlt: "Socks Market",
    projectName: "SocksMarket",
    codeHref: "",
    liveHref: "https://socks-market.pl/",
    show: false,
    id: "987",
  },
  {
    technologiesShort: "React | NodeJs | MongoDB",
    technologiesLong:
      "React | NodeJs | MongoDB | Typescript | Scss | ExpressJs | GraphQL |Docker | Private Server | Auto SSL",
    imgPath: softblueApp,
    imgAlt: "Soft Blue App",
    projectName: "SoftBlue-App",
    codeHref: "https://github.com/Karlos97/socks-blue-app",
    liveHref: "https://softblue.karlos97.pl/",
    show: false,
    id: "988",
  },
  {
    technologiesShort: "Html | NodeJs | MongoDB",
    technologiesLong: "Html | NodeJs | MongoDB | Bootstrap | Scss",
    imgPath: riddlesApp,
    imgAlt: "Riddles App",
    projectName: "Riddles-App",
    codeHref: "https://github.com/Karlos97/riddles-app",
    liveHref: "https://nodejs-riddles-app.herokuapp.com",
    show: false,
    id: "989",
  },
  {
    technologiesShort: "Html | Rails | SQL",
    technologiesLong: "Html | Rails | SQL | Scss | Haml",
    imgPath: railsToDo,
    imgAlt: "To Do",
    projectName: "To-Do-App",
    codeHref: "https://github.com/Karlos97/rails-todo-app",
    liveHref: "",
    show: false,
    id: "990",
  },
  {
    technologiesShort: "React | React Testing Library | Typescript",
    technologiesLong:
      "React | React Testing Library | Typescript | Redux | Scss | Ajax | Routing | RWD | Eslint + Prettier",
    imgPath: metapakTaskImage,
    imgAlt: "Users list",
    projectName: "Github-Users-App",
    codeHref: "https://github.com/Karlos97/METAPAK-task/tree/tsx",
    liveHref: "https://karlos97.github.io/METAPAK-task/",
    show: false,
    id: "991",
  },
  {
    technologiesShort: "React | Redux | Ajax",
    technologiesLong: "React | Redux | Scss | Ajax | Routing | Prettier",
    imgPath: bookAppImage,
    imgAlt: "Book list",
    projectName: "Book-App",
    codeHref: "https://github.com/Karlos97/FarmaProm-book-app",
    liveHref: "https://karlos97.github.io/FarmaProm-book-app/",
    show: false,
    id: "992",
  },
  {
    technologiesShort: "React | GraphQL | Scss",
    technologiesLong: "React | GraphQL | Scss | Routing",
    imgPath: graphQL,
    imgAlt: "forum",
    projectName: "Graphql-App",
    codeHref: "https://github.com/Karlos97/graphql-first-steps",
    liveHref: "",
    show: false,
    id: "993",
  },
  {
    technologiesShort: "React | Typescript | Redux",
    technologiesLong: "React | Redux | Scss | Ajax | Typescript",
    imgPath: leocodeAppImage,
    imgAlt: "List",
    projectName: "Search-list",
    codeHref: "https://github.com/Karlos97/leocode-app",
    liveHref: "https://karlos97.github.io/leocode-app/",
    show: false,
    id: "994",
  },
  {
    technologiesShort: "React | Context | Scss",
    technologiesLong: "React | Context | Scss",
    imgPath: expensesSplitterApp,
    imgAlt: "Expenses",
    projectName: "Expenses-splitter",
    codeHref: "https://github.com/Karlos97/expense-splitter",
    liveHref: "https://karlos97.github.io/expense-splitter/",
    show: false,
    id: "995",
  },
  {
    technologiesShort: "React | Ajax | Scss",
    technologiesLong: "React | Ajax | Scss",
    imgPath: qarsonCarrApp,
    imgAlt: "Cars list",
    projectName: "Car-app",
    codeHref: "https://github.com/Karlos97/qarson-car-app",
    liveHref: "https://karlos97.github.io/qarson-car-app",
    show: false,
    id: "996",
  },
  {
    technologiesShort: "React | Scss",
    technologiesLong: "React | Scss",
    imgPath: warsawExpoApp,
    imgAlt: "Notes",
    projectName: "To-do-app",
    codeHref: "https://github.com/Karlos97/warsaw-expo",
    liveHref: "https://karlos97.github.io/warsaw-expo/",
    show: false,
    id: "997",
  },
  {
    technologiesShort: "React | Scss",
    technologiesLong: "React | Scss",
    imgPath: expensesApp,
    imgAlt: "Expenses list",
    projectName: "Expenses-app",
    codeHref: "https://github.com/Karlos97/expenses",
    liveHref: "https://karlos97.github.io/expenses/",
    show: false,
    id: "998",
  },
  {
    technologiesShort: "React | Scss",
    technologiesLong: "React | Scss",
    imgPath: scrTaskApp,
    imgAlt: "Gant diagram",
    projectName: "Gant-diagram-app",
    codeHref: "https://github.com/Karlos97/SCR_Projekt",
    liveHref: "https://karlos97.github.io/SCR_Projekt/",
    show: false,
    id: "999",
  },
];
