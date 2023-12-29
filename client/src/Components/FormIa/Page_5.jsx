import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageFive = ()=>{
    return(
        <div class="flex flex-col relative h-full p-5">
            <div class="2xl:w-[90rem]"> 
                <p class="font-montserrat text-xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal text-center text-lightBlue">¿Tienes algún plazo específico para alcanzar tus objetivos?</p>
            </div>
            <div class="flex mt-8 xl:mt-14 2xl:mt-24 ml-14 xl:ml-20 gap-10">
                <div>
                    <input type="radio" name="plazo" class="cursor-pointer mr-2 xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                    <label htmlFor="plazo" class="font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Sí</label>
                </div>
                <div class="-translate-y-1 xl:-translate-y-2 2xl:-translate-y-3">
                    <label class="mr-2 2xl:mr-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">¿Cuál?</label>
                    <input type="number"  class="no-spinners -translate-y-1  text-center w-20  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                    <label class="ml-3 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Meses</label>
                </div>
            </div>
            <div class="ml-14 xl:ml-20 mt-5 2xl:mt-8">
                <input type="radio" name="plazo" class="cursor-pointer mr-2 xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                <label htmlFor="plazo" class="font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">No, Dejar que la IA defina el tiempo para alcanzar mi objetivo.</label>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageFive;