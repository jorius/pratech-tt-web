// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import HomePage from '../pages/home-page';
import { changeUserLangCode } from '../redux/user';

const HomePageContainer = ({
    onUserChangeLangCode,
    userLanguageCode
}) => (
    <HomePage
        onUserChangeLangCode={onUserChangeLangCode}
        userLanguageCode={userLanguageCode}
    />
);

HomePageContainer.propTypes = {
    onUserChangeLangCode: PropTypes.func.isRequired,
    userLanguageCode: PropTypes.string.isRequired
};

HomePageContainer.defaultProps = {};

const mapStateToProps = ({ user }) => ({
    userLanguageCode: user.languageCode
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onUserChangeLangCode: changeUserLangCode
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomePageContainer);
