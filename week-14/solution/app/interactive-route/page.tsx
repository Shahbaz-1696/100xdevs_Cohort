"use client";
import { useState } from "react";

export default function InteractiveRoute() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-20 max-w-screen-sm">
        <div className="text-2xl font-bold p-1">
          Welcome to Interactive Page
        </div>
        <div className="mt-8 py-2 text-lg">
          <div className="p-2">
            This route features a count button that demonstrates the power of
            client-side interactivity in Next.js. Click the button and see the
            count go up! This interactive feature is powered by the `use client`
            directive in Next.js, which allows this component to be rendered on
            the client-side.
          </div>
          <div className="py-5 px-2">
            <button
              className="border-2 p-3 border-black rounded-xl"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
