import Header from "@/components/header";
import Hero from "@/components/homePageComponents/hero";
import CardsDisplay from "@/components/homePageComponents/cards-display";
import SetApartDisplay from "@/components/homePageComponents/set-apart-display";
import Footer from "@/components/footer";
import { currentUser } from "@/lib/current-user";

const HomePage = async () => {
  const current = await currentUser();
  return (
    <div>
      <Header user={current} />
      <Hero />
      <CardsDisplay />
      <SetApartDisplay />
      <Footer />
    </div>
  );
};

export default HomePage;
