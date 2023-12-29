'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa"


const PageOne = () =>{
    return (
        <div class="flex flex-col relative h-full p-5">
        <div class="text-center text-white font-inter text-2xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal mt-24 xl:mt-12">
                    <p>¡Felicidades! ahora estas a un <span class="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span></p>
                </div>
                <div class="mt-10 xl:mt-12 2xl:mt-24">
                    <p class=" text-left mb-12 2xl:mb-22 font-montserrat text-3xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal">Nombre</p>
                </div>
                <div>
                    <form >
                        <div >
                            <input type="text" class="w-full bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none xl:text-2xl 2xl:text-4xl" placeholder="Ingrese su nombre"/>
                        </div>
                    </form>
                </div>
                <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
                </div>
        </div>
    )
}

export default PageOne