
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Stats = () => {
  const topReferrers = [
    { rank: 1, address: "0x1234...5678", referrals: 1247, earnings: "12.5 ETH" },
    { rank: 2, address: "0x8765...4321", referrals: 986, earnings: "9.8 ETH" },
    { rank: 3, address: "0x9876...1234", referrals: 743, earnings: "7.4 ETH" },
    { rank: 4, address: "0x5432...8765", referrals: 621, earnings: "6.2 ETH" },
    { rank: 5, address: "0x2468...1357", referrals: 502, earnings: "5.0 ETH" }
  ];

  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Leaderboard
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See who's leading the referral game and earning the most rewards.
          </p>
        </div>
        
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center">Top Referrers This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topReferrers.map((referrer) => (
                <div key={referrer.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-4">
                    <Badge 
                      variant={referrer.rank <= 3 ? "default" : "secondary"}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        referrer.rank === 1 ? "bg-yellow-500" : 
                        referrer.rank === 2 ? "bg-gray-400" :
                        referrer.rank === 3 ? "bg-amber-600" : "bg-white/20"
                      }`}
                    >
                      {referrer.rank}
                    </Badge>
                    <div>
                      <div className="text-white font-mono">{referrer.address}</div>
                      <div className="text-white/60 text-sm">{referrer.referrals} referrals</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{referrer.earnings}</div>
                    <div className="text-white/60 text-sm">Total earned</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Stats;
