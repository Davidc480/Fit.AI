"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ResponseForm from "@/Components/ResponseForm/ResponseForm";

export default function responseForm() {
  return (
    <Provider store={store}>
      <div class="w-full h-screen grid grid-rows-[1fr,auto] bg-gradient-radial">
        <div class="w-full h-full flex flex-col items-center justify-center">
          <ResponseForm />
        </div>
      </div>
    </Provider>
  );
}
