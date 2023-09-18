import FormNewsletter from "@/Components/FormNewsletter/FormNewsletter"

const Newsletter = ()=>{
    return (
        <div class="text-white text-center font-montserrat p-36">
            <div>
                <h4 class=" text-5xl not-italic font-bold leading-normal inline relative">SUSCRÍBETE
                <span class="absolute w-1/2 h-1 bg-blue-600 bottom-[-0.3rem] left-1/4"></span>
                </h4>
            </div>
            <div class="mt-16">
                <p class="text-2xl">¡Únete a nuestra newsletter semanal en FitAI y descubre un mundo de bienestar!</p>
                <p class="text-2xl">Recibe consejos, dietas personalizadas y mucho más para alcanzar tus metas </p>
                <p class="text-2xl">fitness. ¡Únete a nuestra comunidad saludable hoy mismo y comienza a </p>
                <p class="text-2xl">transformar tu vida!</p>
            </div>
            <div>
                <FormNewsletter />
            </div>
        </div>
    )
}

export default Newsletter