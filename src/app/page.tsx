import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrackRecord } from "@/components/TrackRecord";
import { DealBox } from "@/components/DealBox";
import { Portfolio } from "@/components/Portfolio";
import { ForBrokers } from "@/components/ForBrokers";
import { Submit } from "@/components/Submit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrackRecord />
        <DealBox />
        <Portfolio />
        <ForBrokers />
        <Submit />
      </main>
      <Footer />
    </>
  );
}
