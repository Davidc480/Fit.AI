'use client'

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Footer from "@/Components/Footer/Footer";
import FormGym from "@/Components/FormGym/FormGym";

export default function form() {

    return (
    <Provider store={store}>

        <div class="w-full h-screen grid grid-rows-[1fr,auto] bg-gradient-radial">
            <div class="w-full h-full flex flex-col items-center justify-center">
                <FormGym />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </Provider>
    )
}

