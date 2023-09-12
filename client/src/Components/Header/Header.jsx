

const Header = ()=>{
    return (
        <div class="inline-flex flex-col items-center">
          <h1>
            <span class="font-inter text-white text-[4.7605rem] font-bold leading-normal ">
              ¡Bienvenido a
            </span>
            {"  "}
            <span class="font-inter text-[#C5356F] text-[4.9605rem] font-bold leading-normal ">
              {"  "}
              Fit.AI!
            </span>
          </h1>
          <p class="text-white mb-2 font-montserrat text-[1.25rem] font-bold leading-normal mt-16">
            "El camino hacia el éxito en el fitness comienza con el
          </p>
          <p class="text-white mb-2 font-montserrat text-[1.25rem] font-bold leading-normal">
            primer paso que das fuera de tu zona de confort."
          </p>
          <button class="w-[16rem] h-[3rem] rounded-[2.69019rem] bg-[#4F81FF] text-white font-montserrat text-xl font-normal leading-normal mt-20">
            Comienza ahora
          </button>
        </div>
    )

}

export default Header