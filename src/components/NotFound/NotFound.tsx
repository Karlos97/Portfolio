import { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import '../../translations/translations';
import { useTranslation } from 'react-i18next';
import { LanguageType } from '../../types';
import classes from './NotFound.module.scss';

const NotFound: React.FC<LanguageType> = ({ language }) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Suspense fallback={'Loading...'}>
      <div className={classes['not-found']}>
        <p>{t('notFound')}</p>
      </div>
    </Suspense>
  );
};

export default NotFound;
