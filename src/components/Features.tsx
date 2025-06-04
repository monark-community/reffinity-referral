
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Users, Link, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Link,
      title: "Smart Referral Links",
      description: "Generate unique, trackable referral links with built-in smart contract integration for automatic reward distribution."
    },
    {
      icon: QrCode,
      title: "QR Code Generation",
      description: "Create QR codes for easy sharing in offline events, social media, and mobile-first experiences."
    },
    {
      icon: BarChart,
      title: "Real-time Analytics",
      description: "Track performance with detailed analytics including click-through rates, conversion metrics, and earnings."
    },
    {
      icon: Users,
      title: "Anti-Abuse Protection",
      description: "Built-in security measures prevent self-referrals, bot activity, and other malicious behaviors."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for Web3 Growth
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to build, track, and scale your referral program with blockchain transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
