// @packages
import React from 'react';
import { connect } from 'react-redux';

// @scripts
import LoginPage from '../pages/login-page';

const LoginPageContainer = () =>
    <LoginPage />;

LoginPageContainer.propTypes = {};

LoginPageContainer.defaultProps = {};

export default connect(
    null, null
)(LoginPageContainer);
