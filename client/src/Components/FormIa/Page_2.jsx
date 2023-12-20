import ButtonFormIa from "../ButtonFormIa/ButtonFormIa";

const PageTwo = ()=>{
    return(
        <div class="flex flex-col relative h-full p-5">
            <div> 
                <h1>Página 2</h1>
            </div>
            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                    <ButtonFormIa />
            </div>
        </div>
    )
}

export default PageTwo;