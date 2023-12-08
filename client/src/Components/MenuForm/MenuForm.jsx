import Link from "next/link";



const MenuForm = ()=>{
    return(
        <div>
            <div class="w-32 h-14 shrink-0 text-[#C5356F] font-inter text-5xl not-italic font-bold leading-normal absolute top-9 left-14">
                <Link href="/">FitAI</Link>
            </div>
            <div class="w-32 h-14 shrink-0 text-[#C5356F] text-center font-inter text-5xl not-italic font-bold leading-normal absolute top-24 right-28 transform hover:scale-125 transition-all duration-300 hover:-rotate-12">
            <Link href="/">X</Link>
            </div>
        </div>
    )
}
export default MenuForm;