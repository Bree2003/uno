type NavbarItem = {
  name: string;
  route: string;
};

const navbarItems: NavbarItem[] = [
  {
    name: 'Comunidad',
    route: '/#comunidad',
  },
  {
    name: 'SleepBook',
    route: '/#sleepbook',
  },
  {
    name: 'Beneficios',
    route: '/#beneficios',
  },
  {
    name: 'Nosotros',
    route: '/about',
  },
  {
    name: 'Partners',
    route: '/about#partners',
  },
  {
    name: 'Blog',
    route: '/blog',
  },
];

export default navbarItems;
