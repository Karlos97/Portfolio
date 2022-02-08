import classes from './Separator.module.scss';

const Separator: React.FC<{ width?: string }> = ({ width = '' }) => (
  <div className={classes['separator-vertical']} style={{ width }} />
);

export default Separator;
