import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full p-6 text-white/95 bg-black/5 flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold">7Grim</h1>
      </div>

      <nav className="flex items-center gap-12 font-semibold uppercase">
        {/* <Link href={"/about"}>About</Link> */}
        <Link href={"/buy"}>
          <button className="bg-white text-black px-8 py-2">BUY NOW</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
