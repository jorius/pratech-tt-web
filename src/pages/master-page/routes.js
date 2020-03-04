// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @scripts
import { config } from '../../config';
import { mapComponent } from './component-mapper';
import { navigateToUrl } from '../../util';

const CtrlRoutes = ({
    currentUrl,
    userProps
}) => {
    const isCurrentUrlValid = config.routes.find(route => route.url === currentUrl);

    if (!isCurrentUrlValid) {
        navigateToUrl('404');
    }

    const routes = userProps.isLoggedIn
        ? config.routes.filter(route => userProps.permissions.includes(route.permission) || route.permission === 'none')
        : config.routes.filter(route => route.permission === 'none');

    if (currentUrl !== '/login' && !userProps.isLoggedIn) {
        navigateToUrl('login');
    } else if (currentUrl === '/login' && userProps.isLoggedIn) {
        navigateToUrl('/');
    }

    return (
        <Switch>
            {
                routes.map((route, index) => (
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
};

CtrlRoutes.propTypes = {
    currentUrl: PropTypes.string.isRequired,
    userProps: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default CtrlRoutes;
