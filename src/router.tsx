import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PATHS } from './routePaths';
import Home from './views/home/Home';
import CityWeather from './views/city-weather/CityWeather';

/**
 * Router Component.
 */
const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATHS.home} component={Home} />
        <Route exact path={PATHS.cityWeather} component={CityWeather} />
      </Switch>
    </BrowserRouter>
);

export default Router;
