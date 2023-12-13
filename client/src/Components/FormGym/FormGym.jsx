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
                <div class="max-w-xl mx-auto text-center text-white font-inter text-2xl not-italic font-bold leading-normal -mt-48">
                    <p>¡Felicidades! ahora estas a un <span class="text-darkRose">paso</span> más cerca de tu <span class="text-darkRose">meta</span></p>
                </div>
                <div class="ml-4 mt-24">
                    <p class="font-montserrat text-4xl not-italic font-bold leading-normal">TU NOMBRE</p>
                </div>
                <div>
                    <form>
                        <div>
                            <input type="text" class="ml-4 w-80 bg-transparent  border-b-2 border-b-white focus:ring-0 focus:outline-none" placeholder="Escribe algo aquí"/>
                        </div>
                    </form>
                </div>
                <div>
                    <button onClick={nextPage}>Siguiente</button>
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

// import { useState } from 'react';
// import MenuForm from '../MenuForm/MenuForm'


// const FormGym = () => {
//     const [currentPage, setCurrentPage] = useState(1);

//     const nextPage = () => setCurrentPage(currentPage + 1);
//     const prevPage = () => setCurrentPage(currentPage - 1);
//         return (
    
      
//         <div class=" text-white w-full flex-grow flex items-center justify-center ">
//             <div>
//                 <MenuForm />
//             </div>

//             <div >

//           {currentPage === 1 && (
//               <div>
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