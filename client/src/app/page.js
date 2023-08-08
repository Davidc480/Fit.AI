export default function Home() {
  return (
    <main className="w-screen h-screen shrink-0 flex-col items-center justify-center p-24 bg-gradient-radial">
      <div class="float-right mt-40">
        <div class="inline-flex flex-col items-center">
          <h1>
            <span class="font-inter text-white text-[6.20713rem] font-bold leading-normal ">
              ¡Bienvenido a
            </span>
            {"  "}
            <span class="font-inter text-[#C5356F] text-[6.8605rem] font-bold leading-normal ">
              {"  "}
              Fit.AI!
            </span>
          </h1>
          <p class="text-white mb-2 font-montserrat text-[1.875rem] font-bold leading-normal mt-32">
            "El camino hacia el éxito en el fitness comienza con el
          </p>
          <p class="text-white mb-2 font-montserrat text-[1.875rem] font-bold leading-normal">
            primer paso que das fuera de tu zona de confort."
          </p>
          <button class="w-[22.74456rem] h-[3.75rem] rounded-[2.69019rem] bg-[#4F81FF] text-white font-montserrat text-2xl font-normal leading-normal mt-36">
            Comienza ahora
          </button>
        </div>
      </div>
    </main>
  );
}
