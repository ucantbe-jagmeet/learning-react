import React from "react";
import { IFormRow } from "../@types";

const FormRow: React.FC<IFormRow> = ({
  type,
  name,
  value,
  handleChange,
  labelText,
}) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
