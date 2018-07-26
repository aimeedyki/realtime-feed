/**
 *
 * Asynchronously loads the component for AddFeedPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
