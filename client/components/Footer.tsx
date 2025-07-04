import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">ARZ Host</h3>
            <p className="text-muted-foreground mb-4">
              Professional VPS hosting solutions with instant setup, 24/7
              support, and reliable performance. Your trusted partner for online
              success.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://arzhost.com"
                  className="text-primary hover:underline"
                >
                  arzhost.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +1 (631) 594-8060
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://arzhost.com/vps/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VPS Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/lifetime-web-hosting/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lifetime Web Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://arzhost.com/hosting/cheap-vps-server-hosting-dallas/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dallas VPS Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ARZ Host. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
