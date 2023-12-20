import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageTwo = ()=>{
    return(
        <div class="flex flex-col relative h-full p-5">
           <div class="text-center text-white font-inter text-2xl xl:text-4xl 2xl:text-6xl not-italic font-bold leading-normal mt-24 xl:mt-12">
                <p>¡Felicidades! ahora estas a un <span class="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span></p>
            </div>
            <div>
                <div>
                    <p>Edad</p>
                </div>
                <div>
                    <input type="number" />
                </div>
            </div>
            <div>
                <div>
                    <p>Genero</p>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageTwo;