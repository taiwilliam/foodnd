import userData from "@/data/user.data";
import { AUTH_TOKEN_KEY } from "@/constants/global.constant";

export const login = (data) => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      const user = matchIsUser(userData, data);
      if (user !== undefined) {
        resolve({
          status: "success",
          message: "成功登入",
          data: user,
        });
      } else {
        reject({
          status: "error",
          message: "帳號密碼錯誤",
        });
      }
    }, 1000);
  });
};

export const isLogin = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  return token !== null;
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      if (true) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        resolve();
      } else {
        var errMessage = "token錯誤，或已經過期";
        reject(errMessage);
      }
    }, 1000);
  });
};

export const getAccount = () => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const user = matchUserToToken(userData, token);

      if (user) {
        resolve(user);
      } else {
        var errMessage = "token錯誤，或已經過期";
        reject(errMessage);
      }
    }, 1000);
  });
};

const matchIsUser = (userArr, data) =>
  userArr.find(
    (item) =>
      String(data.phone) === String(item.phone) &&
      String(data.password) === String(item.password)
  );

const matchUserToToken = (userArr, token) =>
  userArr.find((item) => String(item.token) === String(token));

export default { login, getAccount };
