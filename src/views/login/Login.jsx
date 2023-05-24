import React, { memo, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import BaseButton from "@/components/Button/BaseButton";
import BaseTextField from "@/components/Input/TextField/BaseTextField";
import phone_validation from "@/views/login/utils/phone_validation";
import password_validation from "@/views/login/utils/password_validation";
import authAPI from "@/services/authAPI.service";
import { AUTH_TOKEN_KEY } from "@/constants/global.constant";

import { setIsPartialLoading } from "@/store/features/global.store";
import { getAccountAction } from "@/store/features/auth.store";
import BaseIcon from "@/components/Icon/BaseIcon";

const Login = memo(() => {
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const { isPartialLoading } = useSelector(
    (state) => ({
      isPartialLoading: state.global.isPartialLoading,
    }),
    shallowEqual
  );
  // useSelector的缺點是在組件決定是否渲染之前會進行一次引用比較，每次函數調用後都會進行一次重新渲染解決useSelector的缺點：使用shallowEqual進行優化，淺比較會 在組件決定是否渲染之前執行 如果組件依賴的狀態沒有改變，則不會渲染

  useEffect(() => {
    if (checkIsLogin()) navigate("/home");
  }, []);

  const checkIsLogin = () => localStorage.getItem(AUTH_TOKEN_KEY);

  const onSubmit = methods.handleSubmit((data) => {
    login(data);
  });

  const login = async (data) => {
    dispatch(setIsPartialLoading(true));
    await authAPI
      .login(data)
      .then((res) => loginSuccessTodo(res))
      .catch((err) => loginErrorTodo(err));

    await dispatch(getAccountAction()).catch((err) =>
      localStorage.removeItem(AUTH_TOKEN_KEY)
    );

    await dispatch(setIsPartialLoading(false));
  };

  const loginSuccessTodo = (res) => {
    // 將token儲存在到 localstorage裡
    localStorage.setItem(AUTH_TOKEN_KEY, res.data.token);

    // 並跳轉到首頁
    navigate("/home");
  };

  const loginErrorTodo = (err) => {
    // 顯示錯誤訊息
    setErrMsg(err.message);
  };

  return (
    <div className='container vh-100 w-100 d-flex align-items-center justify-content-center'>
      <div className='border rounded-3 mx-414px nw-300px'>
        <div className='p-3 border-bottom'>登入</div>
        <div className='p-3'>
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate //禁用原生默認驗證行為
            >
              <div className='row gy-4'>
                <div className='col-12 fs-lg fw-bold py-4'>
                  Welcome to Foodnd
                </div>
                <div className='col-12'>
                  <BaseTextField
                    {...phone_validation}
                    disabled={isPartialLoading}
                  />
                </div>
                <div className='col-12'>
                  {/* 將TextField參數轉為物件抽離 將規則與畫面關注點分離 */}

                  <BaseTextField
                    {...password_validation}
                    disabled={isPartialLoading}
                  />
                </div>

                {errMsg && (
                  <div className='col-12'>
                    <div className='text-danger p-3 border border-danger rounded-2 fs-sm bg-light d-flex align-items-center'>
                      <BaseIcon icon='error' classNames={["me-2"]} />
                      {errMsg}
                    </div>
                  </div>
                )}

                <div className='col-12'>
                  <BaseButton
                    value='登入'
                    classNames={["w-100", "d-block"]}
                    handleClick={onSubmit}
                    loading={isPartialLoading}
                  />
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
});

export default Login;
