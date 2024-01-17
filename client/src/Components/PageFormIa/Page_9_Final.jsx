'use client'

import { useEffect, useState } from "react";
import Link from "next/link"

const PageNineEnd = () => {

    const [timerActive, setTimerActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimerActive(!timerActive)
            console.log(timerActive);
        }, 11000); // Redirige después de 5 segundos

        return () => clearTimeout(timer);
    }, []);


    return (
        <div class="w-[100vh] min-h-full flex flex-col justify-center items-center">
            <div> 
                <p class="text-lightBlue mb-[25px] font-inter text-4xl spac not-italic font-extrabold leading-normal animate-bounceFour">TU PLAN SE ESTA CREANDO...</p>
            </div>
                {/* loading */}
            <div class="w-full h-auto flex justify-center items-center">
                    {/* line-box */}
                <div class="p-[2px] w-4/5 h-7 border-2 border-solid border-[#267591] rounded-[20px]">
                        {/* line */}
                    <div class="h-5 rounded-[20px] bg-[#67D295] animate-loading">

                    </div>
                </div>
            </div>
            <div class="fixed bottom-72 ">
              {timerActive ?
                <Link href="/responseForm">
                <button class="w-[16rem] 2xl:w-80 h-[3rem] 2xl:h-14 rounded-[2.69019rem] bg-darkRose animate-pulse text-white font-montserrat text-xl 2xl:text-2xl font-normal 
                leading-normal transform hover:scale-105 duration-600 ">
                Ver mi plan
                </button>
                </Link> : null
            }
            </div>
        </div>

    );
};

export default PageNineEnd;




// {/* <div class="w-[100vh] min-h-full flex flex-col justify-center items-center">
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
// </div> */}