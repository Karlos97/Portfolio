import { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import '../../../translations/translations';
import { useTranslation } from 'react-i18next';
import { LanguageType } from '../../../types';
import classes from './Footer.module.scss';

const Footer: React.FC<LanguageType> = ({ language }) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Suspense fallback={'Loading...'}>
      <footer className={classes.footer}>
        <div className={classes['footer__copyright']}>{t('footer')}</div>
      </footer>
    </Suspense>
  );
};
export default Footer;
