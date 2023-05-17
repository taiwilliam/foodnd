import React, { Fragment } from "react";

const BaseSkeleton = (props) => {
  const {
    type = "box",
    heightRatio = 100,
    classNames = "",
    text_height = 16,
    circle_size = 24,
  } = props;

  return (
    <Fragment>
      {type === "box" && (
        <div
          className={`cz_skeleton__box ${classNames}`}
          style={{ paddingTop: `${heightRatio}%` }}
        ></div>
      )}
      {type === "text" && (
        <div
          className={`cz_skeleton__text ${classNames}`}
          style={{ height: `${text_height}px` }}
        ></div>
      )}
      {type === "circle" && (
        <div
          className={`cz_skeleton__circle ${classNames}`}
          style={{
            height: `${circle_size}px`,
            width: `${circle_size}px`,
          }}
        ></div>
      )}
    </Fragment>
  );
};

export default BaseSkeleton;
