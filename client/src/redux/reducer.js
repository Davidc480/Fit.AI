import { POST_EMAIL, UPDATE_USER_INFO } from "./actions";
import { ERROR } from "./actions";
import { SET_CURRENT_PAGE } from "./actions";

const initialState = {
  currentPage: 1,
  userInfo: {
    name: "",
    edad: 0,
    genero: "",
    estatura: 0.0,
    peso: 0,
    condicionMedica: "",
    objetivo: "",
    nivelExperiencia: "",
    plazo: "",
    diasEntrenamiento: "",
    tiempoLibre: "",
    preferenciaEntrenamiento: "",
    actividadFisica: "",
    preferenciaEjercicios: [],
    lesion: "",
    estres: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMAIL:
      return { ...state, email: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.payload.inputKey]: action.payload.value,
        },
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
