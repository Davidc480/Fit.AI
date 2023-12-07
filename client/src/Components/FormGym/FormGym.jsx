'use client'

import { useState } from 'react';

const FormGym = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
        return (
    
      
        <div>
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
        )
}

export default FormGym;