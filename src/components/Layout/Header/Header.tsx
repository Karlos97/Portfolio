import React from 'react';
import classes from './Header.module.scss';
import logoIcon from '../../../images/logo.svg';
import polandFlag from '../../../images/flags/Poland.svg';
import ukFlag from '../../../images/flags/UK.svg';
import {
  aboutPathName,
  appPathName,
  projectsPathName,
} from '../../../config/config';
import { NavLink } from 'react-router-dom';
import Separator from '../../Separator/Separator';
import { LanguageType } from '../../../types';
import Icon from './Icons/Icon';

const Header: React.FC<LanguageType> = ({
  language = 'pl',
  handleLanguageChange = () => null,
}) => (
  <div className={classes['header-wrapper']}>
    <header className={classes['header']}>
      <NavLink to={appPathName} className={classes['logo-link']} exact>
        <div className={classes['logo']}>
          <img src={logoIcon} className={classes['logo-icon']} />
        </div>
      </NavLink>
      <nav>
        <ul className={classes.navigation}>
          {language == 'eng' ? (
            <img
              src={polandFlag}
              onClick={() => handleLanguageChange('pl')}
              className={classes['navigation-flag']}
            />
          ) : null}
          {language == 'pl' ? (
            <img
              src={ukFlag}
              onClick={() => handleLanguageChange('eng')}
              className={classes['navigation-flag']}
            />
          ) : null}
          <li>
            <NavLink
              activeClassName={classes['home-icon-active']}
              className={classes['home-icon']}
              to={appPathName}
              exact
            >
              <Icon icon="home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes['folder-icon-active']}
              className={classes['folder-icon']}
              to={projectsPathName}
            >
              <Icon icon="folder-open" />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes['about-icon-active']}
              className={classes['about-icon']}
              to={aboutPathName}
            >
              <Icon icon="file-text2" />
            </NavLink>
          </li>
          <li>
            <a
              className={classes['linkedin-icon']}
              href="https://www.linkedin.com/in/karol-minta/"
              target="_blank"
            >
              <Icon icon="linkedin" />
            </a>
          </li>
          <li>
            <a
              className={classes['github-icon']}
              href="https://github.com/Karlos97"
              target="_blank"
            >
              <Icon icon="github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <Separator />
  </div>
);
export default Header;
