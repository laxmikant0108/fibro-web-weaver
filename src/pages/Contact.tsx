
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@fibronavigator.com",
      description: "Get personalized support via email",
      availability: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Speak with our support team",
      availability: "Mon-Fri, 9AM-5PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available on website",
      description: "Instant support when you need it",
      availability: "Mon-Fri, 9AM-8PM EST"
    },
    {
      icon: MapPin,
      title: "Mailing Address",
      details: "123 Health St, Wellness City, WC 12345",
      description: "Send us mail or documents",
      availability: "Business hours"
    }
  ];

  const faqs = [
    {
      question: "How can I get started with Fibro Navigator?",
      answer: "Simply explore our articles and resources sections. All content is free and accessible immediately. For personalized support, reach out via any of our contact methods."
    },
    {
      question: "Do you provide medical advice?",
      answer: "We provide educational information and support, but we don't offer medical advice. Always consult with your healthcare provider for medical decisions."
    },
    {
      question: "Is there a cost to use your resources?",
      answer: "All our articles, guides, and basic resources are completely free. We believe everyone should have access to quality fibromyalgia information and support."
    },
    {
      question: "How can I contribute to the community?",
      answer: "We welcome community contributions! You can share your story, provide feedback on resources, or volunteer to help others in our community forums."
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in 
              <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                {" "}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to support you on your fibromyalgia journey. Reach out with 
              questions, suggestions, or just to connect with our caring team.
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
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{method.title}</CardTitle>
                  <div className="text-teal-600 font-semibold">{method.details}</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a specific question or need personalized support? Fill out the form 
                and we'll get back to you as soon as possible.
              </p>
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..." 
                        rows={6}
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Quick answers to common questions about our platform and services.
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

      {/* Support Hours */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Hours</h2>
            <p className="text-lg text-gray-600">
              We're here when you need us most. Here are our current support hours:
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Live Support</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday</p>
                      <p>9:00 AM - 8:00 PM EST</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>24/7 Availability</p>
                      <p>Response within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-teal-50 rounded-lg text-center">
                  <p className="text-sm text-teal-800">
                    <strong>Emergency Support:</strong> For crisis situations, please contact emergency services 
                    or use the emergency resources listed on our Resources page.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            We're Here for You
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Remember, you're not alone in this journey. Our team and community 
            are here to support you every step of the way.
          </p>
          <Button variant="secondary" size="lg">
            Join Our Community
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
