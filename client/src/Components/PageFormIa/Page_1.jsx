'use client'

import validatePage_1 from "@/helper/validateForm/validatePage_1";
import ButtonFormIa from "../ButtonFormIa/ButtonFormIa"
import { useState, useEffect } from "react";



const PageOne = () =>{

    const [valueInput, setValueInput] = useState({enabled: false, valueName: "",});
    const [errors, setErrors] = useState("");
    
    const handleChange = (e)=>{

        const { name, value } = e.target;
        if(validatePage_1(value).valid){
            setValueInput(prevState => ({...prevState, valueName: value}))
            setErrors("")
        } else {
            setErrors(validatePage_1(value).error)
            setValueInput({enabled: false, valueName: "",})
        }
        
    }

    useEffect(() => {
        if (valueInput.valueName) {
          setValueInput(prevState => ({ ...prevState, enabled: true }));
        } else {
          setValueInput(prevState => ({ ...prevState, enabled: false }));
        }
      }, [valueInput.valueName]);

      const handleSubmit = (e)=>{
        e.preventDefault();
      }

    return (
        <div class="flex flex-col relative h-full p-5">
        <div class="text-center font-inter text-2xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal mt-24 xl:mt-12">
                    <p class="text-white">¡Felicidades! ahora estas a un <span class="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span></p>
                </div>
                <div class="mt-10 xl:mt-12 2xl:mt-24">
                    <p class=" text-left mb-8 2xl:mb-22 font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-lightBlue">Nombre</p>
                </div>
                <div>
                    <form id="miFormulario" onSubmit={handleSubmit}>
                        <div >
                            <input type="text" class="w-full bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" placeholder="Ingrese su nombre" onChange={handleChange} name="name"/>
                        </div>
                    </form>
                    <div>
                        <p class="mt-3 ml-4 text-red-500 font-montserrat font-bold leading-normal not-italic">{errors}</p>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa enabled={!!valueInput.enabled} keyValuePairs={[{name: valueInput.valueName}]} />
                </div>
        </div>
    )
}

export default PageOne