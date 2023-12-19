'use client'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from "../../redux/actions"; 


const ButtonFormIa = ()=>{
    const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const nextPage = () => dispatch(setCurrentPage(currentPage + 1));
  const prevPage = () => dispatch(setCurrentPage(currentPage - 1));
    return(
        <div>
            <div>
                {currentPage != 9 &&
                    <button class="mt-20 w-40 h-10 xl:w-72 xl:h-14 xl:text-3xl shrink-0 rounded-[2rem]  bg-darkGreen transform hover:scale-110  hover:text-darkRose duration-700" onClick={nextPage}>Siguiente</button>
                }
            </div>
            <div>
                {currentPage > 1  &&
                    <button class="mt-20 w-40 h-10 shrink-0 rounded-[2rem] bg-darkGreen transform hover:scale-110 duration-300" onClick={prevPage}>Anterior</button>
                }
            </div>
            <div>
                {currentPage >= 9 &&
                    <button class="mt-20 w-40 h-10 shrink-0 rounded-[2rem] bg-darkGreen transform hover:scale-110 duration-300">Finalizar</button>
                }
            </div>
        </div>
        
    )
}

export default ButtonFormIa