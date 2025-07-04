import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              ARZ Host
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://arzhost.com/vps/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              VPS Server
            </a>
            <a
              href="https://arzhost.com/lifetime-web-hosting/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lifetime Web Hosting
            </a>
            <a
              href="https://arzhost.com/hosting/cheap-vps-server-hosting-dallas/"
              className="text-foreground hover:text-primary transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              VPS Hosting Hong Kong
            </a>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
