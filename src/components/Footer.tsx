
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
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
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
    }, 1000);
  };

  const links = [
    {
      title: "Company",
      items: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Products",
      items: [
        { label: "For Businesses", href: "#for-businesses" },
        { label: "Embedded Insurance", href: "#embedded-insurance" },
        { label: "Consumer Insurance", href: "#built-for-people" },
        { label: "Agency Tools", href: "#for-businesses" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#blog" },
        { label: "Insurance Guides", href: "#guides" },
        { label: "FAQ", href: "#faq" },
        { label: "Support", href: "#support" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-medicod-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-heading gradient-text">Medicod</span>
            </a>
            <p className="text-gray-300 mb-6 max-w-md">
              Redefining insurance for the connected generation across Africa. Fast claims, transparent pricing, and customer-first distribution.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-bold text-lg">Subscribe to our newsletter</h4>
              <div className="flex max-w-md">
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-l-lg rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                />
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-gradient-primary rounded-r-lg rounded-l-none hover:opacity-90"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>
          
          {links.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.items.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Medicod Insurance Technologies. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <div className="mb-2 md:mb-0">
            <a href="#privacy" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div>
            Designed with ❤️ in Nairobi, Kenya
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
