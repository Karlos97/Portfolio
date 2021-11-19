import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header/Header';
import classes from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};
export default Layout;
