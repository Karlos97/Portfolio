import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import {
  aboutPathName,
  appPathName,
  projectsPathName,
  skillsPathName,
} from './config/config';
import './styles/Home.module.scss';
import Welcome from './components/Welcome/Welcome';
import { useState } from 'react';

const Home: React.FC = () => {
  const [language, setLanguage] = useState('pl');

  const onHandleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  return (
    <BrowserRouter>
      <Layout language={language} handleLanguageChange={onHandleLanguageChange}>
        <Switch>
          <Route path={appPathName} exact>
            <Welcome language={language} />
          </Route>
          <Route path={aboutPathName}>
            <About language={language} />
          </Route>
          <Route path={skillsPathName}>
            <h1>Coming soon...</h1>
          </Route>
          <Route path={projectsPathName}>
            <Projects language={language} />
          </Route>
          <Route path="*">
            <NotFound language={language} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Home;
