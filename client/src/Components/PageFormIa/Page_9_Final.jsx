'use client'

import { useSelector } from 'react-redux';
import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageNineEnd = ()=>{

    const userInfo = useSelector((state) => state.userInfo);

    return(
        <div>
            <div>
                <p>Name: {userInfo.name}</p>
                <p>edad: {userInfo.edad}</p>
                <p>genero: {userInfo.genero}</p>
                <p>estatura: {userInfo.estatura}</p>
                <p>peso: {userInfo.peso}</p>
                <p>condición Medica {userInfo.condicionMedica}</p>
                <p>objetivo: {userInfo.objetivo}</p>
                <p>nivel Experiencia: {userInfo.nivelExperiencia}</p>
                <p>plazo: {userInfo.plazo}</p>
                <p>dias Entrenamiento: {userInfo.diasEntrenamiento}</p>
                <p>tiempo Libre: {userInfo.tiempoLibre}</p>
                <p>preferencia Entrenamiento: {userInfo.preferenciaEntrenamiento}</p>
                <p>Actividad fisica: {userInfo.actividadFisica}</p>
                <p>preferencia Ejercicios: {userInfo.preferenciaEjercicios}</p>
                <p>lesion: {userInfo.lesion}</p>
                <p>estres: {userInfo.estres}</p>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
        
    )
}

export default PageNineEnd;



// <div class="w-[100vh] min-h-full flex flex-col justify-center items-center">
// <div> 
//     <p class="text-lightBlue mb-[25px] font-inter text-4xl spac not-italic font-extrabold leading-normal animate-bounceFour">TU PLAN SE ESTA CREANDO...</p>
// </div>
// {/* loading */}
// <div class="w-full h-auto flex justify-center items-center">
//     {/* line-box */}
//     <div class="p-[2px] w-4/5 h-7 border-2 border-solid border-[#267591] rounded-[20px]">
//         {/* line */}
//         <div class="h-5 rounded-[20px] bg-[#67D295] animate-loading">

//         </div>
//     </div>
// </div>
// </div>