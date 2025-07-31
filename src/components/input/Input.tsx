import { useState } from "react";
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";

import css from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  clearable?: boolean;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  clearable,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const inputType = type === "password" && !visible ? "password" : "text";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (type === "number") {
      if (/^-?\d*\.?\d*$/.test(newValue) || newValue === "") {
        setValue(newValue);
      }
      return;
    }
    setValue(newValue);
  };
  return (
    <div className={css.wrap}>
      <div className={css.inputWrap}>
        <input
          {...props}
          type={inputType}
          name="password"
          className={css.input}
          value={value}
          onChange={handleChange}
        />
        {type === "password" && (
          <span className={css.eye} onClick={() => setVisible(!visible)}>
            {visible ? <FaRegEye /> : <LuEyeClosed />}
          </span>
        )}
        {clearable && value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className={css.clearBtn}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};
export default Input;
