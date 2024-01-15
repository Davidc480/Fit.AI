'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";
import { useState, useEffect } from "react";
import validatePage_2 from "@/helper/validateForm/validatePage_2";
import validatePage_2b from "@/helper/validateForm/validatePage_2b";



const PageTwo = () => {

  const [valueInput, setValueInput] = useState({enabled: false, edad: 0, genero: "",});
  const [errorsEdad, setErrorsEdad] = useState("");
  const [errorsGenero, setErrorsGenero] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
if(name === "edad"){
  if(validatePage_2(value).valid){
    setValueInput(prevState => ({ ...prevState, [name]: value}))
    setErrorsEdad("")
  } else {
    setErrorsEdad(validatePage_2(value).error)
    setValueInput(prevState =>({...prevState, enabled: false, edad:0,}))
  }
}

  if(name === "genero"){
    if(validatePage_2b(value).valid){
      setValueInput(prevState => ({ ...prevState, [name]: value}))
      setErrorsGenero("")
    } else {
      setErrorsGenero(validatePage_2b(value).error)
      setValueInput(prevState =>({...prevState, enabled: false, genero: "",}))
    }
  }

}

useEffect(() => {
  if (valueInput.edad && valueInput.genero) {
    setValueInput(prevState => ({ ...prevState, enabled: true }));
  } else {
    setValueInput(prevState => ({ ...prevState, enabled: false }));
  }
}, [valueInput.edad, valueInput.genero]);

const handleSubmit = (e)=>{
  e.preventDefault();
}

  return (
    <div class="flex flex-col justify-center h-full p-5 text-white">
      <p class="text-center font-inter 2xl:-translate-y-24 text-2xl xl:text-4xl 2xl:text-6xl font-bold leading-normal mb-12 2xl:mb-0">
        ¡Felicidades! ahora estás a un <span className="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span>
      </p>

    <form onSubmit={handleSubmit} id="miFormulario">
      <div class="flex flex-col xl:flex-row xl:translate-x-16 2xl:translate-x-24">
        <div class="mb-6 xl:mb-0 xl:w-[32rem] 2xl:w-[42.5rem]">

          <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl font-bold leading-normal mb-4 text-lightBlue">Edad</p>
          <input type="number" class="no-spinners w-full  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" placeholder="Ingrese su edad" name="edad" onChange={handleChange}/>
          <p class="mt-3 ml-4 text-red-500 font-montserrat font-bold leading-normal not-italic">{errorsEdad}</p>
        </div>
        <div class="xl:ml-36 2xl:ml-60">
          <p class="font-montserrat text-xl xl:text-3xl 2xl:text-6xl font-bold leading-normal text-lightBlue">Género</p>
          <div class="flex mt-10">
            <div class="flex mr-4 2xl:mr-24">
              <input type="radio" id="hombre" name="genero" value="hombre" onChange={handleChange} class="xl:w-4 xl:h-4 2xl:w-8 2xl:h-8 cursor-pointer"/>
              <label htmlFor="hombre"></label>
              <span class="ml-2 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Hombre</span>
            </div>
            <div class="flex items-center">
              <input type="radio"  name="genero" value="mujer" onChange={handleChange} class="xl:w-4 xl:h-4 2xl:w-8 2xl:h-8  cursor-pointer" />
              <label htmlFor="mujer"></label>
              <span class="ml-2 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Mujer</span>
              <p class="mt-3 ml-4 text-red-500 font-montserrat font-bold leading-normal not-italic">{errorsGenero}</p>
            </div>
          </div>
        </div>
      </div>
    </form>

      <div class="bottom-0 left-0 right-0 flex justify-center">
        <ButtonFormIa enabled={!!valueInput.enabled} keyValuePairs={[{edad:valueInput.edad}, {genero:valueInput.genero}]} />
      </div>
    </div>
  );
}

export default PageTwo;

