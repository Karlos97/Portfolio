import './Start.module.scss';
import logo from '../../../images/logo.svg';
import classes from './Start.module.scss';

const Start: React.FC = () => {
  return (
    <>
      <div className={classes.start}>
        <div className={classes['start__logo']}>
          <div className={classes['start__logo_container']}>
            <img src={logo} alt="Portfolios logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
