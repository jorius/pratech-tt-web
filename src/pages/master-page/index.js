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
    classes,
    title
}) => (
    <MuiThemeProvider theme={theme}>
        <div className={classes.masterPageContainer}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <CtrlRoutes />
        </div>
    </MuiThemeProvider>
);


MasterPage.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(MasterPage);
