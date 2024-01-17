'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";
import { useState, useEffect } from "react";

const PageSeven = ()=>{

    const [valueInput, setValueInput] = useState({enabled: false, actividadFisica: "", preferenciaEjercicios: [],});
    const [isRadioChecked, setIsRadioChecked] = useState(false)
    const [isTextChecked, setIsTextChecked] = useState(false)
    const [error, setError] = useState("")

    const [checkedExerciseOne, setCheckedExerciseOne] = useState(false)
    const [checkedExerciseTwo, setCheckedExerciseTwo] = useState(false)
    const [checkedExerciseThree, setCheckedExerciseThree] = useState(false)
    const [checkedExerciseFour, setCheckedExerciseFour] = useState(false)
    const [checkedExerciseNone, setCheckedExerciseNone] = useState(false)


    const handleExerciseChange = (exercise) => {
        switch(exercise) {
            case 'Cardiovascular':
                setCheckedExerciseOne(prev => !prev);
                setCheckedExerciseNone(false)
                break;
            case 'Levantamiento de pesas':
                setCheckedExerciseTwo(prev => !prev);
                setCheckedExerciseNone(false)
                break;
            case 'Yoga':
                setCheckedExerciseThree(prev => !prev);
                setCheckedExerciseNone(false)
                break;
            case 'Calistenia':
                setCheckedExerciseFour(prev => !prev);
                setCheckedExerciseNone(false)
                break;
            case 'Ninguna':
                if (!checkedExerciseNone) {
                    setCheckedExerciseOne(false);
                    setCheckedExerciseTwo(false);
                    setCheckedExerciseThree(false);
                    setCheckedExerciseFour(false);
                }
                setCheckedExerciseNone(prev => !prev);
                break;
            default:
                return;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const startsWithLetterRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*/;

        if(name === "text"){
            if(startsWithLetterRegex.test(value)){
                setValueInput(prevState => ({...prevState, actividadFisica: value}))
                setIsRadioChecked(false)
                setError("")
            } else {
                setError("Porfavor ingresa un deporte valido.")
            }
        }

        if(name === "ningunDeporte"){
                setValueInput(prevState=>({...prevState, actividadFisica: value}))
        }

    if(name === "Cardiovascular"){
        if(!checkedExerciseOne){
            if(!valueInput.preferenciaEjercicios.includes("Cardiovascular")){
                setValueInput(prevState=>({...prevState, preferenciaEjercicios: [...prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Ninguna"), "Cardiovascular"] }))
            }
        } else {
                setValueInput(prevState =>({...prevState, preferenciaEjercicios: prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Cardiovascular")}))
        }
    }

    if(name === "Levantamiento de pesas"){
        if(!checkedExerciseTwo){
            if(!valueInput.preferenciaEjercicios.includes("Levantamiento de pesas")){
                setValueInput(prevState=>({...prevState, preferenciaEjercicios: [...prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Ninguna"), "Levantamiento de pesas"] }))
            }
        } else {
                setValueInput(prevState =>({...prevState, preferenciaEjercicios: prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Levantamiento de pesas")}))
        }
    }

    if(name === "Yoga"){
        if(!checkedExerciseThree){
            if(!valueInput.preferenciaEjercicios.includes("Yoga")){
                setValueInput(prevState=>({...prevState, preferenciaEjercicios: [...prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Ninguna"), "Yoga"] }))
            }
        } else {
                setValueInput(prevState =>({...prevState, preferenciaEjercicios: prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Yoga")}))
        }
    }
    
    if(name === "Calistenia"){
        if(!checkedExerciseFour){
            if(!valueInput.preferenciaEjercicios.includes("Calistenia")){
                setValueInput(prevState=>({...prevState, preferenciaEjercicios: [...prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Ninguna"), "Calistenia"] }))
            }
        } else {
                setValueInput(prevState =>({...prevState, preferenciaEjercicios: prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Calistenia")}))
        }
    }

    if(name === "Ninguna"){
        if(!checkedExerciseNone){
            if(!valueInput.preferenciaEjercicios.includes("Ninguna")){
                setValueInput(prevState=>({...prevState, preferenciaEjercicios: ["Ninguna"] }))
            }
        } else {
                setValueInput(prevState =>({...prevState, preferenciaEjercicios: prevState.preferenciaEjercicios.filter(ejercicio => ejercicio !== "Ninguna")}))
        }
    }   
}

    useEffect(() => {

        const name = document.getElementById("text").value;

        if (valueInput.actividadFisica && valueInput.preferenciaEjercicios ) {
          setValueInput(prevState => ({ ...prevState, enabled: true }));
        } else {
          setValueInput(prevState => ({ ...prevState, enabled: false }));
        }
        if(isTextChecked){
            document.getElementById("text").value = "";
            setError("")
        }
        if(!isRadioChecked && name === ""){
            setValueInput(prevState=>({...prevState, actividadFisica: ""}))
        }
      }, [isTextChecked, valueInput.actividadFisica, valueInput.preferenciaEjercicios, ]);



      const handleSubmit = (e)=>{
        e.preventDefault;
      }

    return(
        <div class="flex flex-col relative h-full p-5 ">
        <form onSubmit={handleSubmit}>
            <div class="mt-10 xl:mt-12 2xl:mt-20 flex flex-col items-center">
                <div class="2xl:w-[102rem]">
                    <p class="text-center items-center font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-semibold leading-normal text-lightBlue">¿Practicas alguna actividad física adicional? (Deportes, yoga, etc.)</p>
                </div>
                <div class="mt-8 ml-8 xl:mt-10 xl:ml-20 2xl:mt-16">
                    <input type="radio" name="ningunDeporte" value="ninguna" onChange={handleChange} checked={isRadioChecked} onClick={()=>{setIsRadioChecked(!isRadioChecked); !isRadioChecked ? setIsTextChecked(true) : setIsTextChecked(false)}} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8"/>
                    <label htmlFor="ninguna" class="ml-4 2xl:ml-8 font-montserrat text-sm xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal">Ninguna</label>
                    <input type="text" name="text" id="text" onChange={handleChange} disabled={isTextChecked} placeholder="Describala" class="ml-6 xl:ml-20 no-spinners w-48 xl:w-[44rem] bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                </div>
                <label class="mt-2 mr-24 text-red-500 font-montserrat font-bold leading-normal not-italic">{error}</label>
            </div>
            <div class="flex flex-col mt-2 xl:translate-y-7"> 
                <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-center 2xl:mb-8 text-lightBlue mt-8 2xl:mt-20 ">¿Tienes alguna preferencia por ciertos tipos de ejercicio?</p>
                <div class="xl:flex xl:gap-9 xl:items-center xl:justify-center mt-4 xl:mt-10  mb-8 xl:mb-14 2xl:mb-28 ml-10">
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="checkbox" name="Cardiovascular" onChange={handleChange} checked={checkedExerciseOne} onClick={() => handleExerciseChange('Cardiovascular')} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Cardiovascular</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="checkbox" name="Levantamiento de pesas" onChange={handleChange} checked={checkedExerciseTwo} onClick={() => handleExerciseChange('Levantamiento de pesas')} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Levantamiento de pesas</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="checkbox" name="Yoga" onChange={handleChange} checked={checkedExerciseThree} onClick={() => handleExerciseChange('Yoga')} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Yoga</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="checkbox" name="Calistenia" onChange={handleChange} checked={checkedExerciseFour} onClick={() => handleExerciseChange('Calistenia')} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Calistenia</label>
                    </div>
                    <div class="flex justify-start">
                        <input type="checkbox" name="Ninguna" onChange={handleChange} checked={checkedExerciseNone} onClick={() => handleExerciseChange('Ninguna')} class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Ninguna</label>
                    </div>
                </div>
            </div>
        </form>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa enabled={!!valueInput.enabled} keyValuePairs={[{actividadFisica: valueInput.actividadFisica}, {preferenciaEjercicios: valueInput.preferenciaEjercicios}]} />
            </div>
        </div>
    )
}

export default PageSeven;