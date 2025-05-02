
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const stats = [
    { number: "10X", label: "Faster Claims" },
    { number: "85%", label: "Digital Adoption" },
    { number: "40+", label: "Insurance Products" },
    { number: "5", label: "African Countries" }
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="mb-6">
                <span className="gradient-text">About Us</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Medicod is on a mission to make insurance relevant, accessible, and actually useful for the connected generation across Africa.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2023, we're a team of technologists, insurance experts, and customer experience obsessives who believe that protection shouldn't be complicated. We've built a platform that connects insurers, agencies, and consumers in a transparent digital ecosystem.
              </p>
              <p className="text-gray-600 mb-8">
                Our technology isn't just making insurance easier - it's fundamentally changing how risk is managed, distributed, and experienced in emerging markets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-primary rounded-full">
                <a href="#join-exchange">Partner With Us</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-1 bg-gradient-primary mb-4"></div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 gradient-text">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <div className="grid gap-4">
                {[
                  { title: "Customer Obsession", desc: "We start with the customer and work backwards" },
                  { title: "Tech-Forward", desc: "We embrace new technologies to solve old problems" },
                  { title: "Radical Transparency", desc: "We believe in clear, honest communication" },
                  { title: "African Solutions", desc: "We build for the unique needs of our continent" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
