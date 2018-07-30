import { fromJS } from 'immutable';
import feedsPageReducer from '../reducer';

describe('feedsPageReducer', () => {
  it('returns the initial state', () => {
    expect(feedsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
