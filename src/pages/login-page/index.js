// @packages
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

// @scripts
import { config } from '../../config';

// @styles
import styles from './styles';

class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: ''
        };

        this.handleOnUserLogin = this.handleOnUserLogin.bind(this);
        this.handleOnFieldChange = this.handleOnFieldChange.bind(this);
    }

    handleOnUserLogin() {
        const { onUserLogin } = this.props;
        const { password, username } = this.state;

        onUserLogin(username, password);
    }

    handleOnFieldChange({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { classes } = this.props;
        const { password, username } = this.state;

        return (
            <div className={classes.loginPageContainer}>
                <div className={classes.loginPageContent}>
                    <Grid
                        alignItems="center"
                        container
                        className={classes.loginPageForm}
                        direction="column"
                        justify="center"
                    >
                        <Grid className={classes.loginpageItem} item>
                            <Typography variant="h4">{config.text.app.title}</Typography>
                        </Grid>
                        <Grid className={classes.loginPageItem} item>
                            <TextField
                                id="username"
                                label={config.text.loginPage.username}
                                name="username"
                                onChange={this.handleOnFieldChange}
                                value={username}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className={classes.loginPageItem} item>
                            <TextField
                                id="password"
                                label={config.text.loginPage.password}
                                name="password"
                                onChange={this.handleOnFieldChange}
                                type="password"
                                value={password}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid className={classes.loginPageItem} item>
                            <Button color="primary" onClick={this.handleOnUserLogin} variant="contained">Log In</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}


LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
    onUserLogin: PropTypes.func.isRequired
};

LoginPage.defaultProps = {};

export default withStyles(styles)(LoginPage);
