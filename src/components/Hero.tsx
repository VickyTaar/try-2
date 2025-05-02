
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Gradient background elements with softer colors */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-medicod-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-medicod-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
            <h1 className="font-bold mb-6 leading-tight text-navy-blue">
              <span className="bg-gradient-to-r from-medicod-blue to-medicod-blue/70 bg-clip-text text-transparent">Redefining Insurance</span> for the Connected Generation.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              We're building Africa's insurance future — fast claims powered by AI, insurance embedded where people already shop, and tools for agencies to sell smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-medicod-blue hover:bg-medicod-blue/90 rounded-full text-base px-8 py-6">
                <a href="#join-exchange" className="flex items-center gap-2">
                  Join Our Exchange <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="text-medicod-blue border-medicod-blue hover:bg-medicod-blue/5 rounded-full text-base px-8 py-6">
                <a href="#why-medicod">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 z-10">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-medicod-blue rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Insurance Technology" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-medicod-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-medium">AI-Powered</p>
                    <p className="text-sm text-gray-500">Fast Claims Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
