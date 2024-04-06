import CreditCards from "@/components/CreditCards";
import Deserve from "@/components/Deserve";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NotEveryOne from "@/components/NotEveryOne";
import Upgrade from "@/components/Upgrade";
import Rewards from "@/components/Rewards";
import DataSafety from "@/components/DataSafety";
import Rating from "@/components/Rating";
import GetsIt from "@/components/GetsIt";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
      <NotEveryOne />
      <Deserve />
      <CreditCards />
      <Upgrade />
      <Rewards />
      <DataSafety />
      <Rating />
      <GetsIt />
    </main>
  );
}
