import { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import '../../translations/translations';
import { useTranslation } from 'react-i18next';
import classes from './About.module.scss';
import typographyClasses from '../../styles/typography.module.scss';
import Separator from '../Separator/Separator';
import { LanguageType } from '../../types';

const About: React.FC<LanguageType> = ({ language }) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Suspense fallback={'Loading...'}>
      <div
        className={`${classes.about} ${typographyClasses['hand-font-style']}`}
      >
        <div
          className={`${classes['about-quote']} ${typographyClasses['font-size-xxs']}`}
        >
          <q>{t('about.quote')}</q>
          <span className={classes['about-quote-author']}>
            Anthony J. D`Angelo
          </span>
        </div>
        <Separator width="85%" />
        <h1
          className={`${typographyClasses['font-size-xs']} ${typographyClasses['text-align-center']}`}
        >
          {t('about.aboutHeader')}
        </h1>

        <ul className={typographyClasses['font-size-xxs']}>
          <li>{t('about.listItem1')}</li>
          <li>{t('about.listItem2')}</li>
        </ul>
        <h2 className={typographyClasses['font-size-m']}>
          {t('about.schoolHeader')}
        </h2>
        <p className={typographyClasses['font-size-xxs']}>
          {t('about.schoolDescription')}
        </p>
        <h2 className={typographyClasses['font-size-m']}>
          {t('about.professionHeader')}
        </h2>
        <p className={typographyClasses['font-size-xxs']}>
          {t('about.professionDescriptionAutomation')}
        </p>
        <p className={typographyClasses['font-size-xxs']}>
          {t('about.professionDescriptionIt')}
        </p>
        <h2 className={typographyClasses['font-size-m']}>
          {t('about.privatelyHeader')}
        </h2>
        <p className={typographyClasses['font-size-xxs']}>
          {t('about.privatelyDescriptionPart1')}
          <a href="https://en.wikipedia.org/wiki/Rysy" className={classes.link}>
            {t('about.privatelyDescriptionRysy')}
          </a>
          {t('about.privatelyDescriptionPart2')}
          <a
            href="https://en.wikipedia.org/wiki/Orla_Per%C4%87"
            className={classes.link}
          >
            {t('about.privatelyDescriptionOrla')}
          </a>
          {t('about.privatelyDescriptionPart3')}
        </p>
        <footer>
          <h3 className={typographyClasses['font-size-xxs']}>
            {t('about.footerText')}
            <Separator />
          </h3>
        </footer>
      </div>
    </Suspense>
  );
};
export default About;
