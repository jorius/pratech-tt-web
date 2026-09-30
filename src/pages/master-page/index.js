// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

// @scripts
import CtrlRoutes from './routes';
import { theme } from '../../styles/material-ui';

// @styles
import styles from './styles';

const MasterPage = ({
    currentUrl,
    classes,
    title,
    userProps
}) => (
    <MuiThemeProvider theme={theme}>
        <div className={classes.masterPageContainer}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <CtrlRoutes
                currentUrl={currentUrl}
                userProps={userProps}
            />
        </div>
    </MuiThemeProvider>
);


MasterPage.propTypes = {
    classes: PropTypes.object.isRequired,
    currentUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    userProps: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default withStyles(styles)(MasterPage);
