// Icon.tsx
import IcoMoon, { IconComponent } from 'react-icomoon';
import iconSet from '../../../../styles/fonts/selection.json';
import classes from './Icon.module.scss';

const Icon: typeof IconComponent = (props) => (
  <IcoMoon className={classes.icon} iconSet={iconSet} size={32} {...props} />
);

export default Icon;
