import React, { useEffect, useState } from "react";
import BaseButton from "../Button/BaseButton";

const BaseDropdown = ({ handleClick = false, btnEl, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleWindowClick = () => {
    setIsActive(false);
  };

  return (
    <div className='cz_dropdown' onClick={(e) => e.stopPropagation()}>
      <div className='cz_dropdown__btn' onClick={() => setIsActive(!isActive)}>
        {btnEl ? btnEl : <BaseButton icon='more_vert' rounded='circle' />}
      </div>
      {isActive && <div className={`cz_dropdown__wrap`}>{children}</div>}
    </div>
  );
};

export default BaseDropdown;
