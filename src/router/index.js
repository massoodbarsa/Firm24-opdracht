const routes = [{
  path: '/',
  name: 'Home',
  component: () => import( /* webpackChunkName: "calender" */ '../pages/Home')
}
]

export default routes