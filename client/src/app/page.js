import Header from "@/Components/Header/Header";
import Carrousel from "@/Components/Carrousel/Carrousel";
import imgMans from "@/app/img/imgMan";

export default function Home() {
  return (
    <main className="w-screen h-screen shrink-0 flex-col items-center justify-center p-24 bg-gradient-radial">
      <div class="float-right mt-40">
        <Header />
      </div>
      <div>
        <Carrousel images={imgMans} />
      </div>
    </main>
  );
}
