
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleWalletConnect = async (walletType: string) => {
    setIsConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      console.log(`Connecting to ${walletType} wallet...`);
      setIsConnecting(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="wallet" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/10">
          <TabsTrigger value="wallet" className="text-white data-[state=active]:bg-white/20">Wallet</TabsTrigger>
          <TabsTrigger value="email" className="text-white data-[state=active]:bg-white/20">Email</TabsTrigger>
        </TabsList>
        
        <TabsContent value="wallet" className="space-y-4 mt-6">
          <div className="space-y-4">
            <Button 
              onClick={() => handleWalletConnect('MetaMask')}
              disabled={isConnecting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
            </Button>
            <Button 
              onClick={() => handleWalletConnect('WalletConnect')}
              disabled={isConnecting}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              {isConnecting ? 'Connecting...' : 'WalletConnect'}
            </Button>
            <Button 
              onClick={() => handleWalletConnect('Coinbase')}
              disabled={isConnecting}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              {isConnecting ? 'Connecting...' : 'Coinbase Wallet'}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="email" className="space-y-4 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Sign In
            </Button>
            <p className="text-center text-white/60 text-sm">
              Don't have an account? <span className="text-purple-400 cursor-pointer hover:underline">Sign up</span>
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthModal;
