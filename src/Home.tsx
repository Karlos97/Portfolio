import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import {
  aboutPathName,
  appPathName,
  projectsPathName,
  skillsPathName,
} from './config/config';
import './styles/Home.module.scss';

const Home: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={appPathName} exact>
            <h1>Coming soon...</h1>
          </Route>
          <Route path={aboutPathName}>
            <h1>Coming soon...</h1>
          </Route>
          <Route path={skillsPathName}>
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
