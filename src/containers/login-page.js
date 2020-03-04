// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import LoginPage from '../pages/login-page';
import { userLogin } from '../redux/user';

const LoginPageContainer = ({ onUserLogin }) =>
    <LoginPage onUserLogin={onUserLogin} />;

LoginPageContainer.propTypes = {
    onUserLogin: PropTypes.func.isRequired
};

LoginPageContainer.defaultProps = {};

const mapDispatchToProps = dispatch => bindActionCreators({
    onUserLogin: userLogin
}, dispatch);

export default connect(
    null, mapDispatchToProps
)(LoginPageContainer);
