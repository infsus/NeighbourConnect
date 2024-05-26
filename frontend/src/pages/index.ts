import Login from './Login';
import Home from './Home';
import BuildingsInspect from './BuildingsInspect';
import Create from './Create'; 
import StreetTable from './StreetTable';

const pages = {
  login: { component: Login, url: '/' },
  home: { component: Home, url: '/home' },
  buildings: { component: BuildingsInspect, url: '/buildings' },
  create: { component: Create, url: '/buildings/create' },
  streets: { component: StreetTable, url: '/streets' }
};

export default pages;
