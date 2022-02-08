import React from 'react';
import classes from './About.module.scss';
import typographyClasses from '../../styles/typography.module.scss';
import Separator from '../Separator/Separator';

const About: React.FC = () => (
  <div className={`${classes.about} ${typographyClasses['hand-font-style']}`}>
    <h1
      className={`${classes['about-header']} ${typographyClasses['font-size-xl']}`}
    ></h1>
    <div
      className={`${classes['about-quote']} ${typographyClasses['font-size-xs']}`}
    >
      <q>
        Wykształć w sobie pasję do nauki. Jesli Ci się uda juz nigdy nie
        przestaniesz się rozwijać.
      </q>
      <span className={classes['about-quote-author']}>Anthony J. D`Angelo</span>
    </div>
    <Separator width="85%" />
    <h1 className={typographyClasses['font-size-s']}>
      Moje doswiadczenie jest obszerne, mozna je podzielic na dwie branze:
    </h1>

    <ul className={typographyClasses['font-size-xs']}>
      <li>Doswiadczenie w branzy automatyki</li>
      <li>Doswiadczenie w branzy IT(front-end)</li>
    </ul>
    <h2 className={typographyClasses['font-size-m']}>Uczelnia</h2>
    <p className={typographyClasses['font-size-xs']}>
      Jestem typem osoby, ktora lubi wykorzystywac swoj czas w pelni. Dlatego
      rownolegle edukowalem sie na uczelni(niestacjonarnie) oraz rozwijalem
      zawodowo. Dzieki temu ukonczylem studia na Politechnice Poznanskiej z
      kierunku automatyki i robotyki uzyskujac stypendium. Na uczelni
      podejmowalem sie ciekawych projektow, najciekawsze z nich byly zwiazane z
      jezykiem Python oraz sztucznymi sieciami neuronowymi.
    </p>
    <h2 className={typographyClasses['font-size-m']}>Zycie zawodowe</h2>
    <p className={typographyClasses['font-size-xs']}>
      Doswiadczenie w branzy automatyki zdobywalem aktywnie przez 5 lat. W moim
      zyciu zawodowym pracowalem jako specjalista utrzymania ruchu, gdzie moimi
      glownymi zadaniami bylo prowadzenie instalacji maszyn po stronie
      inwestora, naprawy i renowacje maszyn oraz tlumaczenie szkolen
      operatorskich. Dalej jako specjalista ds. automatyki tworzylem algorytmy
      sterujace procesami. Jednymi z moich projektow byly: przepompownia wody w
      Warszawie, systemy BMS na dworcach PKP oraz miedzynarodowy projekt stacji
      ZZU.
    </p>
    <p className={typographyClasses['font-size-xs']}>
      Obecnie kolejne wyzwania podejmuje w branzy IT. Sporo czasu spedzilem na
      projektach nie komercyjnych, stad szybko progresuje. Posiadam
      doswiadczenie z technologiami takimi jak: react, typescript, sassy czy
      python. Znam rowniez wiele innych przydatnych frameworkow jak redux,
      react-router itd. Obecnie rozwijam sie w pisaniu testow(React Testing
      Library) oraz zglebianiu GraphQL.
    </p>
    <h2 className={typographyClasses['font-size-m']}>Prywatnie</h2>
    <p className={typographyClasses['font-size-xs']}>
      Moje zycie prywatne nie odbiega duzo od zawodowego. Czerpie zycie pelnymi
      garsciami. Lubie podrozowac i chodzic po gorach np. w ubieglych latach
      wszedlem na Rysy oraz przeszedlem pewien odcinek Orlej Perci. Nauczylem
      sie podstaw gry na pianinie oraz tanca latino. Aktywnie ucze sie jezykow.
      Na ten moment Ukrainski i Rosyjki, pozniej planuje wznowic nauke
      Niemieckiego.
    </p>
    <h3 className={typographyClasses['font-size-xs']}>
      Chetnie podejme sie kolejnych wyzwan
      <Separator />
    </h3>
  </div>
);
export default About;
