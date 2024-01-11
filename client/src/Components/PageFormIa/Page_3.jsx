'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";
import { useState, useEffect } from "react";
// import { onInputRadio, overwrite } from "@/helper/onInputRadio";

const PageThree = ()=>{

    const [valueInput, setValueInput] = useState({enabled: false, estatura: 0, peso: 0, lesion: "",});
    const [isRadioChecked, setIsRadioChecked] = useState(false)
    const [errorEstatura, setErrorEstatura] = useState("");
    const [errorPeso, setErrorPeso] = useState("");

const handleChange = (e)=>{
    const {name, value} = e.target;

    const estatura1 = document.getElementById('estatura1').value;
    const estatura2 = document.getElementById('estatura2').value;
    
    if (name === "estatura1" || name === "estatura2") {
        if (estatura1 > 0 && estatura1 <= 1 && estatura2 >= 10 && estatura2 <= 90) {
            const valorCombinado = Number(estatura1) + "." + Number(estatura2);
            setValueInput(prevState=>({...prevState, estatura: valorCombinado,}))
            setErrorEstatura("");
        } else {
            setValueInput(prevState=>({...prevState, enabled: false,}))
            setErrorEstatura("Debe ser una estatura valida entre 1.10 cm y 1.90 cm");
        }
    }

    if(name === "peso"){
      if(value >= 20 && value <= 90){
        setValueInput(prevState=>({...prevState, peso: value}))
        setErrorPeso("")
    } else {
        setValueInput(prevState=>({...prevState, enabled: false,}))
        setErrorPeso("Debe ser un peso valido entre 20 Kg y 90 Kg");
      }
    }
    if(name === "ninguna"){
        if(value){
            setValueInput(prevState=>({...prevState, lesion: value}))
            setErrorPeso("")
        }
    }
    if(name === "text"){
        if(value){
            setIsRadioChecked(false)
            setValueInput(prevState=>({...prevState, lesion: value}))
            setErrorPeso("")
        }
    }
}

useEffect(() => {
    if (valueInput.estatura && valueInput.peso && valueInput.lesion) {
      setValueInput(prevState => ({ ...prevState, enabled: true }));
    } else {
      setValueInput(prevState => ({ ...prevState, enabled: false }));
    }
  }, [valueInput.estatura, valueInput.peso, valueInput.lesion]);

    return(
        <div class="flex flex-col relative h-full 2xl:-mt-10 p-5 text-white">
            <div> 
                <div class="flex flex-col xl:flex-row ml-8">
                    <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-lightBlue">Estatura</p>
                    <div class="flex items-end xl:-translate-x-24 2xl:-translate-x-48 xl:translate-y-7 2xl:translate-y-16">
                        <input type="number" id="estatura1" name="estatura1" onChange={handleChange} class="no-spinners text-center w-14 xl:w-24 2xl:w-32  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" />
                        <input type="number" id="estatura2" name="estatura2" onChange={handleChange} class="no-spinners text-center w-20 xl:w-32 2xl:w-36 ml-4  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" />
                        <label htmlFor="estatura" class="translate-x-4 xl:text-2xl 2xl:text-4xl">Cm</label>
                    </div>
                    <div class="w-56 2xl:w-[30rem] mt-8 xl:mt-0 xl:ml-12">
                    <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-lightBlue">Peso</p>
                    <div class="mr-6 flex items-end xl:translate-y-7 2xl:translate-y-16">
                        <input type="number" id="kilos" name="peso" onChange={handleChange} class="no-spinners  text-center w-full  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" placeholder="Ingrese su peso"/>
                        <label htmlFor="kilos" class="translate-x-4 xl:text-2xl 2xl:text-4xl">Kg</label>
                    </div>
                    </div>
                </div>
                <div class="p-4">
                    <label class="mt-20 mr-24 flex justify-end text-red-500 font-montserrat font-bold leading-normal not-italic">{errorPeso}</label>
                    <label class="-mt-5 ml-10 flex justify-start text-red-500 font-montserrat font-bold leading-normal not-italic">{errorEstatura}</label>
                </div>
            </div>                    

            <div class="mt-16 xl:mt-20 2xl:mt-40 flex flex-col items-center">
                <div class="2xl:w-[58rem]">
                    <p class="text-center items-center font-montserrat text-lg xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal text-lightBlue">¿Tienes alguna condición médica relevante? (Problemas cardíacos, lesiones, etc.)</p>
                </div>
                <div class="mt-8 ml-8 xl:mt-10 xl:ml-20 2xl:mt-16">
                    <input type="radio" id="radio" name="ninguna" value="ninguna" checked={isRadioChecked} onClick={() => {setIsRadioChecked(!isRadioChecked); !isRadioChecked ? document.getElementById ("text").value = "" : null ;}} onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8"/>
                    <label htmlFor="ninguna" class="ml-4 2xl:ml-8 font-montserrat text-sm xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal">Ninguna</label>
                    <input type="text" id="text" name="text" onChange={handleChange}  placeholder="Describala" class="ml-6 xl:ml-20 no-spinners w-48 xl:w-[44rem] bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-5xl" />
                </div>
            </div>
            <div class=" bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa enabled={!!valueInput.enabled} keyValuePairs={[{estatura: valueInput.estatura}, {peso: valueInput.peso}, {lesion: valueInput.lesion}]}/>
            </div>
        </div>
    )
}

export default PageThree;