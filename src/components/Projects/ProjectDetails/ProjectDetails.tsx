import Button from '../../UI/Button/Button';
import classes from './Project.module.scss';
const Project: React.FC<{
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologies: string;
  showProjectDetails: () => void;
}> = ({ technologies, imgPath, imgAlt, projectName, showProjectDetails }) => {
  return (
    <div className={classes['project']}>
      <img className={classes['project-image']} src={imgPath} alt={imgAlt} />
      <div className={classes['project-description']}>
        <h2 className={classes['project-name']}>{projectName}</h2>
        <h3 className={classes['project-technologies']}>Technologies</h3>
        <p className={classes['project-paragraph']}>{technologies}</p>
        <Button showProjectDetails={showProjectDetails}>Details</Button>
      </div>
    </div>
  );
};
export default Project;
