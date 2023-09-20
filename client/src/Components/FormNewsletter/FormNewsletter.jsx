'use client'

import validateEmail from "@/helper/validateEmail";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { postEmail } from "@/redux/actions";

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
    setForm({ ...form, email: "" });
    dispatch(postEmail(form.email))
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
    setForm({ ...form, [name]: value });


    if (!validateEmail(value)) {
      setErrors({ ...errors, email: "Correo electrónico inválido" });
      setButtonDisabled(true)
    } else {
        setErrors({ ...errors, email: "" });
        setButtonDisabled(false)
    }
  };


  return (
    <div>
      <form class="mt-16 text-white" onSubmit={handleSubmit}>
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
        style={{ top: "-1000px", transition: "top 2.5s ease-in-out" }}
      ></div>
      <div> {errors.email ?
      <div class="bg-red-500 text-white font-bold rounded-3xl border border-red-500 p-2 shadow-md w-[18.5rem] ml-52 mt-4">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01"></path>
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
        </svg>
        <p>{errors.email}</p>
      </div>
    </div>
      : 
      <div>
        <p></p>
    </div>}
      </div>
      <div> {validateEmail(form.email) ?
      <div class=" bg-green-700 text-white font-bold rounded-3xl border border-green-700 p-2 shadow-md w-[18.5rem] ml-52 mt-4">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01"></path>
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
        </svg>
        <p>Correo electrónico válido</p>
      </div>
    </div>
      : 
      <div>
        <p></p>
    </div>}
      </div>
    </div>
  );
};

export default FormNewsletter;
