const validatePage_2b = (value) => {
  if (!value) {
    return {
      error: "Por favor, selecciona un género para continuar.",
      valid: false,
    };
  }

  return { error: null, valid: true };
};
export default validatePage_2b;
