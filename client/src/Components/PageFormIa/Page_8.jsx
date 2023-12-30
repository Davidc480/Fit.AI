import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageEight = ()=>{
    return(
        <div class="flex flex-col relative h-full p-5">
            <div class="xl:mt-12 2xl:mt-20 flex flex-col items-center xl:translate-y-5 2xl:translate-y-8">
                <div class="2xl:w-[102rem]">
                    <p class="text-center items-center font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-semibold leading-normal text-lightBlue">¿Tiene alguna lesión importante?</p>
                </div>
                <div class="mt-8 ml-8 xl:mt-10 xl:ml-20 2xl:mt-16">
                    <input type="radio" name="ninguna" value="ninguna" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8"/>
                    <label htmlFor="ninguna" class="ml-4 2xl:ml-8 font-montserrat text-sm xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal">Ninguna</label>
                    <input type="text" id="estatura" placeholder="Describala" class="ml-6 xl:ml-20 no-spinners w-48 xl:w-[44rem] bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                </div>
            </div>
            <div class="flex flex-col mt-8 xl:mt-14 2xl:mt-20"> 
                <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-center 2xl:mb-8 text-lightBlue mt-8 2xl:mt-20 ">¿Experimentas niveles elevados de estrés en tu vida diaria?</p>
                <div class="flex gap-16 xl:gap-24 2xl:gap-40 items-center justify-center mt-6 xl:mt-8  xl:mb-14 2xl:mb-28 ">
                    <div class="">
                        <input type="radio" name="estres" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="estres" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Sí</label>
                    </div>
                    <div class="">
                        <input type="radio" name="estres" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="estres" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">No</label>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageEight;