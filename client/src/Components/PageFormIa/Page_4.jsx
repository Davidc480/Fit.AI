'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";
import { useState, useEffect } from "react";

const PageFour = ()=>{

    const [valueInput, setValueInput] = useState({enabled: false, valueObjetivo: "", valueLevel: "",});

    const handleChange = (e) =>{
        const { name, value } = e.target;
        if(name === "objetivo"){
            setValueInput(prevState=>({...prevState, valueObjetivo: value,}))
        }
        if(name === "experiencia"){
            setValueInput(prevState=>({...prevState, valueLevel: value}))
        }
    }

    useEffect(() => {
        if (valueInput.valueObjetivo && valueInput.valueLevel) {
          setValueInput(prevState => ({ ...prevState, enabled: true }));
        } else {
          setValueInput(prevState => ({ ...prevState, enabled: false }));
        }
      }, [valueInput.valueObjetivo, valueInput.valueLevel]);

    return(
        <div class="flex flex-col relative h-full p-5">
            <div class="flex flex-col"> 
                <p class="font-montserrat text-xl xl:text-3xl 2xl:text-6xl not-italic font-bold leading-normal text-center 2xl:mb-8 text-lightBlue">¿Cuál es tu objetivo principal?</p>
                <div class="xl:flex xl:gap-9 xl:items-center xl:justify-center mt-4 xl:mt-10  mb-8 xl:mb-14 2xl:mb-28 ml-10">
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="radio" name="objetivo" value="Perdida de peso" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Pérdida de peso</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="radio" name="objetivo" value="Ganancia muscular" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Ganancia muscular</label>
                    </div>
                <div class="flex justify-start mb-3 xl:mb-0">
                    <input type="radio" name="objetivo" value="Mejora de la energia" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                    <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Mejora de la energía</label>
                </div>
                    <div class="flex justify-start">
                        <input type="radio" name="objetivo" value="Cambio en la figura" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Cambio en la figura</label>
                    </div>
                </div>
            </div>
            <div>
            <p class="font-montserrat text-xl xl:text-3xl 2xl:text-6xl not-italic font-bold leading-normal text-center text-lightBlue">¿Cuál es tu nivel de experiencia entrenando?</p>
                <div class="xl:flex xl:items-center xl:justify-center mt-4 xl:mt-10">
                    <div class="flex items-center justify-center">
                        <div class="mr-9 2xl:mt-8">
                            <input type="radio" name="experiencia" value="Principiante" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                            <label htmlFor="experiencia" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Principiante</label>
                        </div>
                        <div class="2xl:mt-8">
                            <input type="radio" name="experiencia" value="Intermedio" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                            <label htmlFor="experiencia" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Intermedio</label>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-4 xl:mt-0 2xl:mt-6">
                        <input type="radio" name="experiencia" value="Avanzado" onChange={handleChange} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8 xl:ml-9" />
                        <label htmlFor="experiencia" class="ml-2 2xl:mt-3 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Avanzado</label>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa enabled={!!valueInput.enabled} keyValuePairs={[{objetivo: valueInput.valueObjetivo}, {nivelExperiencia: valueInput.valueLevel}]}/>
            </div>
        </div>
    )
}

export default PageFour;