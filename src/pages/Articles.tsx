
import Layout from "@/components/Layout";
import { Search, Clock, User, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All Articles",
    "Pain Management", 
    "Exercise & Movement",
    "Sleep & Rest",
    "Nutrition",
    "Mental Health",
    "Medical Treatment",
    "Daily Living"
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Fibromyalgia: A Comprehensive Guide",
      excerpt: "Learn about the symptoms, causes, and diagnostic process of fibromyalgia. This comprehensive guide covers everything you need to know about this complex condition.",
      author: "Dr. Sarah Johnson",
      date: "March 20, 2024",
      readTime: "12 min read",
      category: "Medical Treatment",
      featured: true
    },
    {
      id: 2,
      title: "10 Gentle Exercises for Fibromyalgia Relief",
      excerpt: "Discover low-impact exercises that can help reduce pain and improve mobility without triggering flare-ups. Perfect for beginners and those with limited mobility.",
      author: "Physical Therapist Mark Davis",
      date: "March 18, 2024",
      readTime: "8 min read",
      category: "Exercise & Movement",
      featured: true
    },
    {
      id: 3,
      title: "Creating a Sleep Sanctuary: Better Rest with Fibromyalgia",
      excerpt: "Transform your bedroom into a healing space with these evidence-based tips for improving sleep quality and reducing morning stiffness.",
      author: "Sleep Specialist Dr. Emily Chen",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "Sleep & Rest",
      featured: false
    },
    {
      id: 4,
      title: "Anti-Inflammatory Foods for Fibromyalgia",
      excerpt: "Explore how diet can impact fibromyalgia symptoms and discover foods that may help reduce inflammation and boost energy levels.",
      author: "Nutritionist Lisa Rodriguez",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Nutrition",
      featured: false
    },
    {
      id: 5,
      title: "Managing Fibro Fog: Cognitive Strategies That Work",
      excerpt: "Combat cognitive difficulties with practical strategies for improving memory, concentration, and mental clarity in daily life.",
      author: "Cognitive Therapist Dr. James Wilson",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Mental Health",
      featured: false
    },
    {
      id: 6,
      title: "Heat vs. Cold Therapy: What Works Best?",
      excerpt: "Learn when to use heat therapy versus cold therapy for different types of fibromyalgia pain and inflammation.",
      author: "Dr. Maria Santos",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Pain Management",
      featured: false
    },
    {
      id: 7,
      title: "Building Your Fibromyalgia Support Team",
      excerpt: "Discover how to assemble a healthcare team that understands fibromyalgia and can provide comprehensive, coordinated care.",
      author: "Patient Advocate Jennifer Lee",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Medical Treatment",
      featured: false
    },
    {
      id: 8,
      title: "Stress Management Techniques for Chronic Pain",
      excerpt: "Explore proven stress reduction methods that can help break the cycle of stress and pain in fibromyalgia.",
      author: "Psychologist Dr. Robert Taylor",
      date: "March 3, 2024",
      readTime: "8 min read",
      category: "Mental Health",
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Articles & 
              <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                {" "}Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover evidence-based articles, practical tips, and expert insights 
              to help you better understand and manage fibromyalgia.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-0 shadow-md"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="bg-white/80 backdrop-blur-sm border-0 shadow-sm hover:bg-teal-50 hover:text-teal-700"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Tag className="h-4 w-4" />
                        <span>{article.category}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-900 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Tag className="h-4 w-4" />
                      <span>{article.category}</span>
                    </div>
                  </div>
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
                      <span className="truncate">{article.author}</span>
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

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and resources 
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-teal-100"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
