import React from 'react';
import classes from './Header.module.scss';

import linkedInIcon from '../../../images/linkedin.svg';
import aboutIcon from '../../../images/about.svg';
import projectsIcon from '../../../images/projects.svg';
import githubIcon from '../../../images/github.svg';
import logoIcon from '../../../images/logo.svg';
import HomeIcon from '../../../images/home.svg';
import {
  aboutPathName,
  appPathName,
  projectsPathName,
} from '../../../config/config';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <header className={classes['app-header']}>
    <div className={classes['logo']}>
      <img src={logoIcon} className={classes['logo-icon']} />
      <span className={classes['logo-text--1']}>Minta</span>
      <span className={classes['logo-text--2']}>Karol</span>
    </div>
    <nav>
      <ul className={classes.navigation}>
        <li>
          <NavLink
            activeClassName={classes['home-icon-active']}
            className={classes['home-icon']}
            to={appPathName}
            exact
          >
            <img src={HomeIcon} className={classes['home-icon']} />
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
);
export default Header;
