import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-muted-foreground">Collected Light</div>
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
        <h1 className="text-4xl font-light text-foreground">My 70th Year</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          A year of living instantly - A Polaroid per day documenting August 2023
          through August 2024.
        </p>
      </div>
    </header>
  );
};

export default Header;
