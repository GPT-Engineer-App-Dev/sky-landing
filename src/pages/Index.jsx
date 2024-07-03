import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";

const Index = () => {
  const [features] = useState([
    { title: "Feature One", description: "Description for feature one." },
    { title: "Feature Two", description: "Description for feature two." },
    { title: "Feature Three", description: "Description for feature three." },
  ]);

  const [pricingPlans] = useState([
    { title: "Basic", price: "$10/month", features: ["Feature A", "Feature B"] },
    { title: "Pro", price: "$20/month", features: ["Feature A", "Feature B", "Feature C"] },
    { title: "Enterprise", price: "$30/month", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
  ]);

  const [testimonials] = useState([
    { name: "John Doe", feedback: "This is an amazing product!", photo: "/placeholder.svg" },
    { name: "Jane Smith", feedback: "I love using this service.", photo: "/placeholder.svg" },
  ]);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our SaaS Product</h1>
        <p className="text-xl mb-8">The best solution for your business needs.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button variant="outline">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="flex items-center space-x-4">
                <Avatar src={testimonial.photo} alt={testimonial.name} className="w-16 h-16" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p>{testimonial.feedback}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;