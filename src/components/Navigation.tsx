
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AuthModal from './AuthModal';

const Navigation = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-white font-bold text-xl">Reffinity</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#leaderboard" className="text-white/80 hover:text-white transition-colors">Leaderboard</a>
          <a href="#stats" className="text-white/80 hover:text-white transition-colors">Stats</a>
        </div>

        <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Connect Wallet
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black/90 border-white/20 text-white">
            <DialogHeader>
              <DialogTitle>Connect Your Wallet</DialogTitle>
            </DialogHeader>
            <AuthModal onClose={() => setIsAuthOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navigation;
