import React, { ChangeEvent } from "react";
import Input from "./input";

interface FormLabelProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormLabel = ({ title, value, onChange }: FormLabelProps) => {
  return (
    <label>
      <div>{title}</div>
      <Input size="m" value={value} onChange={onChange} />
    </label>
  );
};

export default FormLabel;
