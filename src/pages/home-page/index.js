// @packages
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

// @scripts
import CtrlDynamicForm from '../../components/ctrl-dynamic-form';
import { config } from '../../config';

// @styles
import styles from './styles';

const HomePage = ({ classes }) => {
    const buildForm = () =>
        config.dynamicForm.map((formItem) => ({
            ...formItem,
            label: config.text.dynamicForm[formItem.name],
            options: formItem.options && formItem.options.length
                ? formItem.options.map((option) =>
                    ({
                        name: option,
                        label: config.text.dynamicForm[option],
                        value: option
                    }))
                : [],
            selectOptionLabel: formItem.selectOptionLabel
                ? config.text.dynamicForm[formItem.selectOptionLabel]
                : null
        }));

    return (
        <div className={classes.homePageContainer}>
            <Grid
                alignContent="center"
                alignItems="center"
                container
                direction="row"
                justify="center"
            >
                <Grid
                    item
                    lg={6}
                    sm={6}
                    xs={12}
                >
                    <Typography variant="h3">{config.text.dynamicForm.title}</Typography>
                    <CtrlDynamicForm form={buildForm()} />
                </Grid>
                <Grid
                    item
                    lg={6}
                    sm={6}
                    xs={12}
                >
                    <Typography variant="h3">{config.text.dynamicForm.records}</Typography>
                    <CtrlDynamicForm form={buildForm()} />
                    {/* TODO: I should place the table with the saved records here! */}
                </Grid>
            </Grid>
        </div>
    );
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};

HomePage.defaultProps = {};

export default withStyles(styles)(HomePage);
