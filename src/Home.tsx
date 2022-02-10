import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import {
  aboutPathName,
  appPathName,
  imagesPathName,
  projectsPathName,
  skillsPathName,
} from './config/config';
import './styles/Home.module.scss';
import Welcome from './components/Welcome/Welcome';

const Home: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={appPathName} exact>
            <Welcome />
          </Route>
          <Route path={aboutPathName}>
            <About />
          </Route>
          <Route path={skillsPathName}>
            <h1>Coming soon...</h1>
          </Route>
          <Route path={imagesPathName}>
            <h1>Coming soon...</h1>
          </Route>
          <Route path={projectsPathName}>
            <Projects />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Home;
