// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// @scripts
import MasterPage from '../pages/master-page';
import { config } from '../config';

const MasterPageContainer = ({
    location,
    userIsLoggedIn,
    userLanguageCode,
    userPermissions
}) => {
    config.applyLanguage(userLanguageCode);

    const currentUrl = location.pathname;

    return (
        <MasterPage
            currentUrl={currentUrl}
            title={config.text.app.title}
            userProps={{
                isLoggedIn: userIsLoggedIn,
                permissions: userPermissions
            }}
        />
    );
};

MasterPageContainer.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    userIsLoggedIn: PropTypes.bool.isRequired,
    userLanguageCode: PropTypes.string.isRequired,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired
};

MasterPageContainer.defaultProps = {};

const mapStateToProps = ({ user }) => ({
    userIsLoggedIn: user.isLoggedIn,
    userLanguageCode: user.languageCode,
    userPermissions: user.permissions
});

export default connect(
    mapStateToProps, null
)(MasterPageContainer);
