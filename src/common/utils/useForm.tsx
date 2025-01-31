import React from "react";


export const useForm = (validate: (values: { [key: string]: string }) => { [key: string]: string }) => {
  const [formState, setFormState] = React.useState({
    values: {} as { [key: string]: string },
    errors: {} as { [key: string]: string },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value },
      errors: { ...prevState.errors, [name]: "" }, // Reset the error for the field
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, callback: () => Promise<void>) => {
    e.preventDefault();
    const errors = validate(formState.values);
    setFormState((prevState) => ({ ...prevState, errors }));
    if (Object.keys(errors).length === 0) {
     await callback();
      setFormState({
        values: {}, // Reset values to initial state
        errors: {}, // Clear errors
      });
    }
  };

  return {
    values: formState.values,
    errors: formState.errors,
    handleChange,
    handleSubmit,
  };
};

