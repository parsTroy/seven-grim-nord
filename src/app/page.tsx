import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="space-y-4 text-center mt-20 md:mt-48">
        <h1 className="text-6xl font-bold text-white/45">REDEMPTION AWAITS</h1>
        <p className="text-xl font-bold text-white/65">
          Live the story of the Nordic Fjord
        </p>
      </div>
      <Link className="mt-8" href="/buy">
        <button className="bg-white/15 border-[2px] text-white font-semibold px-4 py-2">
          LEARN MORE
        </button>
      </Link>
    </main>
  );
}
