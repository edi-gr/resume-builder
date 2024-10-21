"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { ResumeForm } from "../components/ResumeForm";
import { Resume } from "../components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="col-span-1 lg:col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-1 lg:col-span-3">
            <Resume />
          </div>
        </div>
      </main>
    </Provider>
  );
}