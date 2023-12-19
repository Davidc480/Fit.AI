'use client'

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions"; 


const ButtonX = ()=>{
    
    const dispatch = useDispatch()
    const currentPageFormatting = useSelector(state => state.currentPage )

    const formattingPage = () => dispatch(setCurrentPage(currentPageFormatting - currentPageFormatting + 1));

    return(
        <div class=" text-darkRose text-center font-inter text-1xl xl:text-2xl not-italic font-bold leading-normal absolute top-12 xl:top-20 right-14 xl:right-40 transform hover:scale-125 transition-all duration-300 hover:-rotate-12 flex items-center justify-center cursor-pointer">
            <Link class="w-10 xl:w-14 h-10 xl:h-14 border-2 border-darkRose rounded-full flex items-center justify-center" title="Home" onClick={formattingPage} href="/">X</Link>
            </div>
    )
}

export default ButtonX