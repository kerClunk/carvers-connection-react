import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-accent hover:bg-orange-700 shadow-lg shadow-orange-500/30 focus:ring-brand-accent",
    secondary: "border-transparent text-white bg-brand-dark hover:bg-slate-800 shadow-lg shadow-slate-900/20 focus:ring-brand-dark",
    outline: "border-brand-dark text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white focus:ring-brand-dark"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;