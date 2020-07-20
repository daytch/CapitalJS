import { createBrowserHistory } from 'history';
import {BASE_URL} from '../constants';

const history = createBrowserHistory({basename: BASE_URL});
export default history;

function currentPathname(){
  return history.location.pathname;
}
export {
  currentPathname
}