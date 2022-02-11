import React from 'react';
import classes from './Header.module.scss';

import linkedInIcon from '../../../images/linkedin.svg';
import aboutIcon from '../../../images/about.svg';
import projectsIcon from '../../../images/projects.svg';
import githubIcon from '../../../images/github.svg';
import logoIcon from '../../../images/logo.svg';
import homeIcon from '../../../images/home.svg';
import imagesIcon from '../../../images/images.svg';
import polandFlag from '../../../images/flags/Poland.svg';
import ukFlag from '../../../images/flags/UK.svg';
import {
  aboutPathName,
  appPathName,
  imagesPathName,
  projectsPathName,
} from '../../../config/config';
import { NavLink } from 'react-router-dom';
import Separator from '../../Separator/Separator';
import { LanguageType } from '../../../types';

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
              <img src={homeIcon} className={classes['home-icon']} />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes['projects-icon-active']}
              className={classes['projects-icon']}
              to={projectsPathName}
            >
              <img src={projectsIcon} className={classes['projects-icon']} />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes['about-icon-active']}
              className={classes['about-icon']}
              to={aboutPathName}
            >
              <img src={aboutIcon} className={classes['about-icon']} />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes['images-icon-active']}
              className={classes['images-icon']}
              to={imagesPathName}
            >
              <img src={imagesIcon} className={classes['projects-icon']} />
            </NavLink>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/karol-minta/" target="_blank">
              <img src={linkedInIcon} className={classes['linked-in-icon']} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Karlos97" target="_blank">
              <img src={githubIcon} className={classes['github-icon']} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <Separator />
  </div>
);
export default Header;
