import React, { Fragment, memo } from "react";

const EmptyLayout = memo((props) => {
  const { children } = props;

  return (
    <Fragment>
      <div className='content'>{children}</div>
    </Fragment>
  );
});

export default EmptyLayout;
