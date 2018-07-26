/**
 *
 * AddFeedPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddFeedPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class AddFeedPage extends React.Component {
  render() {
    return <div />;
  }
}

AddFeedPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addfeedpage: makeSelectAddFeedPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'addFeedPage', reducer });
const withSaga = injectSaga({ key: 'addFeedPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddFeedPage);
