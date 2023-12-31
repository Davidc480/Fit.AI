import Card from "../Card/Card"

const RouteCard = ()=>{
    return (
        <div class="xl:flex xl:flex-row xl:justify-center xl:items-center xl:space-x-10">
            <div class="mb-4">
                <Card tittle="GYM Y FITNESS" image="https://img.freepik.com/fotos-premium/hombre-mujer-fitness-muscular_262891-52.jpg"/>
            </div>
            <div class="mb-4">
                <Card tittle="YOGA Y SALUD" image="https://img.freepik.com/fotos-premium/mujer-meditando-posicion-yoga-casa-ia-generativa_438099-25214.jpg"/>
            </div>
            <div class="mb-4">
                <Card tittle="NUTRICIÓN" image="https://img.freepik.com/foto-gratis/mujer-comiendo-sano_1428-679.jpg?w=2000"/>
            </div>
        </div>
    )
}

export default RouteCard