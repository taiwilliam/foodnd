import React, { Fragment, memo } from "react";
// import { useRoutes } from "react-router-dom";
// import routes from "@/router";

import BaseHeader from "@/components/Layouts/Headers/BaseHeader";
import BaseFooter from "@/components/Layouts/Footers/BaseFooter";
import BaseAlert from "@/components/Alert/BaseAlert";

const BaseLayout = memo((props) => {
  const { children } = props;

  return (
    <Fragment>
      <BaseHeader />
      <div className='content'>{children}</div>
      <BaseFooter />
      <BaseAlert />
    </Fragment>
  );
});

export default BaseLayout;
