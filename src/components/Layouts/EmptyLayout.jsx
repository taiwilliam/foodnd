import React, { Fragment, memo } from "react";
import EmptyHeader from "./Headers/EmptyHeader";

const EmptyLayout = memo((props) => {
  const { children } = props;

  return (
    <Fragment>
      <EmptyHeader />
      <div className='content'>{children}</div>
    </Fragment>
  );
});

export default EmptyLayout;
