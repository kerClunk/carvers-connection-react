import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <img
      src="/LogoCC.webp"
      alt="Carvers Connection"
      className={className}
    />
  );
};

export default Logo;