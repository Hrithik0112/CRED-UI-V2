import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
    </main>
  );
}
