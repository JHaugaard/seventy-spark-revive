import { Link } from "react-router-dom";
import logo from "@/assets/collected-light-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-start gap-4">
            <img 
              src={logo} 
              alt="Collected Light" 
              className="h-12 w-auto flex-shrink-0"
            />
            <div className="space-y-1">
              <h1 className="text-2xl font-light text-foreground leading-tight">A year of living instantly - A Polaroid per day</h1>
              <p className="text-lg font-medium text-foreground">John Haugaard</p>
            </div>
          </div>
          <nav className="flex gap-8">
            <Link
              to="/"
              className="text-sm text-accent hover:underline transition-colors"
            >
              Home
            </Link>
            <Link
              to="/other-work"
              className="text-sm text-accent hover:underline transition-colors"
            >
              My Other Work
            </Link>
            <Link
              to="/contact"
              className="text-sm text-accent hover:underline transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">August 13, 2023 through August 12, 2024</p>
          <p className="text-muted-foreground max-w-3xl">
            I built this site by posting a Polaroid photograph taken each day. Rarely was it art and often it was mundane. 
            But it was a daily challenge that was met. Polaroid film (and cameras) are challenging. When Polaroid, itself, 
            uses the tagline "For the Imperfectionists" on their site I expected (and had) a wild ride. Here are the results. 
            366 Polaroid images. My 70th Year.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
