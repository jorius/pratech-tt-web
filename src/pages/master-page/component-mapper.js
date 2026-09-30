// @scripts
import HomePageContainer from '../../containers/home-page';
import LoginPageContainer from '../../containers/login-page';
import NotFoundPageContainer from '../../containers/not-found-page';
import SettingsPageContainer from '../../containers/settings-page';
import DynamicFormPageContainer from '../../containers/dynamic-form-page';

// @constants
const components = {
    DynamicFormPageContainer,
    HomePageContainer,
    LoginPageContainer,
    NotFoundPageContainer,
    SettingsPageContainer
};

/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = (componentName) =>
    components[componentName];
