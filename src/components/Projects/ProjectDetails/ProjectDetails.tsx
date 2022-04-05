import { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import '../../../translations/translations';
import { useTranslation } from 'react-i18next';
import { LanguageType, ProjectDetailsType } from '../../../types';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import classes from './ProjectDetails.module.scss';

interface DetailsType extends ProjectDetailsType {
  toggleShowProjectDetails: () => void;
}

const ProjectDetails: React.FC<DetailsType & LanguageType> = ({
  technologiesLong,
  imgPath,
  imgAlt,
  projectName,
  toggleShowProjectDetails,
  about,
  codeHref,
  liveHref,
  language,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Modal onClose={toggleShowProjectDetails}>
      <Suspense fallback={'Loading...'}>
        <div className={classes['project-details']}>
          <div className={classes['project-details-description']}>
            <div className={classes['project-details-description-info']}>
              <h2 className={classes['project-details-name']}>{projectName}</h2>
              <h3 className={classes['project-details-technologies']}>
                {t('projects.technologies')}
              </h3>
              <p className={classes['project-details-paragraph']}>
                {technologiesLong}
              </p>
              <div>
                {liveHref && (
                  <Button>
                    <a
                      href={liveHref}
                      target="_blank"
                      className={classes.button}
                    >
                      LIVE
                    </a>
                  </Button>
                )}
                {codeHref && (
                  <Button>
                    <a
                      href={codeHref}
                      target="_blank"
                      className={classes.button}
                    >
                      CODE
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className={classes['project-details-description-about']}>
              <h2
                className={classes['project-details-description-about-header']}
              >
                ABOUT
              </h2>
              <p
                className={
                  classes['project-details-description-about-paragraph']
                }
              >
                {about}
              </p>
            </div>
          </div>
          <div className={classes['project-details-container']}>
            <img
              className={classes['project-details-container-img']}
              src={imgPath}
              alt={imgAlt}
              onClick={() =>
                window.open(liveHref ? liveHref : codeHref, '_blank')
              }
            />
          </div>
        </div>
      </Suspense>
    </Modal>
  );
};

export default ProjectDetails;
