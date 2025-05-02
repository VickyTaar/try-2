
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Link } from "lucide-react";

const ForBusinesses = () => {
  const businessTools = [
    {
      icon: <Users className="text-medicod-blue" size={24} />,
      title: "Digital Onboarding",
      description: "Smooth client onboarding and KYC verification in minutes, not days."
    },
    {
      icon: <Link className="text-medicod-pink" size={24} />,
      title: "Integration APIs",
      description: "Connect your existing systems with our platform for seamless data flow."
    },
    {
      icon: <Briefcase className="text-medicod-purple" size={24} />,
      title: "Commission Tracking",
      description: "Real-time commission tracking and transparent payment processing."
    }
  ];

  return (
    <section id="for-businesses" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            For <span className="gradient-text">Businesses & Agencies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools to sell insurance digitally — from onboarding to commissions tracking. Empower your team to sell smarter, not harder.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {businessTools.map((tool, index) => (
            <div key={index} className="card hover:translate-y-[-5px] transition-all">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
              <p className="text-gray-600 mb-6">{tool.description}</p>
              <a href="#join-exchange" className="text-medicod-blue font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-medicod-dark to-medicod-dark/90 text-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Digital Insurance Sales Platform</h3>
              <p className="mb-6 text-gray-200">
                Transform how your agency sells insurance with our comprehensive digital platform designed specifically for the African market.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Digital policy management dashboard",
                  "Client relationship tools with automated follow-ups",
                  "Customizable insurance product catalog",
                  "Real-time performance analytics and insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-primary rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-gradient-primary hover:opacity-90 rounded-full px-8">
                <a href="#join-exchange" className="flex items-center gap-2">
                  Partner with Us <ArrowRight size={16} />
                </a>
              </Button>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Business Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medicod-dark/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
