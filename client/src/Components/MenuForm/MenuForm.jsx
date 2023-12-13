import Link from "next/link";



const MenuForm = ()=>{
    return(
        <div>
            <div class="w-32 h-14 shrink-0 text-darkRose font-inter text-5xl not-italic font-bold leading-normal absolute top-9 left-14">
                <Link href="/">FitAI</Link>
            </div>
            <div class=" text-darkRose text-center font-inter text-2xl not-italic font-bold leading-normal absolute top-20 right-40 transform hover:scale-125 transition-all duration-300 hover:-rotate-12 flex items-center justify-center cursor-pointer">
            <Link class="w-14 h-14 border-2 border-darkRose rounded-full flex items-center justify-center" title="Home" href="/">X</Link>
            </div>
        </div>
    )
}
export default MenuForm;

// <div class="w-14 h-14 border-2 border-[#C5356F] text-[#C5356F] text-center font-inter text-3xl not-italic font-bold leading-normal absolute top-24 right-28 transform hover:scale-125 transition-all duration-300 hover:-rotate-12 rounded-full flex items-center justify-center">
//   <Link href="/">X</Link>
// </div>
