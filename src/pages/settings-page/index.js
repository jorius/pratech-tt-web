// @packages
import React from 'react';
import PropTypes from 'prop-types';

const SettingsPage = ({
    title
}) => (
    <div>
        {title}
    </div>
);

SettingsPage.propTypes = {
    title: PropTypes.string.isRequired
};

export default SettingsPage;
