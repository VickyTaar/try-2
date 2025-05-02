
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const JoinExchange = () => {
  const partnerTypes = [
    {
      title: "Insurance Partners",
      items: ["Insurance Companies", "Underwriters", "Reinsurers"],
      benefits: ["Expanded digital distribution", "Access to new customer segments", "Reduced acquisition costs"]
    },
    {
      title: "Agency Partners",
      items: ["Insurance Brokers", "Independent Agents", "Aggregators"],
      benefits: ["Digital sales tools", "Streamlined operations", "Higher conversion rates"]
    },
    {
      title: "Tech Innovators",
      items: ["Fintechs", "E-commerce Platforms", "App Developers"],
      benefits: ["New revenue streams", "Enhanced user value", "Simple API integration"]
    }
  ];

  return (
    <section id="join-exchange" className="section bg-medicod-dark text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-medicod-blue blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-medicod-pink blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Join the <span className="gradient-text">Exchange</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of Africa's most innovative insurance ecosystem. Whether you're an insurer, agency, or tech company, there's a place for you in our exchange.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mb-16">
          {partnerTypes.map((type, index) => (
            <div key={index} className="glass-card hover:bg-white/10 transition-all">
              <h3 className="text-xl font-bold mb-4">{type.title}</h3>
              
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-2">For:</p>
                <div className="flex flex-wrap gap-2">
                  {type.items.map((item, idx) => (
                    <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-2">Benefits:</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-medicod-blue mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button asChild className="w-full mt-6 bg-gradient-primary hover:opacity-90">
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-medicod-blue/20 to-medicod-pink/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Insurance?</h3>
              <p className="text-gray-300 mb-6">
                Join Medicod's insurance exchange and be part of the movement that's redefining the industry in Africa. Our team will guide you through the integration process.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 rounded-full">
                <a href="#contact">Contact Our Team</a>
              </Button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-4">Join in 3 Simple Steps</h4>
              <ol className="space-y-4">
                {[
                  "Schedule a consultation with our partnership team",
                  "Receive your custom integration plan",
                  "Launch on the Medicod exchange platform"
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinExchange;
