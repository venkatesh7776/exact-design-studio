import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import GrandPrizes from "@/components/GrandPrizes";
import CategoryCards from "@/components/CategoryCards";
import ExploreEngage from "@/components/ExploreEngage";
import Timeline from "@/components/Timeline";
import EventsRounds from "@/components/EventsRounds";
import ParticipantCategories from "@/components/ParticipantCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CountdownTimer />
        <GrandPrizes />
        <CategoryCards />
        <ExploreEngage />
        <Timeline />
        <EventsRounds />
        <ParticipantCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
