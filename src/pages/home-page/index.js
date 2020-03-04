// @packages
import React from 'react';
import { withStyles } from '@material-ui/styles';

// @styles
import styles from './styles';
import { config } from '../../config';

const HomePage = () => (
    <div>{config.text.homePage.title}</div>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default withStyles(styles)(HomePage);
