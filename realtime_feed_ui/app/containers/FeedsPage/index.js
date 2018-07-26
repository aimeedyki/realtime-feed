/*
 *
 * FeedsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { feeds, isLoading, error, hasNewFeeds } from './selectors';
import { fetchFeedsRequest } from './actions';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export class FeedsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchFeedsRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasNewFeeds) {
      this.props.fetchFeedsRequest();
    }
  }

  feedsNode() {
    return [...this.props.feeds].reverse().map((feed) => { // eslint-disable-line arrow-body-style
      return (
        <div
          className="col-12"
          key={feed.id}
        >
          <div
            className="card"
            style={{ margin: '15px 0' }}
          >
            <div className="card-block">
              <h3 className="card-title">{ feed.title }</h3>
              <p className="card-text">{ feed.description }</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="row">
        {this.feedsNode()}
      </div>
    );
  }
}

FeedsPage.propTypes = {
  fetchFeedsRequest: PropTypes.func,
  feeds: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  feeds: feeds(),
  loading: isLoading(),
  error: error(),
  hasNewFeeds: hasNewFeeds(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchFeedsRequest: () => {
      dispatch(fetchFeedsRequest());
    },
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'feedsPage', reducer });
const withSaga = injectSaga({ key: 'feedsPage', saga });



export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeedsPage);
// export default withConnect()(FeedsPage);
