
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 px-4">
      <div className="container mx-auto text-center">
        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
          🚀 Smart Contract Powered
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transparent
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {" "}Referral{" "}
          </span>
          System
        </h1>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Build and scale your Web3 community with blockchain-powered referrals. 
          Automated rewards, tamper-proof tracking, and transparent incentives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3">
            <Users className="mr-2 h-5 w-5" />
            Start Referring
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 bg-transparent px-8 py-3"
          >
            <QrCode className="mr-2 h-5 w-5" />
            View Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
