import classes from './Button.module.scss';

const Button: React.FC<{ showProjectDetails: () => void }> = ({
  showProjectDetails,
  children,
}) => {
  return (
    <button onClick={showProjectDetails} className={classes['project-button']}>
      {children}
    </button>
  );
};
export default Button;
