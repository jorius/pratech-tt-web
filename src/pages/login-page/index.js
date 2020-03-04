// @packages
import React from 'react';
import { withStyles } from '@material-ui/styles';

// @styles
import styles from './styles';
import { config } from '../../config';

const LoginPage = () => (
    <div>{config.text.loginPage.title}</div>
);

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default withStyles(styles)(LoginPage);
