import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addFeedPage state domain
 */

const selectAddFeedPageDomain = () => state => state.get('addFeedPage', initialState);

/**
 * Other specific selectors
 */
const title = () => createSelector(
  selectAddFeedPageDomain(),
  (titleState) => titleState.get('feed').get('data').get('title')
);
 
const description = () => createSelector(
  selectAddFeedPageDomain(),
  (titleState) => titleState.get('feed').get('data').get('description')
);
 
const error = () => createSelector(
  selectAddFeedPageDomain(),
  (errorState) => errorState.get('feed').get('ui').get('error')
);
 
const saving = () => createSelector(
  selectAddFeedPageDomain(),
  (savingState) => savingState.get('feed').get('ui').get('saving')
);

/**
 * Default selector used by AddFeedPage
 */

const makeSelectAddFeedPage = () =>
  createSelector(selectAddFeedPageDomain, substate => substate.toJS());

export default makeSelectAddFeedPage;
export {
  title,
  description,
  error,
  saving
};
