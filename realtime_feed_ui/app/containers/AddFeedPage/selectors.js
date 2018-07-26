import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addFeedPage state domain
 */

const selectAddFeedPageDomain = state => state.get('addFeedPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddFeedPage
 */

const makeSelectAddFeedPage = () =>
  createSelector(selectAddFeedPageDomain, substate => substate.toJS());

export default makeSelectAddFeedPage;
export { selectAddFeedPageDomain };
