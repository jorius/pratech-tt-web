// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @scripts
import { config } from '../../config';
import { mapComponent } from './component-mapper';

const CtrlRoutes = () => (
    <Switch>
        {
            config.routes.map((route, index) => (
                <Route
                    component={mapComponent(route.component)}
                    exact
                    key={index}
                    path={route.url}
                />
            ))
        }
    </Switch>
);

CtrlRoutes.propTypes = {};

export default CtrlRoutes;
