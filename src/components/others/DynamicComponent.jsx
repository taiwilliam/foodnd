import React from "react";

const DynamicComponent = ({ is = "BaseLayout", ...rest }) => {
  return React.createElement(
    is !== "undefined" || is
      ? require(`src/components/Layouts/${is}`).default
      : require(`src/components/Layouts/EmptyLayout`).default,
    {
      ...rest,
    }
  );
};

export default DynamicComponent;
