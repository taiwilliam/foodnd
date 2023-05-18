import React, { Fragment, memo } from "react";
import BaseHeader from "./Headers/BaseHeader";

const EmptyLayout = memo((props) => {
  const { children } = props;

  return (
    <Fragment>
      <BaseHeader />
      <div className='content'>{children}</div>
    </Fragment>
  );
});

export default EmptyLayout;
