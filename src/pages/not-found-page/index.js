// @packages
import React from 'react';
import { withStyles } from '@material-ui/styles';

// @styles
import styles from './styles';
import { config } from '../../config';

const LoginPage = () => (
    <div>{config.text.notFoundPage.title}</div>
);

export default withStyles(styles)(LoginPage);
