
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, BookOpen, Users, Lightbulb, Star, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Support",
      description: "Find understanding and empathy from others who share your journey."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access reliable information about fibromyalgia management and treatment."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Connect with others who understand the challenges you face daily."
    },
    {
      icon: Lightbulb,
      title: "Practical Tips",
      description: "Discover strategies and techniques for better daily living."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "This website has been a lifeline for me. The resources and community support have made such a difference in my daily management.",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "Finally found a place that truly understands fibromyalgia. The articles are informative and the community is incredibly supportive.",
      rating: 5
    },
    {
      name: "Lisa K.",
      text: "The practical tips and resources here have helped me regain control over my life. Thank you for this amazing platform.",
      rating: 5
    }
  ];

  const recentArticles = [
    {
      title: "Managing Fibromyalgia Pain: A Comprehensive Guide",
      excerpt: "Learn effective strategies for managing chronic pain and improving quality of life.",
      author: "Dr. Emily Chen",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "The Role of Exercise in Fibromyalgia Treatment",
      excerpt: "Discover how gentle exercise can help reduce symptoms and boost energy levels.",
      author: "Physical Therapist John Davis",
      date: "March 12, 2024",
      readTime: "6 min read"
    },
    {
      title: "Sleep Strategies for Better Nights",
      excerpt: "Improve your sleep quality with these evidence-based techniques and tips.",
      author: "Sleep Specialist Dr. Maria Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Navigate Your
              <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent block">
                Fibromyalgia Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find support, resources, and hope as you navigate life with fibromyalgia. 
              You're not alone in this journey – we're here to help every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800">
                <Link to="/articles">
                  Explore Resources <ArrowRight className="ml-2 h-5 w-5" />
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
              Why Choose Fibro Navigator?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support tailored specifically for the fibromyalgia community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
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

      {/* Recent Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed with our latest insights and resources.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/articles">View All Articles</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{article.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who have found support and hope through our platform.
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join our community of support and discover resources that can help you navigate life with fibromyalgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/resources">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-teal-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
