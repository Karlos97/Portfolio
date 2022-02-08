import { NavLink } from 'react-router-dom';
import { aboutPathName, projectsPathName } from '../../config/config';
import Button from '../UI/Button/Button';
import classes from './Welcome.module.scss';
import typographyClasses from '../../styles/typography.module.scss';

const Welcome: React.FC = () => {
  return (
    <div
      className={`${classes.welcome} ${typographyClasses['hand-font-style']}`}
    >
      <h1 className={typographyClasses['font-size-xl']}>
        Czesc, nazywam sie Minta Karol
      </h1>
      <h2 className={typographyClasses['font-size-l']}>
        wiecej informacji o mnie oraz projekty
      </h2>
      <h3 className={typographyClasses['font-size-m']}>
        znajdziesz klikajac ponizsze przyciski
      </h3>
      <h4 className={typographyClasses['font-size-s']}>
        lub korzystajac z gornego menu
      </h4>
      <div>
        <Button>
          <NavLink className={classes['welcome-button']} to={projectsPathName}>
            PROJEKTY
          </NavLink>
        </Button>
        <Button>
          <NavLink className={classes['welcome-button']} to={aboutPathName}>
            INFO
          </NavLink>
        </Button>
      </div>
    </div>
  );
};
export default Welcome;
