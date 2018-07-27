import { take, all, call, put, cancel, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { SAVE_FEED_REQUEST } from 'containers/AddFeedPage/constants';
import { saveFeed as saveFeedDispatch, saveFeedError } from 'containers/AddFeedPage/actions';
import { title as feedTitle, description as feedDescription } from 'containers/AddFeedPage/selectors';
import request from 'utils/request';

// Individual exports for testing
export function* saveFeed() {
  const title = yield select(feedTitle());
  const description = yield select(feedDescription());
  const requestURL = 'http://localhost:4000/api/feeds';
  console.log('saga')
  try {
    // Call our request helper (see 'utils/Request')
    yield put(saveFeedDispatch());
    yield call(request, requestURL, 'POST',
      {
        feed: {
          title,
          description,
        },
      },
    );
  } catch (err) {
    yield put(saveFeedError(err));
  }
}

export function* watchSaveFeed() {
  console.log('any chance that i came here')
  const watcher = yield takeLatest(SAVE_FEED_REQUEST, saveFeed);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default function* rootSaga() {
  yield all([watchSaveFeed()])
};
