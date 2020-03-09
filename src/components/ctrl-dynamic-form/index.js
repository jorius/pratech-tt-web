// @packages
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { PureComponent } from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { withStyles } from '@material-ui/styles';

// @cripts
import {
    checkValidations,
    formTypes,
    setInitialValueByType,
    validationTypes
} from './util';

// @styles
import styles from './styles';

class CtrlDynamicForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.buildState = this.buildState.bind(this);
        this.handleDateFieldOnChange = this.handleDateFieldOnChange.bind(this);
        this.handleFieldOnChange = this.handleFieldOnChange.bind(this);
        this.handleOnFormSave = this.handleOnFormSave.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderFormItem = this.renderFormItem.bind(this);
    }

    componentDidMount() {
        this.buildState();
    }

    buildState() {
        const { form } = this.props;

        form.forEach(({
            name,
            type,
            validations
        }) => {
            this.setState({
                [name]: {
                    isValid: false,
                    validations,
                    value: setInitialValueByType(type)
                }
            });
        });
    }

    handleOnFormSave() {
        const { state } = this;
        const { onSave } = this.props;
        const formData = Object.keys(state).map(key => checkValidations(state[key], key));

        const isFormValid = formData.every(({ isValid }) => isValid);

        if (isFormValid) {
            onSave(formData);
            return;
        }

        alert('error');
    }

    handleFieldOnChange({ target }) {
        const {
            name,
            value
        } = target;

        this.setState((prevState) => ({
            [name]: {
                ...prevState[name],
                value
            }
        }));
    }

    handleDateFieldOnChange(date, name) {
        this.setState({ [name]: date });
    }

    renderFormItem({
        format,
        id,
        label,
        name,
        options,
        selectOptionLabel,
        type
    }) {
        const { classes } = this.props;

        // eslint-disable-next-line react/destructuring-assignment
        const { value } = this.state[name] || {};

        switch (type) {
            case formTypes.CHECKBOX:
                return (
                    <FormControlLabel
                        control={(
                            <Checkbox
                                checked={value}
                                id={id}
                                name={name}
                                onChange={this.handleFieldOnChange}
                            />
                        )}
                        label={label}
                    />
                );
            case formTypes.DATE:
                return (
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                            KeyboardButtonProps={{ 'aria-label': name }}
                            disableToolbar
                            format={format}
                            id={id}
                            label={label}
                            margin="normal"
                            name={name}
                            onChange={(date) => this.handleDateFieldOnChange(date, name)}
                            value={value}
                            variant="inline"
                        />
                    </MuiPickersUtilsProvider>
                );
            case formTypes.PASSWORD:
                return (
                    <TextField
                        id={id}
                        label={label}
                        name={name}
                        onChange={this.handleFieldOnChange}
                        type="password"
                        value={value}
                        variant="outlined"
                    />
                );
            case formTypes.RADIO:
                return (
                    <RadioGroup
                        aria-label={label}
                        name={name}
                        onChange={this.handleFieldOnChange}
                        value={value}
                    >
                        {
                            options.map((option) => (
                                <FormControlLabel
                                    control={<Radio />}
                                    id={`${id}-${option.name}`}
                                    key={`${id}-${option.name}`}
                                    label={option.label}
                                    value={option.value}
                                />
                            ))
                        }
                    </RadioGroup>
                );
            case formTypes.SELECT:
                return (
                    <FormControl className={classes.formItemSelect}>
                        <InputLabel id={`${id}-select-option-label`}>{selectOptionLabel}</InputLabel>
                        <Select
                            id={id}
                            labelId={label}
                            name={name}
                            onChange={this.handleFieldOnChange}
                            value={value}
                        >
                            {
                                options.map((option) => (
                                    <MenuItem
                                        id={`${id}-${option.name}`}
                                        key={`${id}-${option.name}`}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                );
            case formTypes.TEXT:
            default:
                return (
                    <TextField
                        id={id}
                        label={label}
                        name={name}
                        onChange={this.handleFieldOnChange}
                        type="text"
                        value={value}
                        variant="outlined"
                    />
                );
        }
    }

    renderForm() {
        const { classes, form } = this.props;

        return form.map((item, index) => (
            <Grid
                item
                className={classes.formItem}
                key={`${item.name}-${index}`}
                lg={12}
                sm={12}
                xs={12}
            >
                {this.renderFormItem(item)}
            </Grid>
        ));
    }

    render() {
        const {
            cancelButtonLabel,
            classes,
            saveButtonLabel
        } = this.props;

        return (
            <Grid container direction="column">
                {this.renderForm()}
                <Grid
                    className={classes.formItem}
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                >
                    <Button
                        color="primary"
                        onClick={this.handleOnFormSave}
                        variant="contained"
                    >
                        {saveButtonLabel}
                    </Button>
                    <Button
                        className={classes.cancelButton}
                        color="secondary"
                        variant="contained"
                    >
                        {cancelButtonLabel}
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

CtrlDynamicForm.propTypes = {
    cancelButtonLabel: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    form: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        validations: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired,
    onSave: PropTypes.func.isRequired,
    saveButtonLabel: PropTypes.string.isRequired
};

export default withStyles(styles)(CtrlDynamicForm);
