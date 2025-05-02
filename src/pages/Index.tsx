
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMedicod from "@/components/WhyMedicod";
import ForBusinesses from "@/components/ForBusinesses";
import EmbeddedInsurance from "@/components/EmbeddedInsurance";
import BuiltForPeople from "@/components/BuiltForPeople";
import JoinExchange from "@/components/JoinExchange";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyMedicod />
      <ForBusinesses />
      <EmbeddedInsurance />
      <BuiltForPeople />
      <JoinExchange />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
