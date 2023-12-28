"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "@/Components/Header/Header";
import Carrousel from "@/Components/Carrousel/Carrousel";
import CarrouselW from "@/Components/Carrousel/CarrouselW";
import RouteCard from "@/Components/RouteCard/RouteCard";
import Newsletter from "@/Components/Newsletter/Newsletter";
import imgMans from "@/app/img/imgMan";
import imgWomans from "./img/imgWomans";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <Provider store={store}>
      <main class="w-full h-full 2xl:h-screen shrink-0 flex-col items-center justify-center bg-gradient-radial  ">
        <div class="xl:float-right xl:mt-12 xl:p12">
          <Header />
        </div>

        <div class="h-full flex items-center justify-center pt-8 pl-4 xl:pl-8 2xl:pl-20 2xl:pt-4">
          <div class="">
            <Carrousel images={imgMans} />
          </div>
          <div class="">
            <CarrouselW images={imgWomans} />
          </div>
        </div>
        <div class="w-full h-5/6 2xl:h-[37rem] flex flex-col clearfix xl:flex-row items-center justify-center bg-gradient-to-b from-[#090927d9] to-black p-20">
          <div class="xl:mb-32">
            <RouteCard />
          </div>
        </div>
        <div class="w-full h-full 2xl:h-[43rem] shrink-0 flex flex-col items-center justify-center bg-gradient-radial">
          <Newsletter />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </Provider>
  );
}

// export default function Home() {
//   return (
//     <Provider store={store}>
//       <main class="w-full h-full shrink-0 flex-col items-center justify-center bg-gradient-radial">
//         <div class=" float-right mt-12 p-12">
//           <Header />
//         </div>
//         <div class="h-full flex">
//           <div class="w-1/2 pt-6 pl-8">
//             <Carrousel images={imgMans} />
//           </div>
//           <div class="w-1/2 pt-10 pl-6">
//             <CarrouselW images={imgWomans} />
//           </div>
//         </div>
//         <div class="w-full h-5/6 float flex-col items-center justify-center bg-gradient-to-b from-[#090927d9] to-black p-20">
//           <div class="ml-[14%]">
//             <RouteCard />
//           </div>
//         </div>
//         <div class="w-full h-full shrink-0 flex-col items-center justify-center bg-gradient-radial">
//           <Newsletter />
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </main>
//     </Provider>
//   );
// }
