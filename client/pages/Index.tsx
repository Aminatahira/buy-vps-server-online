import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Server,
  Shield,
  Clock,
  Users,
  Globe,
  Zap,
  HeadphonesIcon,
} from "lucide-react";

const Index = () => {
  const plans = [
    {
      name: "Starter",
      price: "$12.50",
      description: "Small websites or test projects",
      features: [
        "1 vCPU",
        "1GB RAM",
        "20GB SSD",
        "1TB Bandwidth",
        "Free IP Address",
      ],
    },
    {
      name: "Value",
      price: "$16.00",
      description: "Simple business or blog hosting",
      features: [
        "1 vCPU",
        "2GB RAM",
        "40GB SSD",
        "2TB Bandwidth",
        "Free IP Address",
      ],
      popular: true,
    },
    {
      name: "Essential",
      price: "$34.00",
      description: "Growing sites and CMS setups",
      features: [
        "2 vCPU",
        "4GB RAM",
        "80GB SSD",
        "4TB Bandwidth",
        "Free IP Address",
      ],
    },
    {
      name: "Comfort",
      price: "$54.00",
      description: "eCommerce or app deployment",
      features: [
        "4 vCPU",
        "8GB RAM",
        "160GB SSD",
        "8TB Bandwidth",
        "Free IP Address",
      ],
    },
    {
      name: "Elite",
      price: "$60.00+",
      description: "High-demand, business-critical apps",
      features: [
        "8 vCPU",
        "16GB RAM",
        "320GB SSD",
        "16TB Bandwidth",
        "Free IP Address",
      ],
    },
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Instant Setup",
      description:
        "Buy your VPS online and start using it within minutes—no waiting, no technical setup required.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Total Control",
      description:
        "Install the tools you want, run the apps you need, and customize your server just the way you like.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Speed You Can Count On",
      description:
        "Your websites and apps load faster, run smoother, and stay online with minimal downtime.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Free IP Address",
      description:
        "Each VPS includes a dedicated IP address—ideal for secure logins, SSL, and branding.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Built-In Security",
      description:
        "Enjoy protection from common online threats with our included basic DDoS defense.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "24/7 Expert Support",
      description:
        "Have questions or need help? Our support team is ready anytime, day or night.",
    },
  ];

  const testimonials = [
    {
      name: "Ava R.",
      role: "Freelancer",
      quote:
        "Buying a VPS server online was so easy—and it just works. Everything's smooth.",
    },
    {
      name: "Daniel M.",
      role: "Startup Founder",
      quote:
        "We needed a hosting solution for our business platform. This VPS keeps up with demand.",
    },
    {
      name: "Sana H.",
      role: "Digital Agency Owner",
      quote:
        "The support team helped me migrate everything. I'm impressed by the uptime and speed.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Buy VPS Server Online – Fast, Reliable & Easy Hosting
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Looking to buy a VPS server online with zero hassle and maximum
            performance? You're in the right place. Our VPS hosting offers a
            smooth blend of speed, security, and scalability, making it perfect
            for personal projects, professional websites, or business-critical
            apps.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            From instant setup to 24/7 support, we make it simple for you to
            launch, grow, and succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
            >
              <a
                href="https://arzhost.com/vps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now at ARZ Host
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-3"
            >
              <a
                href="https://arzhost.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is VPS Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              What is VPS Hosting?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              A{" "}
              <a
                href="https://en.wikipedia.org/wiki/Virtual_private_server"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Private Server (VPS)
              </a>{" "}
              gives you private access to a high-performance hosting environment
              without the cost of a full dedicated server. Unlike shared
              hosting, a VPS ensures that your websites and apps run
              independently, without being affected by others.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">
                    Bloggers & Content Creators
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Server className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">
                    Business Owners & Startups
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">
                    Developers & Software Testers
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">
                    Online Stores & Booking Systems
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">
                    Agencies & Digital Marketers
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Buy VPS Online From Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We focus on making VPS hosting affordable, flexible, and
              beginner-friendly, while delivering the performance and
              reliability professionals expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              VPS Hosting Plans & Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              All plans are based on ARZ Host's current pricing and come with
              full access, 24/7 support, and no setup fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <a
                      href="https://arzhost.com/vps/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Choose Plan
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Secure Online Purchase
              </h3>
              <p className="text-muted-foreground">
                Buy with confidence using your preferred payment method.
              </p>
            </div>
            <div className="text-center">
              <Server className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy-to-Use Panel</h3>
              <p className="text-muted-foreground">
                Manage your VPS with a clean, intuitive dashboard.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location Choices</h3>
              <p className="text-muted-foreground">
                Choose from multiple data center regions.
              </p>
            </div>
            <div className="text-center">
              <HeadphonesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-muted-foreground">
                Transparent billing with no surprises.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-foreground">
              Trusted by Developers & Entrepreneurs Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q1: How quickly is my VPS set up after purchase?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immediately! Most servers are live within 5 minutes of
                  payment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q2: Do I need to be a developer to manage a VPS?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Not at all. Our control panel makes it easy to handle your
                  server—even if you're not tech-savvy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q3: Is support available if I get stuck?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. Our 24/7 support team is here to guide you at any
                  time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Q4: Can I change plans later?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade your VPS anytime with no downtime or
                  hassle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Buy Your VPS Server Online?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're starting fresh or migrating an existing project, we
            make it easy to launch your VPS with confidence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Instant Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Server className="h-5 w-5" />
              <span className="text-sm">No Resource Sharing</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="h-5 w-5" />
              <span className="text-sm">Free IP Address</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <HeadphonesIcon className="h-5 w-5" />
              <span className="text-sm">Always-On Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-semibold">
                Starting at Just $12.50/month
              </span>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-3"
          >
            <a
              href="https://arzhost.com/vps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now at ARZ Host – and get online in minutes!
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
