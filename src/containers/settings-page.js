// @packages
import React from 'react';

// @scripts
import SettingsPage from '../pages/settings-page';
import { config } from '../config';

const SettingsPageContainer = () => (
    <SettingsPage title={config.text.settingsPage.title} />
);

export default SettingsPageContainer;
