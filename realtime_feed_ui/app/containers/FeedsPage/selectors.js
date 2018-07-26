import { createSelector } from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the feedsPage state domain
 */
const selectFeedsPageDomain = () => (state) => state.get('feedsPage', initialState);

/**
 * Other specific selectors
 */

const feeds = () => createSelector(
  selectFeedsPageDomain(),
  (titleState) => titleState.get('feeds').get('data')
);

const error = () => createSelector(
  selectFeedsPageDomain(),
  (errorState) => errorState.get('feeds').get('ui').get('error')
);

const isLoading = () => createSelector(
  selectFeedsPageDomain(),
  (loadingState) => loadingState.get('feeds').get('ui').get('loading')
);

const hasNewFeeds = () => createSelector(
  selectFeedsPageDomain(),
  (newFeedsState) => newFeedsState.get('metadata').get('hasNewFeeds')
);

export {
  feeds,
  error,
  isLoading,
  hasNewFeeds,
};
