import userData from "@/data/user.data";

export const login = (data) => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      if (matchIsUser(userData, data) !== undefined) {
        resolve({
          status: "success",
          message: "成功登入",
          data: data,
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

const matchIsUser = (userArr, data) =>
  userArr.find(
    (item) =>
      String(data.phone) === String(item.phone) &&
      String(data.password) === String(item.password)
  );

export default { login };
