
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Factory, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-9822117160",
      description: "Direct line to our sales team",
      availability: "Mon-Sat, 9AM-6PM IST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "navfibro@gmail.com",
      description: "Technical inquiries and quotes",
      availability: "Response within 24 hours"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      details: "Optical Telecom & Defense",
      description: "Custom manufacturing solutions",
      availability: "Project-based timelines"
    },
    {
      icon: Globe,
      title: "Global Shipping",
      details: "Worldwide Delivery",
      description: "International shipping available",
      availability: "Quote on request"
    }
  ];

  const faqs = [
    {
      question: "What products does Nav Fibro Plastics manufacture?",
      answer: "We specialize in optical telecom and defense products including fiber optic connectors, optical modules, precision plastic components, and custom defense-grade optical solutions."
    },
    {
      question: "Do you provide custom manufacturing services?",
      answer: "Yes, we offer custom manufacturing solutions tailored to specific client requirements for both telecom and defense applications. Contact us with your specifications for a detailed quote."
    },
    {
      question: "What quality standards do you follow?",
      answer: "We maintain ISO certification and follow strict quality control processes. Our products meet international standards and are tested for defense-grade applications."
    },
    {
      question: "What is your typical lead time for orders?",
      answer: "Lead times vary based on product complexity and order volume. Standard products typically ship within 2-4 weeks, while custom solutions may require 6-12 weeks. Contact us for specific timelines."
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                {" "}Nav Fibro Plastics
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our expert team for optical telecom and defense product solutions. 
              We're here to support your manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{method.title}</CardTitle>
                  <div className="text-red-600 font-semibold">{method.details}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{method.availability}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Need custom optical components or have specific requirements? Fill out the form 
                and our technical team will get back to you with a detailed quote.
              </p>
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" placeholder="Enter your company name" />
                      </div>
                      <div>
                        <Label htmlFor="contactPerson">Contact Person</Label>
                        <Input id="contactPerson" placeholder="Your name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@company.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" />
                    </div>
                    
                    <div>
                      <Label htmlFor="productType">Product Type</Label>
                      <Input id="productType" placeholder="e.g., Fiber Optic Connectors, Defense Modules" />
                    </div>
                    
                    <div>
                      <Label htmlFor="requirements">Detailed Requirements</Label>
                      <Textarea 
                        id="requirements" 
                        placeholder="Describe your technical specifications, quantities, timeline, and any special requirements..." 
                        rows={6}
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-700 hover:to-blue-800" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Common questions about our manufacturing capabilities and products.
              </p>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-0">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Hours</h2>
            <p className="text-lg text-gray-600">
              Our manufacturing facility and customer service team are available during these hours:
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Saturday</p>
                      <p>9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Service</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday</p>
                      <p>9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg text-center">
                  <p className="text-sm text-red-800">
                    <strong>Express Support:</strong> For urgent technical support or emergency orders, 
                    call +91-9822117160 and mention "URGENT" to reach our on-call engineer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Partner with Industry Leaders
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join our network of satisfied clients in defense and telecommunications. 
            Experience the Nav Fibro Plastics difference in quality and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91-9822117160
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-red-600">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
