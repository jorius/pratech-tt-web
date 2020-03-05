/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// @packages
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

// @scripts
import { config } from '../../config';
import { navigateToUrl, openNewTab } from '../../util';

// @styles
import styles from './styles';

// @images
import en from '../../styles/images/en.png';
import es from '../../styles/images/es.png';
import logo from '../../styles/images/logo.png';

const HomePage = ({
    classes,
    onUserChangeLangCode,
    userLanguageCode
}) => (
    <div className={classes.homePageContainer}>
        <img alt="logo" src={logo} />
        <Grid container>
            <Grid
                className={classes.homePageItem}
                item
                lg={4}
                sm={12}
                xs={12}
            >
                <Paper className={classes.homePagePaper} elevation={3}>
                    <Typography variant="h6">
                        {config.text.homePage.selectLang}
                    </Typography>
                    <div className={classes.langImages}>
                        <img
                            alt="en"
                            className={classes.marginRight}
                            onClick={() => onUserChangeLangCode('en')}
                            src={en}
                            style={{ cursor: 'pointer', width: 32 }}
                        />
                        <img
                            alt="es"
                            onClick={() => onUserChangeLangCode('es')}
                            src={es}
                            style={{ cursor: 'pointer', width: 32 }}
                        />
                    </div>
                    <Typography>
                        <Link
                            color="primary"
                            onClick={() => {
                                openNewTab(`https://github.com/jorius/pratech-tt-web/blob/playground/README-${userLanguageCode}.md`);
                            }}
                        >
                            {`1. ${config.text.homePage.howToUseDynamicForms}`}
                        </Link>
                    </Typography>
                    <Typography>
                        <Link color="primary" onClick={() => navigateToUrl('dynamic-forms')}>
                            {`2. ${config.text.homePage.startUsingDynamicForms}`}
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </div>
);


HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
    onUserChangeLangCode: PropTypes.func.isRequired,
    userLanguageCode: PropTypes.string.isRequired
};

export default withStyles(styles)(HomePage);
