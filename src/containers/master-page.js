// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// @scripts
import MasterPage from '../pages/master-page';
import { config } from '../config';

const MasterPageContainer = ({
    userLanguageCode
}) => {
    config.applyLanguage(userLanguageCode);

    return (
        <MasterPage
            title={config.text.app.title}
        />
    );
};

MasterPageContainer.propTypes = {
    userLanguageCode: PropTypes.string.isRequired
};

MasterPageContainer.defaultProps = {};

const mapStateToProps = ({ user }) => ({
    userLanguageCode: user.languageCode
});

export default connect(
    mapStateToProps, null
)(MasterPageContainer);
