'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa"


const PageOne = () =>{
    return (
        <div class="flex flex-col p-5">
        <div class="text-center text-white font-inter text-2xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal mt-24">
                    <p>¡Felicidades! ahora estas a un <span class="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span></p>
                </div>
                <div class="mt-10 xl:mt-24 2xl:mt-36">
                    <p class=" text-left mb-12 2xl:mb-32 font-montserrat text-3xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal">TU NOMBRE</p>
                </div>
                <div>
                    <form >
                        <div >
                            <input type="text" class="w-full bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none xl:text-4xl 2xl:text-6xl" placeholder="Tu nombre aquí"/>
                        </div>
                    </form>
                </div>
                <div class="flex justify-center">
                    <ButtonFormIa />
                </div>
        </div>
    )
}

export default PageOne