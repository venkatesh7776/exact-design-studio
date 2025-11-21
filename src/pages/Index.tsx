import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import GrandPrizes from "@/components/GrandPrizes";
import CategoryCards from "@/components/CategoryCards";
import ExploreEngage from "@/components/ExploreEngage";
import Timeline from "@/components/Timeline";
import EventsRounds from "@/components/EventsRounds";
import ParticipantCategories from "@/components/ParticipantCategories";
import FinalCTA from "@/components/FinalCTA";
import TeacherMessage from "@/components/TeacherMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <CountdownTimer />
        <GrandPrizes />
        <CategoryCards />
        <ExploreEngage />
        <Timeline />
        <EventsRounds />
        <ParticipantCategories />
        <FinalCTA />
        <TeacherMessage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
