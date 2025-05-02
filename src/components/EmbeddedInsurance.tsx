
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const EmbeddedInsurance = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when Embedded Insurance is available.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section id="embedded-insurance" className="section bg-gray-50 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-medicod-pink/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-medicod-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-medicod-blue/10 text-medicod-blue font-medium px-4 py-2 rounded-full mb-6">
            Coming Soon
          </div>
          
          <h2 className="mb-6">
            <span className="gradient-text">Embedded Insurance</span> Where Your Customers Already Shop
          </h2>
          
          <p className="text-xl text-gray-600 mb-10">
            Seamlessly integrate insurance offerings into your e-commerce platform, fintech app, or marketplace. Increase revenue while giving customers the protection they need at exactly the right moment.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Join Our Waitlist</h3>
                <p className="text-gray-600 mb-6">
                  Be the first to know when our embedded insurance platform launches. Perfect for e-commerce sites, fintechs, and digital marketplaces.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-primary rounded-lg"
                  >
                    {loading ? "Joining Waitlist..." : "Join Waitlist"}
                  </Button>
                </form>
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-primary rounded-xl opacity-30"></div>
                <div className="relative bg-white rounded-xl shadow p-6">
                  <h4 className="font-bold mb-3">What to Expect</h4>
                  <ul className="space-y-3">
                    {[
                      "Simple API integration",
                      "Customizable insurance products",
                      "Revenue share model",
                      "Seamless customer experience",
                      "Early access to new features"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Early Access</p>
                        <p className="text-xs text-gray-500">Limited spots available</p>
                      </div>
                    </div>
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

export default EmbeddedInsurance;
