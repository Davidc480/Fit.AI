import Header from "@/Components/Header/Header";
import Carrousel from "@/Components/Carrousel/Carrousel";
import CarrouselW from "@/Components/Carrousel/CarrouselW";
import RouteCard from "@/Components/RouteCard/RouteCard";
import imgMans from "@/app/img/imgMan";
import imgWomans from "./img/imgWomans";

export default function Home() {
  return (
    <main class="w-screen h-screen shrink-0 flex-col items-center justify-center bg-gradient-radial">
      <div class="float-right mt-12 p-12">
        <Header />
      </div>
      <div class="flex">
        <div class="w-1/2 pt-6 pl-8">
          <Carrousel images={imgMans} />
        </div>
        <div class="w-1/2 pt-10 pl-6">
          <CarrouselW images={imgWomans} />
        </div>
      </div>
      <div class="w-screen h-screen float flex-col items-center justify-center bg-black p-20">
        <div class="ml-[14%]">
          <RouteCard />
        </div>
      </div>
    </main>
  );
}
