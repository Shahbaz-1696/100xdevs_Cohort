import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 p-20">
        <div className="text-2xl font-bold p-1">
          Welcome to Home Page
        </div>
        <div className="mt-8 py-2 text-lg">
          <div className="p-1">
            📱 Client Page: Interactive client-side rendering in action
          </div>
          <div className="p-1">
            🚀 Server Page: Optimized static content fro SEO
          </div>
        </div>
      </div>
    </div>
  );
}
