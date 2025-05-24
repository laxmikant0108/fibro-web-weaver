
import Layout from "@/components/Layout";
import { Download, ExternalLink, Phone, Heart, BookOpen, Users, Lightbulb, Clock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  const quickLinks = [
    {
      title: "Emergency Support",
      description: "24/7 crisis support and emergency resources",
      icon: Phone,
      urgent: true
    },
    {
      title: "Getting Started Guide",
      description: "New to fibromyalgia? Start here for essential information",
      icon: BookOpen,
      urgent: false
    },
    {
      title: "Community Forums",
      description: "Connect with others who understand your journey",
      icon: Users,
      urgent: false
    },
    {
      title: "Daily Management Tips",
      description: "Practical strategies for everyday living",
      icon: Lightbulb,
      urgent: false
    }
  ];

  const downloadableResources = [
    {
      title: "Fibromyalgia Symptom Tracker",
      description: "Track your symptoms, triggers, and treatments",
      type: "PDF Download",
      size: "2.1 MB",
      downloads: "12.5K"
    },
    {
      title: "Pain Management Worksheet",
      description: "Develop your personalized pain management plan",
      type: "PDF Download", 
      size: "1.8 MB",
      downloads: "9.2K"
    },
    {
      title: "Sleep Hygiene Checklist",
      description: "Improve your sleep quality with this comprehensive guide",
      type: "PDF Download",
      size: "1.2 MB",
      downloads: "15.7K"
    },
    {
      title: "Exercise Routine Cards",
      description: "Gentle exercises designed specifically for fibromyalgia",
      type: "PDF Download",
      size: "3.4 MB",
      downloads: "8.9K"
    }
  ];

  const webResources = [
    {
      title: "National Fibromyalgia Association",
      description: "Official resources and research updates",
      url: "https://fibromyalgia.org",
      category: "Medical Organizations"
    },
    {
      title: "Fibromyalgia Research Foundation",
      description: "Latest research and clinical trial information",
      url: "https://fibromyalgiaresearch.org",
      category: "Research"
    },
    {
      title: "Pain Management Centers Directory",
      description: "Find specialized pain management clinics near you",
      url: "https://paincenters.org",
      category: "Healthcare Providers"
    },
    {
      title: "Disability Benefits Guide",
      description: "Information about disability benefits for fibromyalgia",
      url: "https://disabilitybenefits.org",
      category: "Legal & Financial"
    },
    {
      title: "Fibromyalgia Medication Database",
      description: "Comprehensive information about treatments and medications",
      url: "https://fibromeddb.org",
      category: "Medical Information"
    },
    {
      title: "Adaptive Equipment Suppliers",
      description: "Tools and devices to make daily tasks easier",
      url: "https://adaptiveequipment.com",
      category: "Daily Living"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis support via text message"
    },
    {
      title: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support"
    },
    {
      title: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Mental health and substance abuse support"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resources & 
              <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                {" "}Support
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access a comprehensive collection of tools, guides, and resources 
              designed to support you on your fibromyalgia journey.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer ${link.urgent ? 'ring-2 ring-red-200' : ''}`}>
                <CardHeader className="text-center">
                  {link.urgent && (
                    <Badge variant="destructive" className="w-fit mx-auto mb-2">
                      Urgent
                    </Badge>
                  )}
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${link.urgent ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-teal-500 to-blue-600'}`}>
                    <link.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Support</h2>
            <p className="text-lg text-gray-600">
              If you're in crisis or need immediate support, these resources are available 24/7.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-white border-red-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-gray-900">{contact.title}</CardTitle>
                  <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {resource.description}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{resource.type}</span>
                        <span>{resource.size}</span>
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>
                    </div>
                    <Download className="h-6 w-6 text-teal-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800">
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Web Resources */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">External Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">{resource.category}</Badge>
                      <CardTitle className="text-lg text-gray-900 mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </div>
                    <ExternalLink className="h-5 w-5 text-teal-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Visit Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need More Support?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you 
            find the resources and support you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Support Team
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-teal-600">
              Join Community Forum
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
