import React from 'react'
import { Navigate } from 'react-router-dom'

const HomeView = React.lazy(() => import("@/views/home"))
const ListView = React.lazy(() => import("@/views/list"))
const DetailView = React.lazy(() => import("@/views/detail"))
const AboutView = React.lazy(() => import("@/views/about"))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <HomeView/>
  },
  {
    path: '/list',
    element: <ListView/>
  },
  {
    path: '/detail',
    element: <DetailView/>
  },
  {
    path: '/about',
    element: <AboutView/>
  },
  {
    path: '/*',
    element: <Navigate to="/home" />
  }
]

export default routes