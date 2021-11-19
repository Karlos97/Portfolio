import metapakTaskImage from '../../images/projects/github-users.png';
import Project from './Project/Project';
import classes from './Projects.module.scss';
const Projects: React.FC = () => {
  const onShowProjectDetailsHandler = () => {
    console.log('1');
  };
  return (
    <section className={classes['projects']}>
      <div className="projects-bg" />

      <Project
        technologies="React | Redux | Typescript"
        imgPath={metapakTaskImage}
        imgAlt="github list"
        projectName="Github Users App"
        showProjectDetails={onShowProjectDetailsHandler}
      />
      <Project
        technologies="React | Redux | Typescript"
        imgPath={metapakTaskImage}
        imgAlt="github list"
        projectName="Github Users App"
        showProjectDetails={onShowProjectDetailsHandler}
      />
      {/* <a
        href="https://karlos97.github.io/METAPAK-task-public/"
        className="projects-slider-slide"
        target="_blank"
      >
        <div className="projects-slider-slide-about"></div>
      </a> */}
      {/*<input
        className="projects-slider-input"
        type="radio"
        id="trigger2"
        name="slider"
      />
                Github-Users-App
          {/* <br> */}
      {/* React + Typescript + Sassy + Routing + Redux + Ajax + prettier / */}
      {/* eslint. </br> */}
      {/* <br> */}
      {/* Aplikacja jest responsywna, pod zadany layout. */}
      {/* </br> * / }
      <label className="projects-slider-label" htmlFor="trigger2"></label>
      <a
        href="https://karlos97.github.io/METAPAK-task-public/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/book-app.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            Book-App
            <br>React + Sassy + Routing + Redux + Ajax + prettier / eslint</br>
          </p>
        </div>
      </a>

      <input
        className="projects-slider-input"
        type="radio"
        id="trigger3"
        name="slider"
      />
      <label className="projects-slider-label" htmlFor="trigger3"></label>
      <a
        href="https://karlos97.github.io/leocode-app/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/search-list.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            Search list<br>React + Sassy + Redux + Ajax + Typescript</br>
          </p>
        </div>
      </a>

      <input
        className="projects-slider-input"
        type="radio"
        id="trigger4"
        name="slider"
      />
      <label className="projects-slider-label" htmlFor="trigger4"></label>
      <a
        href="https://karlos97.github.io/expense-splitter/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/moneySplitter_1.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            Projekt podzialu wydatkow np. dla grup wyjezdzajcych na wakacje,
            gdzie za poszczegolne wydatki placa rozne osoby.{' '}
            <br>React + Sassy</br>
          </p>
        </div>
      </a>

      <input
        className="projects-slider-input"
        type="radio"
        id="trigger5"
        name="slider"
      />
      <label className="projects-slider-label" htmlFor="trigger5"></label>
      <a
        href="https://karlos97.github.io/qarson-car-app/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/qrson-car-app.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            Car-App.<br> React + Ajax + Sassy</br>
          </p>
        </div>
      </a>

      <input
        className="projects-slider-input"
        type="radio"
        id="trigger6"
        name="slider"
      />
      <label className="projects-slider-label" htmlFor="trigger6"></label>
      <a
        href="https://karlos97.github.io/warsaw-expo/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/warsaw-expo-app.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            To-do app, w ktorym mozna dodawac, usuwac i odznaczac wykonane
            notatki. Dodatkowo wprowadzono sortowanie i mozliwosc stworzenia 3
            tysiecy notatek.
            <br>React + Sassy</br>
          </p>
        </div>
      </a>

      <input
        className="projects-slider-input"
        type="radio"
        id="trigger7"
        name="slider"
      />
      <label className="projects-slider-label" htmlFor="trigger7"></label>
      <a
        href="https://karlos97.github.io/expenses/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/expenses.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            Jeden ze starszych projektow, ktory generuje wykres kolowy na
            podstawie wprowadzonych wydatkow. Mozliwosc zapisania oraz wczytania
            danych do i z pamieci podrecznej.
          </p>
        </div>
      </a>

      <input
        className="projects-slider-input"
        type="radio"
        id="trigger8"
        name="slider"
      />
      <label className="projects-slider-label" htmlFor="trigger8"></label>
      <a
        href="https://karlos97.github.io/SCR_Projekt/"
        className="projects-slider-slide"
        target="_blank"
      >
        <img src="../img/projects/scrTask.png"></img>
        <div className="projects-slider-slide-about">
          <p>
            Jeden ze starszych projektow, ktory generuje wykresy ganta w
            systemach czasu rzeczywistego.
          </p>
        </div>
      </a>

      <path
        fill="#fff"
        d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
      /> */}
      {/* </svg> */}
      {/* // </a> */}
    </section>
  );
};
export default Projects;
