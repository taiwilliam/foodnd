const password_validation = {
  id: "password",
  type: "password",
  label: "密碼",
  placeholder: "請輸入密碼",
  name: "password",
  validation: {
    required: {
      value: true,
      message: "說出通關密語!",
    },
    minLength: {
      value: 6,
      message: "通關密語太短了",
    },
  },
};

export default password_validation;
