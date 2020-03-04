// @scripts
import HomePageContainer from '../../containers/home-page';
import SettingsPageContainer from '../../containers/settings-page';

// @constants
const components = {
    HomePageContainer,
    SettingsPageContainer
};

/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = (componentName) =>
    components[componentName];
