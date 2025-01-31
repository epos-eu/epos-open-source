const validate = (values: { [key: string]: string }) => {
  const errors: { [key: string]: string } = {};

  if (!values.user_name) {
    errors.user_name = "Name is required";
  }

  if (!values.user_email) {
    errors.user_email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
    errors.user_email = "Email is invalid";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
};
export default validate 