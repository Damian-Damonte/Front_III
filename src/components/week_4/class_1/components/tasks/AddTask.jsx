import React, { useState } from "react";
import { FormAdd, Input, InputSubmit } from "./TaskStyle";

const AddTask = ({ handleAdd, value, onChange }) => {
  return (
    <FormAdd onSubmit={(e) => handleAdd(e)}>
        <Input
          value={value}
          type="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Agregar tarea"
        />
      <InputSubmit type="submit" value="Agregar" />
    </FormAdd>
  );
};

export default AddTask;
