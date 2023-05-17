import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import BaseButton from "@/components/Button/BaseButton";
import BaseSearchBar from "@/components/SearchBar/BaseSearchBar";
import logoPath from "@/assets/images/logo/foodnd.svg";

const BaseHeader = memo(() => {
  const navigate = useNavigate();

  return (
    <div className='cz_header border-bottom border-secondary py-4'>
      <div className='container d-flex'>
        <div className='d-flex flex-sm-1 align-items-center'>
          <img
            className='cz_header__logo'
            src={logoPath}
            alt=''
            onClick={() => navigate("/home")}
          />
        </div>
        <div className='d-none d-md-block'>
          <BaseSearchBar />
        </div>
        <div className='d-flex flex-1 justify-content-end align-items-center'>
          <BaseButton classNames={["me-2"]} icon='language' rounded='circle' />
          <BaseButton
            classNames={["me-2"]}
            rounded='pill'
            value='登入'
            handleClick={() => navigate("/login")}
          />
          <BaseButton rounded='pill' icon='person' value='註冊' />
        </div>
      </div>
    </div>
  );
});

export default BaseHeader;
