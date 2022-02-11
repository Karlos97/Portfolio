import { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import '../../../translations/translations';
import { useTranslation } from 'react-i18next';
import { LanguageType, ProjectType } from '../../../types';
import Button from '../../UI/Button/Button';
import classes from './Project.module.scss';

const Project: React.FC<ProjectType & LanguageType> = ({
  technologiesShort,
  imgPath,
  imgAlt,
  projectName,
  toggleShowProjectDetails,
  language,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Suspense fallback={'Loading...'}>
      <div className={classes['project']}>
        <img className={classes['project-image']} src={imgPath} alt={imgAlt} />
        <div className={classes['project-description']}>
          <h2 className={classes['project-name']}>{projectName}</h2>
          <h3 className={classes['project-technologies']}>
            {t('projects.technologies')}:
          </h3>
          <p className={classes['project-paragraph']}>{technologiesShort}</p>
          <div className={classes['project-button-wrapper']}>
            <Button buttonOnClick={toggleShowProjectDetails}>
              <span className={classes['project-button-text']}>Details</span>
            </Button>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Project;
