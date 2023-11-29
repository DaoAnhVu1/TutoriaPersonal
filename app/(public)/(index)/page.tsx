import Header from "@/components/header";
import Hero from "@/components/homePageComponents/hero";
import CardsDisplay from "@/components/homePageComponents/cards-display";
import SetApartDisplay from "@/components/homePageComponents/set-apart-display";
import Footer from "@/components/footer";
import { getServerSession } from "next-auth";

const HomePage = async () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardsDisplay />
      <SetApartDisplay />
      <Footer />
    </div>
  );
};

export default HomePage;
