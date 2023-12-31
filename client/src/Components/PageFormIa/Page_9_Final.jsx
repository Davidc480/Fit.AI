

const PageNineEnd = ()=>{
    return(
        <div class="w-[100vh] min-h-full flex flex-col justify-center items-center">
            <div> 
                <p class="text-lightBlue mb-[25px] font-inter text-4xl spac not-italic font-extrabold leading-normal animate-bounceFour">TU PLAN SE ESTA CREANDO...</p>
            </div>
            {/* loading */}
            <div class="w-full h-auto flex justify-center items-center">
                {/* line-box */}
                <div class="p-[2px] w-4/5 h-7 border-2 border-solid border-[#267591] rounded-[20px]">
                    {/* line */}
                    <div class="h-5 rounded-[20px] bg-[#67D295] animate-loading">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNineEnd;