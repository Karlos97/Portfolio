import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import classes from './Layout.module.scss';
import Start from './Start/Start';
import { logosTimeDismissLoadingPage } from '../../config/config';

const Layout: React.FC = ({ children }) => {
  const [showLogoAtThePageLoad, setShowLogoAtThePageLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogoAtThePageLoad(false);
    }, logosTimeDismissLoadingPage);
  });
  return (
    <>
      {!showLogoAtThePageLoad && (
        <div className={classes.app}>
          <Header />
          <main className={classes.main}>{children}</main>
        </div>
      )}
      {showLogoAtThePageLoad && <Start />}
    </>
  );
};
export default Layout;
