import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageThree = ()=>{
    return(
        <div class="flex flex-col relative h-full 2xl:-mt-10 p-5 text-white">
            <div> 
                <div class="flex flex-col xl:flex-row ml-8">
                    <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-lightBlue">Estatura</p>
                    <div class="flex items-end xl:-translate-x-24 2xl:-translate-x-48 xl:translate-y-7 2xl:translate-y-16">
                        <input type="number" id="estatura" class="no-spinners text-center w-14 xl:w-24 2xl:w-32  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" />
                        <input type="number" id="estatura" class="no-spinners text-center w-20 xl:w-32 2xl:w-36 ml-4  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" />
                        <label htmlFor="estatura" class="translate-x-4 xl:text-2xl 2xl:text-4xl">Cm</label>
                    </div>
                    <div class="w-56 2xl:w-[30rem] mt-8 xl:mt-0 xl:ml-12">
                    <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl not-italic font-bold leading-normal text-lightBlue">Peso</p>
                    <div class="mr-6 flex items-end xl:translate-y-7 2xl:translate-y-16">
                        <input type="number" id="kilos" class="no-spinners  text-center w-full  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" placeholder="Ingrese su peso"/>
                        <label htmlFor="kilos" class="translate-x-4 xl:text-2xl 2xl:text-4xl">Kg</label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 xl:mt-20 2xl:mt-40 flex flex-col items-center">
                <div class="2xl:w-[58rem]">
                    <p class="text-center items-center font-montserrat text-lg xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal text-lightBlue">¿Tienes alguna condición médica relevante? (Problemas cardíacos, lesiones, etc.)</p>
                </div>
                <div class="mt-8 ml-8 xl:mt-10 xl:ml-20 2xl:mt-16">
                    <input type="radio" name="ninguna" value="ninguna" class="cursor-pointer xl:w-4 xl:h-4 2xl:w-8 2xl:h-8"/>
                    <label htmlFor="ninguna" class="ml-4 2xl:ml-8 font-montserrat text-sm xl:text-2xl 2xl:text-4xl not-italic font-semibold leading-normal">Ninguna</label>
                    <input type="text" id="estatura" placeholder="Describala" class="ml-6 xl:ml-20 no-spinners w-48 xl:w-[44rem] bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-lg xl:text-2xl 2xl:text-5xl" />
                </div>
            </div>
            <div class=" bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageThree;