'use client'

import { useState } from 'react';
import MenuForm from '../MenuForm/MenuForm'


const FormGym = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
        return (
    
      
        <div class=" text-white w-full h-full flex flex-col items-center justify-center ">
            <div>
                <MenuForm />
            </div>

            <div >

          {currentPage === 1 && (
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
                    <button class="mt-20 w-40 h-10 shrink-0 rounded-[2rem] bg-darkGreen transform hover:scale-110 duration-300" onClick={nextPage}>Siguiente</button>
                </div>
            </div>
          )}
          {currentPage === 2 && (
              <div>
              <h1>Página 2</h1>
              {/* Contenido de la segunda página */}
              <button onClick={prevPage}>Anterior</button>
              <button onClick={nextPage}>Siguiente</button>
            </div>
          )}
          {/* Agrega más bloques para cada página adicional */}
          </div>
        </div>
        )
}

export default FormGym;

//                 <div class="flex text-white font-inter text-6xl not-italic font-bold leading-normal -mt-48">
//                     <p class="-ml-6 mr-2">¡Felicidades! ahora estas a un</p>
//                     <p class="mr-2 text-darkRose">paso</p>
//                     <p class="mr-2">más cerca de tu</p>
//                     <p class=" text-darkRose">meta</p>
//                 </div>
//                 <div class="mt-24">
//                     <p class="font-montserrat text-6xl not-italic font-bold leading-normal">TU NOMBRE</p>
//                 </div>
//                 <div>
//                     <button onClick={nextPage}>Siguiente</button>
//                 </div>
//             </div>
//           )}
//           {currentPage === 2 && (
//               <div>
//               <h1>Página 2</h1>
//               {/* Contenido de la segunda página */}
//               <button onClick={prevPage}>Anterior</button>
//               <button onClick={nextPage}>Siguiente</button>
//             </div>
//           )}
//           {/* Agrega más bloques para cada página adicional */}
//           </div>
//         </div>
//         )
// }

// export default FormGym;