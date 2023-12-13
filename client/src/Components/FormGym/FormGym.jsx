'use client'

import { useState } from 'react';
import MenuForm from '../MenuForm/MenuForm'


const FormGym = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
        return (
    
      
        <div class=" text-white w-full flex-grow flex items-center justify-center ">
            <div>
                <MenuForm />
            </div>

            <div >

          {currentPage === 1 && (
              <div>
                <div class="flex text-white font-inter text-6xl not-italic font-bold leading-normal -mt-48">
                    <p class="-ml-6 mr-2">¡Felicidades! ahora estas a un</p>
                    <p class="mr-2 text-darkRose">paso</p>
                    <p class="mr-2">más cerca de tu</p>
                    <p class=" text-darkRose">meta</p>
                </div>
                <div class="mt-24">
                    <p class="font-montserrat text-6xl not-italic font-bold leading-normal">TU NOMBRE</p>
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