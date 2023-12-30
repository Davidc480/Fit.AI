import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageSeven = ()=>{
    return(
        <div class="flex flex-col relative h-full p-5 ">
            <div class="mt-10 xl:mt-12 2xl:mt-20 flex flex-col items-center">
                <div class="2xl:w-[102rem]">
                    <p class="text-center items-center font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-semibold leading-normal text-lightBlue">¿Practicas alguna actividad física adicional? (Deportes, yoga, etc.)</p>
                </div>
                <div class="mt-8 ml-8 xl:mt-10 xl:ml-20 2xl:mt-16">
                    <input type="radio" name="ninguna" value="ninguna" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8"/>
                    <label htmlFor="ninguna" class="ml-4 2xl:ml-8 font-montserrat text-sm xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal">Ninguna</label>
                    <input type="text" id="estatura" placeholder="Describala" class="ml-6 xl:ml-20 no-spinners w-48 xl:w-[44rem] bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                </div>
            </div>
            <div class="flex flex-col mt-2 xl:translate-y-7"> 
                <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-center 2xl:mb-8 text-lightBlue mt-8 2xl:mt-20 ">¿Tienes alguna preferencia por ciertos tipos de ejercicio?</p>
                <div class="xl:flex xl:gap-9 xl:items-center xl:justify-center mt-4 xl:mt-10  mb-8 xl:mb-14 2xl:mb-28 ml-10">
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="radio" name="" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Cardiovascular</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="radio" name="" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Levantamiento de pesas</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="radio" name="" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Yoga</label>
                    </div>
                    <div class="flex justify-start mb-3 xl:mb-0">
                        <input type="radio" name="" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Calistenia</label>
                    </div>
                    <div class="flex justify-start">
                        <input type="radio" name="objetivo" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="objetivo" class="ml-2 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Ninguna</label>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageSeven;