const validatePage_2 = (value) => {
  if (!value) {
    return { error: "La edad no puede estar vacía.", valid: false };
  }
  if (value <= 7 || value >= 85) {
    return {
      error:
        "Edad fuera de rango. Por favor, ingresa una edad entre 7 y 85 años.",
      valid: false,
    };
  }

  if (!value) {
    return {
      error: "Por favor, selecciona un género para continuar.",
      valid: false,
    };
  }

  return { error: null, valid: true };
};
export default validatePage_2;
