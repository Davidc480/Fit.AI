import Link from "next/link";



const MenuForm = ()=>{
    return(
        <div>
            <div class="w-32 h-14 shrink-0 text-darkRose font-inter text-4xl xl:text-5xl not-italic font-bold leading-normal absolute top-6 xl:top-9 left-9 xl:left-14">
                FitAI
            </div>
            <div class=" text-darkRose text-center font-inter text-1xl xl:text-2xl not-italic font-bold leading-normal absolute top-12 xl:top-20 right-14 xl:right-40 transform hover:scale-125 transition-all duration-300 hover:-rotate-12 flex items-center justify-center cursor-pointer">
            <Link class="w-10 xl:w-14 h-10 xl:h-14 border-2 border-darkRose rounded-full flex items-center justify-center" title="Home" href="/">X</Link>
            </div>
        </div>
    )
}
export default MenuForm;

{/* <div>
<div class="w-32 h-14 shrink-0 text-darkRose font-inter text-5xl not-italic font-bold leading-normal absolute top-9 left-14">
    <Link href="/">FitAI</Link>
</div>
<div class=" text-darkRose text-center font-inter text-2xl not-italic font-bold leading-normal absolute top-20 right-40 transform hover:scale-125 transition-all duration-300 hover:-rotate-12 flex items-center justify-center cursor-pointer">
<Link class="w-14 h-14 border-2 border-darkRose rounded-full flex items-center justify-center" title="Home" href="/">X</Link>
</div>
</div> */}