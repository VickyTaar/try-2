
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/lovable-uploads/79ebd433-1d80-4ab8-aed1-365f61cee76d.png" alt="Medicod" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#why-medicod" className="text-navy-blue font-medium hover:text-medicod-blue transition-colors">Why Medicod</a>
          <a href="#for-businesses" className="text-navy-blue font-medium hover:text-medicod-blue transition-colors">For Businesses</a>
          <a href="#embedded-insurance" className="text-navy-blue font-medium hover:text-medicod-blue transition-colors">Embedded Insurance</a>
          <a href="#about" className="text-navy-blue font-medium hover:text-medicod-blue transition-colors">About Us</a>
        </div>

        <div className="hidden md:flex items-center">
          <Button asChild className="bg-medicod-blue hover:bg-medicod-blue/90 text-white rounded-full">
            <a href="#join-exchange">Join Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-navy-blue">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#why-medicod" className="px-4 py-2 text-navy-blue hover:bg-slate-50 rounded-md" onClick={() => setIsOpen(false)}>Why Medicod</a>
            <a href="#for-businesses" className="px-4 py-2 text-navy-blue hover:bg-slate-50 rounded-md" onClick={() => setIsOpen(false)}>For Businesses</a>
            <a href="#embedded-insurance" className="px-4 py-2 text-navy-blue hover:bg-slate-50 rounded-md" onClick={() => setIsOpen(false)}>Embedded Insurance</a>
            <a href="#about" className="px-4 py-2 text-navy-blue hover:bg-slate-50 rounded-md" onClick={() => setIsOpen(false)}>About Us</a>
            <div className="pt-4 border-t">
              <Button asChild className="w-full bg-medicod-blue text-white rounded-full">
                <a href="#join-exchange">Join Us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
