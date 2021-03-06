import { useState } from "react";
import "./FormInput.scss";

const FormInput = props => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, type } = props;

  return (
    <div className="formInput">
      <label htmlFor={props.name}>{label}</label>
      <input
        type={type}
        name={props.name}
        id={id}
        placeholder={props.placeholder}
        onChange={onChange}
        required={props.required}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
      />
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default FormInput;
