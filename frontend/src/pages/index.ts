import Login from './Login';
import Home from './Home';
import BuildingsInspect from './BuildingsInspect';
import Create from './Create'; 

const pages = {
  login: { component: Login, url: '/' },
  home: { component: Home, url: '/home' },
  buildings: { component: BuildingsInspect, url: '/buildings' },
  create: { component: Create, url: '/create' }
};

export default pages;
