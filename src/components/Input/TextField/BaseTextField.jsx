import React from "react";
import { useFormContext } from "react-hook-form";
import findInputError from "@/components/Input/TextField/utils/findInputError";
import isFormInvalid from "@/components/Input/TextField/utils/isFormInvalid";

const BaseTextField = ({
  label = "",
  type = "text",
  id = "demo",
  placeholder = "",
  validation = "",
  name = "",
  disabled = false,
  multiline = false,
  className = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // 找到此輸入框的錯誤訊息
  const inputError = findInputError(errors, name);
  // 是否顯示錯誤訊息
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className={`cz_text_field${className}`}>
      <div className='cz_text_field__header'>
        <label htmlFor={id} className='cz_text_field__header__label'>
          {label}
        </label>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={`cz_text_field__input${isInvalid ? " active" : ""}`}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, validation)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`cz_text_field__input${isInvalid ? " active" : ""}`}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name, validation)}
        />
      )}
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return <div className='text-danger fs-xs'>{message}</div>;
};

export default BaseTextField;
