import Link from "next/link";
import ButtonX from "../ButtonX/ButtonX";



const MenuForm = ()=>{
    return(
        <div>
            <div class="w-32 h-14 shrink-0 text-darkRose font-inter text-4xl xl:text-5xl not-italic font-bold leading-normal absolute top-6 xl:top-9 left-9 xl:left-14">
                FitAI
            </div>
            <div>
                <ButtonX />
            </div>
        </div>
    )
}
export default MenuForm;
