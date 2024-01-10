const validatePage_1 = (name) => {
  if (!name) {
    return { error: "El nombre no puede estar vacío.", valid: false };
  }
  if (name.length <= 3 || name.length >= 15) {
    return {
      error: "El nombre debe tener más de 3 y menos de 15 caracteres.",
      valid: false,
    };
  }
  if (!/^[A-Za-z ]+$/.test(name)) {
    return {
      error: "El nombre no puede contener números ni caracteres especiales.",
      valid: false,
    };
  }
  return { error: null, valid: true };
};

export default validatePage_1;
