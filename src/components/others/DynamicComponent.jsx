import React from "react";

const DynamicComponent = ({ is = "BaseLayout", ...rest }) => {
  return React.createElement(
    is !== "components/Layouts/undefined"
      ? // ? require(`src/components/Layouts/${is}`).default
        require(`src/${is}.jsx`).default // 解法先寫好跟目錄 並且加入預設會引入的副檔名
      : require(`src/components/Layouts/EmptyLayout`).default,
    {
      ...rest,
    }
  );
};

export default DynamicComponent;
