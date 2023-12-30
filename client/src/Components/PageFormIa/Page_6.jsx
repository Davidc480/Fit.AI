import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageSix = ()=>{
    return(
        <div class="flex flex-col relative h-full p-5 ">
            <div class="xl:flex xl:translate-x-7 2xl:translate-x-0">
                <div class="xl:w-[25rem] 2xl:w-[43rem]">
                    <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-center text-lightBlue">¿Cuantos dias a la semana puedes entrenar?</p>
                    <div class="flex items-end justify-center mt-4 xl:mt-6 2xl:mt-12">
                        <input type="number"  class="no-spinners 2xl:w-32 -translate-y-1  text-center w-20  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                        <label class="ml-3 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Días</label>
                    </div>
                </div>
                <div class="mt-8 xl:mt-0 xl:w-[30rem] 2xl:w-[58rem]">
                    <p class="font-montserrat text-xl xl:tex2xl 2xl:text-5xl not-italic font-bold leading-normal text-center text-lightBlue">¿Cuánto tiempo libre tienes para hacer ejercicio cada día?</p>
                    <div class="flex items-end justify-center mt-4 xl:mt-6 2xl:mt-12">
                        <input type="number"  class="no-spinners 2xl:w-32 -translate-y-1  text-center w-20  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-4xl" />
                        <label class="ml-3 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Minutos</label>
                    </div>
                </div>
            </div>
            <div>
                <div class=" translate-y-8 xl:translate-y-12 2xl:translate-y-4 2xl:mt-24">
                <p class="font-montserrat text-xl xl:text-2xl 2xl:text-6xl not-italic font-bold leading-normal text-center text-lightBlue">¿Donde prefieres entrenar?</p>
                    <div class="flex justify-center mt-4 xl:mt-8 2xl:mt-16 ml-8">
                        <input type="radio" name="entrenamiento" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8" />
                        <label htmlFor="entrenamiento" class="ml-2 mr-8 xl:mr-20 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal ">Casa</label>
                        <input type="radio" name="entrenamiento" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8"/>
                        <label htmlFor="entrenamiento" class="ml-2 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal ">Gimnasio</label>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageSix;