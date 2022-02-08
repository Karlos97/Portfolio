import classes from './Button.module.scss';

const Button: React.FC<{ buttonOnClick?: () => void }> = ({
  buttonOnClick,
  children,
}) => {
  return (
    <button onClick={buttonOnClick} className={classes['button']}>
      {children}
    </button>
  );
};
export default Button;
