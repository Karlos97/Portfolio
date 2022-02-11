import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import classes from './Layout.module.scss';
import Start from './Start/Start';
import { logosTimeDismissLoadingPage } from '../../config/config';
import { LanguageType } from '../../types';

const Layout: React.FC<LanguageType> = ({
  children,
  language,
  handleLanguageChange,
}) => {
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
          <Header
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
          <main className={classes.main}>{children}</main>
        </div>
      )}
      {showLogoAtThePageLoad && <Start />}
    </>
  );
};
export default Layout;
