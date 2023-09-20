const validateEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  return !!emailRegex.test(value);
};

export default validateEmail;
