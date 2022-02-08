import { ProjectDetailsType } from '../../../types';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import classes from './ProjectDetails.module.scss';

const ProjectDetails: React.FC<ProjectDetailsType> = ({
  technologies,
  imgPath,
  imgAlt,
  projectName,
  toggleShowProjectDetails,
  about,
  codeHref,
  liveHref,
}) => {
  return (
    <Modal onClose={toggleShowProjectDetails}>
      <div className={classes['project-details']}>
        <div className={classes['project-details-description']}>
          <div className={classes['project-details-description-info']}>
            <h2 className={classes['project-details-name']}>{projectName}</h2>
            <h3 className={classes['project-details-technologies']}>
              Technologies
            </h3>
            <p className={classes['project-details-paragraph']}>
              {technologies}
            </p>
            <div>
              <Button>
                <a href={liveHref} target="_blank" className={classes.button}>
                  LIVE
                </a>
              </Button>
              <Button>
                <a href={codeHref} target="_blank" className={classes.button}>
                  CODE
                </a>
              </Button>
            </div>
          </div>
          <div className={classes['project-details-description-about']}>
            <h2 className={classes['project-details-description-about-header']}>
              ABOUT
            </h2>
            <p
              className={classes['project-details-description-about-paragraph']}
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
          />
        </div>
      </div>
    </Modal>
  );
};
export default ProjectDetails;

// <Modal onClose={props.onClose}>
// <div className={classes['summary-overview']}>
//   <h2>Expenses summary</h2>
//   <Summary />
// </div>
// </Modal>
