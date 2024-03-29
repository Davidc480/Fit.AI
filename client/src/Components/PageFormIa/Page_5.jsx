'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";
import { useState, useEffect } from "react";

const PageFive = ()=>{

    const [valueInput, setValueInput] = useState({enabled: false, plazo: "",});
    const [isRadioChecked, setIsRadioChecked] = useState(false)
    const [isTextChecked, setIsTextChecked] = useState(false)
    const [isTextCheckedSi, setIsTextCheckedSi] = useState(false)
    const [error, setError] = useState("")


    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        if(name === "text"){
            if(value >= 3 && value <= 12){
                setValueInput(prevState=>({...prevState, plazo: `Quiero lograr mi objetivo en ${value} meses`}))
                setError("")
            } else {
                setError("El plazo para alcanzar tu objetivo debe estar entre 3 y 12 meses.")
            }
        }
        if(name === "plazo"){
            setValueInput(prevState=>({...prevState, plazo: value}))
            setError("")
        }
    }

    useEffect(() => {
        if (valueInput.plazo) {
          setValueInput(prevState => ({ ...prevState, enabled: true }));
        } else {
          setValueInput(prevState => ({ ...prevState, enabled: false }));
        }
        if(isTextChecked){
            document.getElementById("text").value = "";
            setError("")
        }
        if(isRadioChecked){
            setIsRadioChecked(false)
        }
      }, [valueInput.plazo, isTextChecked]);

      const handleSubmit = (e)=>{
        e.preventDefault();
      }


    return(
        <div class="flex flex-col relative h-full p-5">
          <form onSubmit={handleSubmit} id="miFormulario">
            <div class="2xl:w-[90rem]"> 
                <p class="font-montserrat text-xl xl:text-3xl 2xl:text-6xl not-italic font-bold leading-normal text-center text-lightBlue">¿Tienes algún plazo específico para alcanzar tus objetivos?</p>
            </div>
            <div class="flex mt-8 xl:mt-14 2xl:mt-24 ml-14 xl:ml-20 gap-10">
                <div>
                    <input type="radio" onChange={handleChange} checked={isTextCheckedSi} onClick={()=>{setIsTextCheckedSi(!isTextCheckedSi); isTextCheckedSi ? setIsRadioChecked(false) : null; isTextCheckedSi ?  setIsTextChecked(true): setIsTextChecked(false)}} name="plazo" class="cursor-pointer mr-2 xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                    <label htmlFor="plazo" class="font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Sí</label>
                </div>
                <div class="-translate-y-1 xl:-translate-y-2 2xl:-translate-y-3">
                    <label class="mr-2 2xl:mr-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">¿Cuál?</label>
                    <input type="number" id="text" disabled={isTextChecked} name="text" onChange={handleChange} class="no-spinners -translate-y-1  text-center w-20  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                    <label class="ml-3 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Meses</label>
                </div>
            </div>
            <label class=" ml-20 text-red-500 font-montserrat font-bold leading-normal not-italic">{error}</label>
            <div class="ml-14 xl:ml-20 mt-5 2xl:mt-8">
                <input type="radio" value="Da un plazo acorde a los objetivos y metas del usuario" onChange={handleChange} checked={isRadioChecked} onClick={()=>{ setIsRadioChecked(!isRadioChecked); !isRadioChecked ?  setIsTextChecked(true): setIsTextChecked(false)}} name="plazo" class="cursor-pointer mr-2 xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                <label htmlFor="plazo" class="font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">No, Dejar que la IA defina el tiempo para alcanzar mi objetivo.</label>
            </div>
          </form>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa enabled={!!valueInput.enabled} keyValuePairs={[{plazo: valueInput.plazo}]} />
            </div>
        </div>
    )
}

export default PageFive;