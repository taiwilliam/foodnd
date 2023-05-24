import React, { memo, useEffect, useState } from "react";
import { useLocation, useRoutes, matchRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "@/router";

import DynamicComponent from "./components/others/DynamicComponent";
import { getAccountAction } from "@/store/features/auth.store";
import { AUTH_TOKEN_KEY } from "./constants/global.constant";
import { setIsLoading } from "./store/features/global.store";

const App = memo(() => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [layout, setLayout] = useState("BaseLayout");

  useEffect(() => {
    const [{ route }] = matchRoutes(routes, location);
    setLayout(route.layout);

    windowToTop();
  }, [location]);

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const windowToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const fetchData = async () => {
    dispatch(setIsLoading(true));
    await dispatch(getAccountAction()).catch((err) =>
      localStorage.removeItem(AUTH_TOKEN_KEY)
    );
    dispatch(setIsLoading(false));
  };

  return (
    <div className='app'>
      {/* 根據routes obj的layout參數，動態使用layout components */}
      <DynamicComponent is={`components/Layouts/${layout}`}>
        {useRoutes(routes)}
      </DynamicComponent>
    </div>
  );
});

export default App;
