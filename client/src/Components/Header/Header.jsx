import Link from "next/link"

const Header = ()=>{
    return (
        <div class="p-7 xl:mr-14 xl:mt-14 2xl:mt-48 text-center items-center">
          <h1>
            <span class="font-inter text-white text-5xl font-bold leading-normal 2xl:text-8xl ">
              ¡Bienvenido a
            </span>
            <span class="font-inter text-[#C5356F] text-[4.9605rem] font-bold leading-normal 2xl:text-8xl ">
              {"  "}
              Fit.AI!
            </span>
          </h1>
          <div class=" max-w-xl 2xl:max-w-4xl mx-auto text-center">
          <p class="text-white font-montserrat text-[1.25rem] 2xl:text-3xl font-bold leading-normal mt-12 2xl:mt-28">
            "El camino hacia el éxito en el fitness comienza con el
            primer paso que das fuera de tu zona de confort."
          </p>
          </div>
          <Link href="/form">
            <button class="w-[16rem] 2xl:w-80 h-[3rem] 2xl:h-14 rounded-[2.69019rem] bg-darkGreen text-white font-montserrat text-xl 2xl:text-2xl font-normal leading-normal mt-14 2xl:mt-28 transform hover:scale-105 duration-300 hover:bg-[rgb(0,52,62)]">
            Comienza ahora
            </button>
          </Link>
        </div>
    )
}

export default Header

// const Header = ()=>{
//   return (
//       <div class="inline-flex flex-col items-center">
//         <h1>
//           <span class="font-inter text-white text-[4.7605rem] font-bold leading-normal ">
//             ¡Bienvenido a
//           </span>
//           {"  "}
//           <span class="font-inter text-[#C5356F] text-[4.9605rem] font-bold leading-normal ">
//             {"  "}
//             Fit.AI!
//           </span>
//         </h1>
//         <p class="text-white mb-2 font-montserrat text-[1.25rem] font-bold leading-normal mt-16">
//           "El camino hacia el éxito en el fitness comienza con el
//         </p>
//         <p class="text-white mb-2 font-montserrat text-[1.25rem] font-bold leading-normal">
//           primer paso que das fuera de tu zona de confort."
//         </p>
//         <button class="w-[16rem] h-[3rem] rounded-[2.69019rem] bg-darkGreen text-white font-montserrat text-xl font-normal leading-normal mt-20">
//           <Link href="/form">Comienza ahora</Link>
//         </button>
//       </div>
//   )

// }

// export default Header