import { Button } from "@/components/ui/button";
import { Book, Cloud, LucideSearch, Trophy, Building2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-accent-green" />
            <span className="text-white font-semibold">CloudHack</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <NavLink icon={<Book className="w-4 h-4" />} text="Learn" />
            <NavLink icon={<Trophy className="w-4 h-4" />} text="Compete" />
            <NavLink icon={<Building2 className="w-4 h-4" />} text="For Education" />
            <NavLink icon={<Building2 className="w-4 h-4" />} text="For Business" />
            <NavLink icon={<LucideSearch className="w-4 h-4" />} text="Pricing" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-accent-green">
              Log In
            </Button>
            <Button className="bg-accent-green text-navy hover:bg-accent-green/90">
              Join For FREE
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-green transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

const Wave = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171C26,#234355)] opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-navy to-transparent" />
      <svg
        className="absolute bottom-0 animate-wave"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(167, 244, 50, 0.05)"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main className="relative pt-32 pb-20 px-4">
        <Wave />
        <div className="container mx-auto max-w-5xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Attacking & Defending AWS
                <span className="block text-gray-400 mt-2">(for Personal Use)</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Get hands-on experience with Amazon Web Services, the most utilised platform of any cloud provider.
              </p>
              <p className="text-gray-400">
                Our AWS Cloud Security trains and upskills you with comprehensive modules created by our in-market experts with over 25 years of AWS experience.
              </p>
              <Button className="bg-accent-green text-navy hover:bg-accent-green/90 text-lg px-8 py-6">
                Buy Now!
              </Button>
            </div>
            <div className="hidden md:block">
              <img
                src="/lovable-uploads/2bae7b94-b718-4129-a91f-40b5ac47a1fa.png"
                alt="AWS Logo"
                className="w-full max-w-md mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
