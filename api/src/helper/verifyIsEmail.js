const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!!emailRegex.test(email)) {
    return !!emailRegex.test(email);
  }
};

module.exports = validateEmail;
