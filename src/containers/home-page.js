// @packages
import React from 'react';
import { connect } from 'react-redux';

// @scripts
import HomePage from '../pages/home-page';

const HomePageContainer = () =>
    <HomePage />;

HomePageContainer.propTypes = {};

HomePageContainer.defaultProps = {};

export default connect(
    null, null
)(HomePageContainer);
