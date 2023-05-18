import matchPhoneRegex from "@/views/login/utils/matchPhoneRegex";

const phone_validation = {
  id: "phone",
  type: "tel",
  label: "電話",
  placeholder: "請輸入電話號碼",
  name: "phone",
  validation: {
    required: {
      value: true,
      message: "可以跟你要電話嘛?",
    },
    pattern: {
      value: matchPhoneRegex,
      message: "這... 這應該不是你的電話吧?",
    },
  },
};

export default phone_validation;
