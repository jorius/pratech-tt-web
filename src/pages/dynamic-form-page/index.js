// @packages
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

// @scripts
import CtrlDynamicForm from '../../components/ctrl-dynamic-form';
import { config } from '../../config';

// @styles
import styles from './styles';

// @images
import logo from '../../styles/images/logo.png';

const DynamicFormPage = ({ classes }) => {
    const buildForm = () =>
        config.dynamicForm.map((formItem) => ({
            ...formItem,
            label: config.text.dynamicFormPage[formItem.name],
            options: formItem.options && formItem.options.length
                ? formItem.options.map((option) =>
                    ({
                        name: option,
                        label: config.text.dynamicFormPage[option],
                        value: option
                    }))
                : [],
            selectOptionLabel: formItem.selectOptionLabel
                ? config.text.dynamicFormPage[formItem.selectOptionLabel]
                : null
        }));

    return (
        <div className={classes.dynamicFormPageContainer}>
            <img alt="logo" src={logo} />
            <Grid
                alignContent="center"
                alignItems="center"
                container
                direction="row"
                justify="center"
            >
                <Grid
                    className={classes.dynamicFormPageItem}
                    item
                    lg={4}
                    sm={12}
                    xs={12}
                >
                    <Paper className={classes.dynamicFormPagePaper} elevation={3}>
                        <Typography
                            className={classes.title}
                            variant="h4"
                        >
                            {config.text.dynamicFormPage.title}
                        </Typography>
                        <CtrlDynamicForm
                            form={buildForm()}
                            saveButtonLabel={config.text.dynamicFormPage.save}
                            cancelButtonLabel={config.text.dynamicFormPage.cancel}
                        />
                    </Paper>
                </Grid>
                <Grid
                    className={classes.dynamicFormPageItem}
                    item
                    lg={8}
                    sm={12}
                    xs={12}
                >
                    <Paper className={classes.dynamicFormPagePaper} elevation={3}>
                        <Typography
                            className={classes.title}
                            variant="h4"
                        >
                            {config.text.dynamicFormPage.records}
                        </Typography>
                        {/* TODO: I should place the table with the saved records here! */}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

DynamicFormPage.propTypes = {
    classes: PropTypes.object.isRequired
};

DynamicFormPage.defaultProps = {};

export default withStyles(styles)(DynamicFormPage);
