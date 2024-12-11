import Login from './Login';
import Home from './Home';
import Streets from './Streets';
import MasterDetailForm from './buildings/MasterDetailForm';
import Edit from './buildings/Edit';
import Create from './Create';


const pages: Pages = {
  buildings: { 
    component: MasterDetailForm, 
    name: "Buildings", 
    url: "/buildings", 
    navbar: true, 
    props: undefined 
  },
  buildingCreateNew: { 
    component: Edit, 
    name: "Building Create", 
    url: "/buildings/create-new", 
    navbar: false, 
    props: undefined
  },
  buildingCreate: { 
    component: Create, 
    name: "Building Create", 
    url: "/buildings/create", 
    navbar: false, 
    props: undefined
  },
  buildingEdit: { 
    component: Edit, 
    name: "Building Edit", 
    url: "/buildings/edit", 
    navbar: false, 
    props: undefined
  },
  streets: { 
    component: Streets, 
    name: "Streets", 
    url: "/streets", 
    navbar: true, 
    props: undefined 
  },
  login: { 
    component: Login, 
    name: "Login", 
    url: "/", 
    navbar: false, 
    props: undefined 
  },
  home: { 
    component: Home, 
    name: "NeighbourConnect", 
    url: '/home', 
    navbar: false, 
    props: undefined 
  },
};

export default pages;
