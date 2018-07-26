import { fromJS } from 'immutable';
import addFeedPageReducer from '../reducer';

describe('addFeedPageReducer', () => {
  it('returns the initial state', () => {
    expect(addFeedPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
