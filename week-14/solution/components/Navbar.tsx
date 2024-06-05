import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center space-x-40 pt-20">
      <Link href={"/"} className="border p-4 rounded-xl border-black">
        Home
      </Link>
      <Link
        href={"/static-route"}
        className="border p-4 rounded-xl border-black"
      >
        Server Page
      </Link>
      <Link
        href={"/interactive-route"}
        className="border p-4 rounded-xl border-black"
      >
        Client Page
      </Link>
    </div>
  );
}
