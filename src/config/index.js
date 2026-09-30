// @json
import dynamicForm from './data/dynamic-form.json';
import globals from './settings/globals.json';
import initialState from './state/initial-state.json';
import mainMenu from './menu/main-menu.json';
import mockData from './data/mock-data.json';
import routes from './routes/app-routes.json';
import services from './routes/api-services.json';
import textEn from './text/text-en.json';
import textEs from './text/text-es.json';

// @constants
const BASE_URL_PLACEHOLDER_FOR_SERVICES = '{root}';
const lang = {
    en: textEn,
    es: textEs
};

/**
 * @param {string} languageCode - E.g: 'en', 'es'.
 */
function applyLanguage(languageCode) {
    const config = this;
    config.text = lang[languageCode];
}

/**
 * @param {string} rootUrl - The base service url for the current environment.
 * @return {Object}
 */
const getServices = (rootUrl) =>
    JSON.parse(
        JSON.stringify(services)
            .replace(
                new RegExp(BASE_URL_PLACEHOLDER_FOR_SERVICES, 'g'),
                rootUrl
            )
    );

const getSettings = () => {
    switch (process.env.REACT_APP_ENV) {
        default:
            return globals;
    }
};

const buildMainMenu = (text) =>
    mainMenu.map(menuItem =>
        Object.assign({}, menuItem, {
            description: text.mainMenu[menuItem.name]
        }));

/**
 * @returns {Object}
 */
const getConfiguration = () => {
    const settings = getSettings();
    const services = getServices(settings.services.root);

    const config = {
        applyLanguage,
        dynamicForm,
        initialState,
        mockData,
        routes,
        services,
        settings
    };

    config.text = lang[config.initialState.user.languageCode];
    config.mainMenu = buildMainMenu(config.text);

    return config;
};

export const config = getConfiguration();
