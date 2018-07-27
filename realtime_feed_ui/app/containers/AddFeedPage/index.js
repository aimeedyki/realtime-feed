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
import {title,
  description,
  error,
  saving} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {Form} from '../../components/form'
import {updateAttributes, saveFeedRequest} from './actions'

/* eslint-disable react/prefer-stateless-function */
export class AddFeedPage extends React.Component {
  render() {
    {console.log('component', this.props.saving)}
    return (
      <div>
        <Form
          onChange={(val) => this.props.updateAttributes(val)}
          onSave={() => this.props.saveFeedRequest()}
          saving={this.props.saving}
        />
      </div>
    );
  }
}

AddFeedPage.propTypes = {
  updateAttributes: PropTypes.func,
  saveFeedRequest: PropTypes.func,
  saving: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  title: title(),
  description: description(),
  saving: saving(),
  error: error(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateAttributes: (val) => {
      dispatch(updateAttributes(val));
    },
    saveFeedRequest: () => {
      dispatch(saveFeedRequest());
    },
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
