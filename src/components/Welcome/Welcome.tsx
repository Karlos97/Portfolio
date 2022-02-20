import { Suspense, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import i18n from 'i18next';
import '../../translations/translations';
import { useTranslation } from 'react-i18next';
import { aboutPathName, projectsPathName } from '../../config/config';
import Button from '../UI/Button/Button';
import classes from './Welcome.module.scss';
import typographyClasses from '../../styles/typography.module.scss';
import { LanguageType } from '../../types';

const Welcome: React.FC<LanguageType> = ({ language = 'pl' }) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Suspense fallback={'Loading...'}>
      <div
        className={`${classes.welcome} ${typographyClasses['hand-font-style']}`}
      >
        <h1 className={typographyClasses['font-size-xl']}>{t('home.h1')}</h1>
        <h2 className={typographyClasses['font-size-l']}>{t('home.h2')}</h2>
        <h3 className={typographyClasses['font-size-m']}>{t('home.h3')}</h3>
        <h4 className={typographyClasses['font-size-s']}>{t('home.h4')}</h4>
        <nav className={classes['welcome-navigation']}>
          <Button>
            <NavLink
              className={classes['welcome-button']}
              to={projectsPathName}
            >
              {t('home.projectsButtonText')}
            </NavLink>
          </Button>
          <Button>
            <NavLink className={classes['welcome-button']} to={aboutPathName}>
              {t('home.infoButtonText')}
            </NavLink>
          </Button>
        </nav>
      </div>
    </Suspense>
  );
};

export default Welcome;
