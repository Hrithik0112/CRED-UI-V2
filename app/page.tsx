import CreditCards from "@/components/CreditCards";
import Deserve from "@/components/Deserve";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NotEveryOne from "@/components/NotEveryOne";
import Upgrade from "@/components/Upgrade";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between bg-black">
      <Navbar />
      <Hero />
      <NotEveryOne />
      <Deserve />
      <CreditCards />
      <Upgrade />
    </main>
  );
}
