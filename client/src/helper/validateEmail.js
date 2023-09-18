const validateEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (emailRegex.test(value)) {
    return true;
  } else {
    return false;
  }
};

export default validateEmail;
