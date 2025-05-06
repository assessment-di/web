import { Route } from 'react-router-dom'
import Members from './Members'
import Details from './Details'
import Home from './Home'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/members',
    element: <Members />,
  },
  {
    path: '/members/:id',
    element: <Details />,
  },
]

export const renderRoutes = () => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ))
}
