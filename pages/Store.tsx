import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const Store: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    if (filter === 'All') return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-brand-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h1 className="font-display text-4xl font-bold text-brand-dark uppercase">The Store</h1>
            <p className="text-brand-muted mt-2">Curated hardware for the obsessed carver.</p>
          </div>
          
          {/* Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  filter === cat 
                    ? 'bg-brand-dark text-white shadow-lg' 
                    : 'bg-white text-brand-muted hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;