import FormNewsletter from "@/Components/FormNewsletter/FormNewsletter"

const Newsletter = ()=>{
    return (
        <div class="text-white text-center font-montserrat mb-36 2xl:mb-0">
            <div>
                <p class="text-3xl xl:text-5xl 2xl:text-6xl not-italic font-bold leading-normal inline relative">SUSCRÍBETE
                <span class="absolute w-1/2 h-1 2xl:h-2 bg-darkGreen bottom-[-0.5rem] 2xl:bottom-[-0.8rem] left-1/4"></span>
                </p>
            </div>
            <div class="mt-10 xl:mt-14 2xl:mt-16 max-w-[22rem] xl:max-w-[70rem] 2xl:max-w-7xl mx-auto text-center">
                 <p class="text-base xl:text-2xl 2xl:text-3xl">¡Únete a nuestra newsletter semanal en FitAI y descubre un mundo de bienestar! Recibe consejos, dietas personalizadas y mucho más para alcanzar tus metas fitness. ¡Únete a nuestra comunidad saludable hoy mismo y comienza a transformar tu vida!</p>
            </div>
            <div>
                <FormNewsletter />
            </div>
        </div>
    )
}

export default Newsletter;

