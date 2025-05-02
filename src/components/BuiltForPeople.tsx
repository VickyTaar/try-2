
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const BuiltForPeople = () => {
  const benefits = [
    {
      title: "Simple Digital Experience",
      description: "Buy and manage insurance directly from your phone - no paperwork, no hassle."
    },
    {
      title: "Fast Claims Processing",
      description: "Get paid in minutes, not months, with our AI-powered claims system."
    },
    {
      title: "Affordable Coverage",
      description: "Flexible coverage options that fit your budget and actual needs."
    },
    {
      title: "Products That Make Sense",
      description: "Insurance products designed for real African lifestyles and challenges."
    }
  ];

  return (
    <section id="built-for-people" className="section">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="mb-6">
                <span className="gradient-text">Built for the People</span> of Africa
              </h2>
              <p className="text-xl text-gray-600">
                We're giving everyday Kenyans smarter, simpler access to protection that actually works for their lives. Insurance shouldn't be complicated or inaccessible.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5">
                  <CheckCircle className="text-medicod-blue mb-3" size={24} />
                  <h4 className="font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
              {benefits.slice(2).map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5">
                  <CheckCircle className="text-medicod-pink mb-3" size={24} />
                  <h4 className="font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-primary rounded-full">
                <a href="#join-exchange">Get Started</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 opacity-70"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="African Landscape" 
                className="w-full h-auto"
              />
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-medicod-dark/70 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Protection That Makes Sense</h3>
                <p className="text-white/90 mb-4">Insurance designed for the unique needs of African consumers</p>
                <div className="flex flex-wrap gap-2">
                  {["Health", "Auto", "Mobile", "Business", "Travel", "Home"].map((tag, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px] animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="font-bold text-green-500">Claim Approved</p>
              </div>
              <p className="text-sm text-gray-600">Payment sent to your M-Pesa in 3 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForPeople;
