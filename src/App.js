import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {Main} from './style';
import Loader from './Loader'

const BlogList = React.lazy(() => import('./BlogList'));
const BlogItem = React.lazy(() => import('./BlogItem'));
const About = React.lazy(() => import('./About'));
const NotFound = React.lazy(() => import('./NotFound'));
const Header = React.lazy(() => import('./Header'));
const Secure = React.lazy(() => import('./Secure'));
const Weather = React.lazy(() => import('./Weather'));

function App() {
  return (
    <Main>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
          <Weather />
          <Switch>
            <Route path="/" exact>
              <BlogList />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/blog/:uniqueParamFromPath" component={BlogItem} />
            <PrivateRoute path="/admin" component={Secure} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Main>

  )
}

export default App;
