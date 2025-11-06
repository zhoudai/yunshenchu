import React from 'react';

interface Partner {
  name: string;
  logo: string;
}

interface PartnerScrollProps {
  partners: Partner[];
  className?: string;
}

const PartnerScroll: React.FC<PartnerScrollProps> = ({ partners, className = "" }) => {
  // 将合作伙伴分成两行
  const firstRowPartners = partners.slice(0, Math.ceil(partners.length / 2));
  const secondRowPartners = partners.slice(Math.ceil(partners.length / 2));

  const renderPartnerCard = (partner: Partner, key: string) => (
    <div
      key={key}
      className="flex-shrink-0 mx-6 group"
    >
      <div className="w-48 h-24 bg-card border border-primary/20 rounded-xl flex items-center justify-center p-6 transition-all duration-500 hover:border-primary hover:shadow-glow hover:scale-110">
        <div className="relative w-full h-full">
          {/* Logo placeholder - replace with actual logos */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
            <span className="text-lg font-bold">{partner.name}</span>
          </div>
          {/* Scan effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-scan" />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`relative space-y-8 ${className}`}>
      {/* First Row - Left to Right */}
        <div className="flex animate-scroll hover:pause-animation">
          {/* First Set */}
          {firstRowPartners.map((partner, index) => 
            renderPartnerCard(partner, `first-row-first-${index}`)
          )}
          
          {/* Duplicate Set for Seamless Loop */}
          {firstRowPartners.map((partner, index) => 
            renderPartnerCard(partner, `first-row-second-${index}`)
          )}
        </div>

      {/* Second Row - Right to Left */}
        <div className="flex animate-scroll-reverse hover:pause-animation">
          {/* First Set */}
          {secondRowPartners.map((partner, index) => 
            renderPartnerCard(partner, `second-row-first-${index}`)
          )}
          
          {/* Duplicate Set for Seamless Loop */}
          {secondRowPartners.map((partner, index) => 
            renderPartnerCard(partner, `second-row-second-${index}`)
          )}
        </div>
    </div>
  );
};

export default PartnerScroll;