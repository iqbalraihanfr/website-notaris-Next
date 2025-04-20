
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  className = ''
}) => {
  return (
    <div className={`bg-notary text-white py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
