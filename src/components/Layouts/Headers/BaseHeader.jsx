import React, { Fragment, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BaseSkeleton from "@/components/Skeleton/BaseSkeleton";
import BaseButton from "@/components/Button/BaseButton";
import BaseSearchBar from "@/components/SearchBar/BaseSearchBar";
import logoPath from "@/assets/images/logo/foodnd.svg";
import BaseDropdown from "@/components/Dropdown/BaseDropdown";
import { logout, isLogin } from "@/services/authAPI.service";
import { setIsLoading } from "@/store/features/global.store";

const BaseHeader = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account, isloading } = useSelector((state) => ({
    account: state.auth.account,
    isloading: state.global.isLoading,
  }));

  const handleClickLogout = async () => {
    dispatch(setIsLoading(true));
    await logout();
    dispatch(setIsLoading(false));
  };

  const renderLoginBtn = () => {
    return (
      <Fragment>
        <BaseButton classNames={["me-2"]} icon='language' rounded='circle' />
        <BaseButton
          classNames={["me-2"]}
          rounded='pill'
          value='登入'
          handleClick={() => navigate("/login")}
        />
        <BaseButton rounded='pill' icon='person' value='註冊' />
      </Fragment>
    );
  };

  const renderAccountBtn = () => {
    return (
      <Fragment>
        <BaseButton classNames={["me-2"]} icon='language' rounded='circle' />

        <BaseDropdown
          btnEl={<BaseButton icon='person' rounded='circle'></BaseButton>}
        >
          <div className='p-3 py-2'>
            <div className='mb-2'>{account.name}</div>
            <div className='fs-sm text-muted'>{account.phone}</div>
          </div>
          <hr className='my-2' />
          <div
            className='p-3 hover-bg-secondary cursor-pointer'
            onClick={() => handleClickLogout()}
          >
            登出
          </div>
        </BaseDropdown>
      </Fragment>
    );
  };

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
          {isloading && (
            <Fragment>
              <BaseSkeleton type='circle' classNames='me-2' circle_size='40' />
              <BaseSkeleton type='circle' classNames='me-2' circle_size='40' />
              <BaseSkeleton type='circle' classNames='' circle_size='40' />
            </Fragment>
          )}
          {!isloading && (isLogin() ? renderAccountBtn() : renderLoginBtn())}
        </div>
      </div>
    </div>
  );
});

export default BaseHeader;
