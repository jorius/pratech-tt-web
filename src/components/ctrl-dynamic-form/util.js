// @constants
export const formTypes = {
    CHECKBOX: 'checkbox',
    DATE: 'date',
    PASSWORD: 'password',
    RADIO: 'radio',
    SELECT: 'select',
    TEXT: 'text'
};

export const validationTypes = {
    REQUIRED: 'required'
};

/**
 * @param {string} formItemType
 */
export const setInitialValueByType = (formItemType) => {
    switch (formItemType) {
        case formTypes.CHECKBOX:
            return false;
        case formTypes.DATE:
            return null;
        case formTypes.PASSWORD:
        case formTypes.RADIO:
        case formTypes.TEXT:
        default:
            return '';
    }
};

/**
 * Check if the item given passes the validations of itself.
 * @param {object} item
 * @param {string} name
 */
export const checkValidations = (item, name) => {
    const {
        validations,
        value
    } = item;

    const isValid = validations.map((validation) => {
        if (validation === validationTypes.REQUIRED) {
            if (value) {
                return true;
            }

            return false;
        }

        return false;
    }).every(isValid => isValid);

    return {
        ...item,
        isValid,
        name
    };
};
