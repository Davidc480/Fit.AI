'use client'

const Card =({tittle, image})=>{
    return (
        <div class="w-[18.375rem] h-[15.36344rem]">
            <img class="w-full h-full object-cover" src={image} alt="" />
            <div class="text-white border border-SlateBlue bg-SlateBlue flex  flex-col justify-center items-center">
                <div class="mt-4 mb-2 font-montserrat text-xl not-italic font-bold leading-normal ">
                    <p>{tittle}</p>
                </div>
                <div class="mb-4 font-montserrat text-xs not-italic font-bold leading-normal">
                    <p class="border-b-2 border-gray-400">Ver mas</p>
                </div>
            </div>
        </div>
    )

}

export default Card;