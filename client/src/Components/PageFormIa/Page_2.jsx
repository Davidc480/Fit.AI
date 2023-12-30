import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageTwo = () => {
  return (
    <div class="flex flex-col justify-center h-full p-5 text-white">
      <p class="text-center font-inter 2xl:-translate-y-24 text-2xl xl:text-4xl 2xl:text-6xl font-bold leading-normal mb-12 2xl:mb-0">
        ¡Felicidades! ahora estás a un <span className="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span>
      </p>

      <div class="flex flex-col xl:flex-row xl:translate-x-16 2xl:translate-x-24">
        <div class="mb-6 xl:mb-0 xl:w-[32rem] 2xl:w-[42.5rem]">
          <p class="font-montserrat text-xl xl:text-2xl 2xl:text-5xl font-bold leading-normal mb-4 text-lightBlue">Edad</p>
          <input type="number" class="no-spinners w-full  bg-transparent border-b-2 xl:border-b-4 border-b-white focus:ring-0 focus:outline-none text-xl xl:text-2xl 2xl:text-5xl" placeholder="Ingrese su edad"/>
        </div>
        <div class="xl:ml-36 2xl:ml-60">
          <p class="font-montserrat text-xl xl:text-3xl 2xl:text-6xl font-bold leading-normal text-lightBlue">Género</p>
          <div class="flex mt-10">
            <div class="flex mr-4 2xl:mr-24">
              <input type="radio" id="hombre" name="genero" value="hombre" class="xl:w-4 xl:h-4 2xl:w-8 2xl:h-8 cursor-pointer"/>
              <label htmlFor="hombre"></label>
              <span class="ml-2 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Hombre</span>
            </div>
            <div class="flex items-center">
              <input type="radio"  name="genero" value="mujer" class="xl:w-4 xl:h-4 2xl:w-8 2xl:h-8  cursor-pointer" />
              <label htmlFor="mujer"></label>
              <span class="ml-2 2xl:ml-4 font-montserrat text-sm xl:text-base 2xl:text-3xl font-bold leading-normal">Mujer</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-full absolute bottom-5 xl:relative xl:bottom-auto">
        <ButtonFormIa />
      </div>
    </div>
  );
}

export default PageTwo;

