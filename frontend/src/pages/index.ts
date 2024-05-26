import Login from './Login';
import Home from './Home';
import BuildingsInspect from './BuildingsInspect';

const pages = {
  login: { component: Login, url: '/' },
  home: { component: Home, url: '/home' },
  buildings: { component: BuildingsInspect, url: '/buildings' }
};

export default pages;
