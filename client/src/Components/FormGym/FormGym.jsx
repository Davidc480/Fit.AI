'use client'

import { useState } from 'react';
import MenuForm from '../MenuForm/MenuForm'
import PageOne from '../FormIa/PageOne';
import PageTwo from '../FormIa/PageTwo';
import { useSelector } from 'react-redux';


const FormGym = () => {
    const currentPage = useSelector(state => state.currentPage)

    // const [currentPag5e, setCurrentPage] = useState(1);

    // const nextPage = () => setCurrentPage(currentPage + 1);
    // const prevPage = () => setCurrentPage(currentPage - 1);
        return (
    
      
        <div class=" text-white w-full h-full flex flex-col items-center justify-center ">
            <div>
                <MenuForm />
            </div>

            <div >

          {currentPage === 1 && (
              <div>
                <PageOne />
            </div>
          )}
          {currentPage === 2 && (
              <div>
                <PageTwo />
            </div>
          )}
          {/* Agrega más bloques para cada página adicional */}
          </div>
        </div>
        )
}

export default FormGym;