'use client'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, updateUserInfo } from "../../redux/actions"; 


const ButtonFormIa = ({ enabled, keyValuePairs, page })=>{
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.currentPage);
    const state =useSelector((state)=> state.userInfo)

const handleSubmit = () => {
    // console.log(keyValuePairs);
        dispatch(setCurrentPage(currentPage + 1))
        keyValuePairs.forEach(pair => {
            dispatch(updateUserInfo(pair));
          });
        // console.log(state);

};

const prevPage = () => dispatch(setCurrentPage(currentPage - 1));
    return(
        <div class="fixed bottom-24 xl:bottom-24 2xl:bottom-36
        justify-center" >
            <div class="fixed bottom-20 xl:bottom-20 2xl:bottom-36
         justify-center left-8 xl:left-28 z-10" >
                {currentPage >= 2 && currentPage <= 10 && 
                    <button class="w-20 h-8 xl:w-40 xl:h-9 shrink-0 rounded-full xl:rounded-[2rem] text-xs xl:text-xl bg-darkGreen transform hover:-translate-x-4 duration-700 hover:text-darkRose" onClick={prevPage}>← Anterior</button>
                }
            </div>
            <div>
                {currentPage >= 1 && currentPage <= 7 &&
                    <button class="w-32 h-10 xl:w-60 xl:h-12 xl:text-2xl shrink-0 rounded-[2rem]  bg-darkGreen transform hover:scale-105 xl:hover:scale-110  hover:text-darkRose duration-700" onClick={handleSubmit} disabled={!enabled} page={page} >Siguiente</button>
                }
            </div>
            <div >
                {currentPage == 8 &&
                    <button class=" w-32 h-10 xl:w-60 xl:h-12 xl:text-2xl shrink-0 rounded-[2rem]  bg-darkGreen transform hover:scale-105 xl:hover:scale-110  hover:text-darkRose duration-700" onClick={handleSubmit}>Finalizar</button>
                }
            </div>
        </div>
        
    )
}

export default ButtonFormIa;

// disabled={!enabled}