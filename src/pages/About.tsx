
import Layout from "@/components/Layout";
import { Heart, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections that provide strength and support."
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Providing information backed by medical research and expert knowledge."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality resources and support."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">
                {" "}Fibro Navigator
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're dedicated to providing support, resources, and hope for those navigating 
              life with fibromyalgia. Our mission is to create a comprehensive platform where 
              knowledge meets compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fibro Navigator was born from the understanding that living with fibromyalgia 
                can feel isolating and overwhelming. We believe that no one should face this 
                journey alone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our platform brings together the latest medical research, practical management 
                strategies, and a supportive community to help you navigate the complexities 
                of fibromyalgia with confidence and hope.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're newly diagnosed or have been managing fibromyalgia for years, 
                we're here to provide the resources and support you need to live your best life.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <Heart className="h-32 w-32 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                Fibro Navigator was founded by a team of healthcare professionals, researchers, 
                and individuals with lived experience of fibromyalgia. We recognized the need 
                for a comprehensive resource that combines medical expertise with real-world 
                understanding.
              </p>
              <p>
                After witnessing the challenges faced by the fibromyalgia community – from 
                diagnosis difficulties to finding effective management strategies – we decided 
                to create a platform that bridges the gap between medical knowledge and 
                practical support.
              </p>
              <p>
                Today, Fibro Navigator serves thousands of individuals worldwide, providing 
                evidence-based information, community support, and hope for a better tomorrow. 
                We continue to evolve and grow, always keeping our community's needs at the 
                heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to continuously improving our platform and expanding our resources 
              to better serve the fibromyalgia community. Your feedback and experiences help 
              shape our future direction.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Together, We Navigate Forward</h3>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Join our community and be part of a movement that's changing how we approach 
              fibromyalgia support and education. Together, we can make this journey easier 
              for everyone.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
