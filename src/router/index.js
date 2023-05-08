import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import("@/views/home"))
const List = React.lazy(() => import("@/views/list"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/list',
    element: <List/>
  },{
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/*',
    element: <Navigate to="/home" />
  }
]

export default routes