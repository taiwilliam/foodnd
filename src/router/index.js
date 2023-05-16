import React from 'react'
import { Navigate } from 'react-router-dom'

const HomeView = React.lazy(() => import("@/views/home/Home"))
const ListView = React.lazy(() => import("@/views/list/List"))
const DetailView = React.lazy(() => import("@/views/detail/Detail"))
const AboutView = React.lazy(() => import("@/views/about/About"))

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
    path: '/list/:id',
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