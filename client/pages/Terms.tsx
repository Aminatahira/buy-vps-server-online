import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.location.href = "https://www.arzhost.com/terms-conditions/";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Redirecting to Terms & Conditions...
        </h1>
        <p className="text-muted-foreground mb-8">
          You are being redirected to our Terms & Conditions page.
        </p>
        <a
          href="https://www.arzhost.com/terms-conditions/"
          className="text-primary hover:underline"
        >
          Click here if you are not redirected automatically
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
