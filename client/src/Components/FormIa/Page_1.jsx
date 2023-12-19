'use client'

import ButtonFormIa from "../ButtonFormIa/ButtonFormIa"


const PageOne = () =>{
    return (
        <div>
        <div class="max-w-xl xl:max-w-[70rem] mx-auto text-center text-white font-inter text-2xl xl:text-4xl not-italic font-bold leading-normal mt-24">
                    <p>¡Felicidades! ahora estas a un <span class="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span></p>
                </div>
                <div class="ml-10 mt-10 xl:mt-24">
                    <p class=" mb-12 font-montserrat text-3xl xl:text-4xl not-italic font-bold leading-normal">TU NOMBRE</p>
                </div>
                <div>
                    <form>
                        <div>
                            <input type="text" class="ml-10 w-full bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none xl:text-4xl" placeholder="Tu nombre aquí"/>
                        </div>
                    </form>
                </div>
                <div class="text-center">
                    {/* <button class="mt-20 w-40 h-10 shrink-0 rounded-[2rem] bg-darkGreen transform hover:scale-110 duration-300" onClick={nextPage}>Siguiente</button> */}
                    <ButtonFormIa />
                </div>
        </div>
    )
}

export default PageOne