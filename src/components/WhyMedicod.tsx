
import { CheckCircle } from "lucide-react";

const WhyMedicod = () => {
  const features = [
    {
      title: "AI-Powered Claims",
      description: "Our AI technology processes claims faster and more accurately, reducing wait times from weeks to minutes."
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. We believe insurance should be clear and straightforward."
    },
    {
      title: "Customer-First Distribution",
      description: "Insurance that meets people where they are, not where insurers want them to be."
    },
    {
      title: "Digital-First Experience",
      description: "Modern tools for a modern Africa – manage everything from your phone."
    }
  ];

  return (
    <section id="why-medicod" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">Why</span> Medicod?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're reimagining insurance with speed, transparency, and customer-focused distribution at our core.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:translate-y-[-5px] transition-all">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-medicod-blue/10 to-medicod-pink/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our AI-Powered Approach</h3>
              <p className="text-gray-600 mb-6">
                Traditional insurance can be frustrating, slow, and inefficient. Our AI technology cuts through the red tape and automates complex processes.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated underwriting reduces approval times by 90%",
                  "Smart claims processing with fraud detection",
                  "Personalized recommendations based on your needs",
                  "24/7 virtual assistants for customer support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-medicod-blue mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="AI Technology" 
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-gradient-primary text-white font-bold p-4 rounded-lg">
                  90% Faster
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMedicod;
