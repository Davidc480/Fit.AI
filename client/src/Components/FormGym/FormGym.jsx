'use client'

import { useState } from 'react';
import MenuForm from '../MenuForm/MenuForm'
import Footer from '../Footer/Footer';

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
              <h1>Página 1</h1>
              {/* Contenido de la primera página */}
              <button onClick={nextPage}>Siguiente</button>
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