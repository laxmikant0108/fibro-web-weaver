
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award, Star, Clock, User, Factory, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Defense Grade Quality",
      description: "Military-spec products built to withstand extreme conditions and rigorous standards."
    },
    {
      icon: Zap,
      title: "Optical Technology",
      description: "Advanced optical solutions for telecom infrastructure and communication systems."
    },
    {
      icon: Factory,
      title: "Precision Manufacturing",
      description: "State-of-the-art manufacturing processes ensuring consistent quality and reliability."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored products designed to meet specific client requirements and applications."
    }
  ];

  const testimonials = [
    {
      name: "Defense Contractor A",
      text: "Nav Fibro Plastics consistently delivers high-quality optical components that meet our stringent defense requirements.",
      rating: 5
    },
    {
      name: "Telecom Solutions Ltd.",
      text: "Exceptional manufacturing quality and reliable delivery schedules. Our go-to partner for optical components.",
      rating: 5
    },
    {
      name: "Tech Systems Inc.",
      text: "The precision and durability of their products have significantly improved our system performance.",
      rating: 5
    }
  ];

  const recentProducts = [
    {
      title: "Fiber Optic Connectors",
      excerpt: "High-performance connectors for optical telecom applications with superior signal integrity.",
      category: "Optical Components",
      date: "Latest Model 2024",
      applications: "Telecom Infrastructure"
    },
    {
      title: "Defense Optical Modules",
      excerpt: "Ruggedized optical modules designed for military and defense communication systems.",
      category: "Defense Products",
      date: "Military Grade",
      applications: "Defense Systems"
    },
    {
      title: "Precision Plastic Components",
      excerpt: "Custom molded plastic parts for optical assemblies with micron-level precision.",
      category: "Manufacturing",
      date: "Custom Solutions",
      applications: "Various Industries"
    }
  ];

  const capabilities = [
    {
      icon: Globe,
      title: "Global Standards",
      description: "ISO certified manufacturing processes meeting international quality standards."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Proven track record with leading defense and telecom companies worldwide."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers and technicians with decades of experience in optical manufacturing."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/3b956324-698e-4a28-aa23-68fe02593037.png" 
                alt="Nav Fibro Plastics Logo" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nav Fibro
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent block">
                Plastics
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading manufacturer of high-quality optical telecom & defense products. 
              Delivering precision engineering and cutting-edge technology solutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-700 hover:to-blue-800">
                <Link to="/articles">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nav Fibro Plastics?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading expertise in optical telecom and defense manufacturing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Discover our latest optical telecom and defense solutions.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/articles">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Factory className="h-4 w-4" />
                      <span>{product.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4" />
                      <span>{product.applications}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{product.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to delivering superior quality products with precision and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies in defense and telecommunications industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your optical telecom and defense product requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
              <Link to="/articles">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
