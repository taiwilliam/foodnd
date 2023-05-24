import React from "react";
import { Navigate } from "react-router-dom";

const HomeView = React.lazy(() => import("@/views/home/Home"));
const ListView = React.lazy(() => import("@/views/list/List"));
const DetailView = React.lazy(() => import("@/views/detail/Detail"));
const AboutView = React.lazy(() => import("@/views/about/About"));
const LoginView = React.lazy(() => import("@/views/login/Login"));

const routes = [
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "/login",
    element: <LoginView />,
    layout: "EmptyLayout", // 此為自定義屬性 用來渲染指定layout用
  },
  {
    path: "/home",
    element: <HomeView />,
    layout: "BaseLayout",
  },
  {
    path: "/list/:id",
    element: <ListView />,
    layout: "BaseLayout",
  },
  {
    path: "/detail",
    element: <DetailView />,
    layout: "BaseLayout",
  },
  {
    path: "/about",
    element: <AboutView />,
    layout: "BaseLayout",
  },
  {
    path: "/*",
    element: <Navigate to='/home' />,
  },
];

export default routes;
