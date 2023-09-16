'use client'

import validateEmail from "@/helper/validateEmail";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const FormNewsletter = () => {
  const dispatch = useDispatch();
  const topRef = useRef(null);

  const [form, setForm] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    scrollToTop();
    event.preventDefault();
    setForm({ ...form, email: "" }); // Limpia solo el campo de correo electrónico
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 50;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);

    topRef.current.style.top = "0";
    setTimeout(() => {
      topRef.current.style.top = "-1000px";
    }, 1500);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value }); // Actualiza el estado en tiempo real

    // Validar el correo electrónico aquí y actualizar los errores si es necesario
    if (!validateEmail(value)) {
      setErrors({ ...errors, email: "Correo electrónico inválido" });
      setButtonDisabled(true)
    } else {
        setErrors({ ...errors, email: "" });
        setButtonDisabled(false)
    }
  };


  const clase1 = ""
  const clase2 = ""


  return (
    <div>
      <form class="mt-20  text-white" onSubmit={handleSubmit}>
        <div class="flex items-center justify-center">
          <input
            class="w-[30rem] h-11 text-black p-3 text-lg focus:outline-none font-montserrat font-normal not-italic leading-normal"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={changeHandler} // Manejar cambios en tiempo real
          />

          <button
            class=" w-40 h-11 border-blue-600 bg-blue-600 p-1 text-center text-xs not-italic font-montserrat font-bold leading-normal transition duration-300 ease-in-out transform hover:scale-105 text-white hover:bg-gray-900 hover:border-gray-900"
            type="submit"
            onClick={handleSubmit}
            disabled={buttonDisabled}
          >
            Empezar mi transformación
          </button>
        </div>
      </form>
      <div
        ref={topRef}
        style={{ top: "-1000px", transition: "top 1.5s ease-in-out" }}
      ></div>
      <div>
        <li>{errors.email}</li>
      </div>
    </div>
  );
};

export default FormNewsletter;
