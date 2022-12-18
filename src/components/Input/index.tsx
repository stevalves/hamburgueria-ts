import { InputHTMLAttributes, forwardRef } from "react";
import { StInput } from "./styles";

interface iInputValue extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, iInputValue>(
  ({ type, label, id, placeholder, ...rest }, ref) => {
    return (
      <StInput>
        <legend>
          <label htmlFor={id}>{label}</label>
        </legend>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
      </StInput>
    );
  }
);
