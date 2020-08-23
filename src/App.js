import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogList from './BlogList';
import About from './About';
import NotFound from './NotFound';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <BlogList />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
