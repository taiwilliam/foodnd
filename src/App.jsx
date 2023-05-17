import React, { memo, useEffect, useRef, useState } from "react";
import { useLocation, useRoutes, matchRoutes } from "react-router-dom";
import routes from "@/router";

import DynamicComponent from "./components/others/DynamicComponent";

const App = memo(() => {
  const location = useLocation();
  const [layout, setLayout] = useState("BaseLayout");
  const ref = useRef(null);

  useEffect(() => {
    const [{ route }] = matchRoutes(routes, location);
    setLayout(route.layout);
  }, [location]);

  return (
    <div ref={ref}>
      {/* 根據routes obj的layout參數，動態使用layout components */}
      <DynamicComponent is={`${layout}`}>{useRoutes(routes)}</DynamicComponent>
    </div>
  );
});

export default App;
