import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative">
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10 bg-brand-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md">
          New Arrival
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Quick action overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-brand-dark px-4 py-2 font-bold uppercase text-xs tracking-wider rounded-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-brand-secondary uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="font-display text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-lg font-bold text-brand-dark">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-1 text-sm font-bold text-brand-muted hover:text-brand-accent transition-colors uppercase tracking-wide"
          >
            <span>Add</span>
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;