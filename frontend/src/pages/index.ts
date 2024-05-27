import Login from './Login';
import Home from './Home';
import Streets from './Streets';
import Buildings from './buildings/Buildings';


const pages: Pages = {
  buildings: { component: Buildings, name: "Buildings", url: "/buildings", navbar: true },
  streets: { component: Streets, name: "Streets", url: "/streets", navbar: true },
  login: { component: Login, name: "Login", url: "/", navbar: false },
  home: { component: Home, name: "NeighbourConnect", url: '/home', navbar: false },
};

export default pages;
