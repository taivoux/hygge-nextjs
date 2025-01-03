import * as React from "react";
import { useState } from "react";
import "../../SCSS/components/ui/formgroup.scss";
interface MyProps {
  labelClass: string;
  inputClass: string;
  label: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setReadOnly: boolean;
}

const FormGroup: React.FC<MyProps> = ({
  label,
  labelClass,
  inputClass,
  value,
  onChange,
  setReadOnly,
}) => {
  return (
    <>
      <p className={labelClass}>{label}</p>
      <input
        type="text"
        className={inputClass}
        value={value}
        onChange={onChange}
        readOnly={setReadOnly}
      ></input>
    </>
  );
};

export default FormGroup;
