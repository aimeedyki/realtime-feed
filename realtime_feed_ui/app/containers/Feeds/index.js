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
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

const FeedContainer = styled.div`
  background-color: #FFA784;
  width: 450px;
  height: auto;
  padding: 5px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

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
        <FeedContainer
          key={feed.id}
        >
          <div className="card-block">
            <h3 className="card-title">{feed.title}</h3>
            <p className="card-text">{feed.description}</p>
          </div>
        </FeedContainer>
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
