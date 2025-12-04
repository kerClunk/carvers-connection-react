import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Truck, Shield } from 'lucide-react';
import Button from '../components/Button';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-gray">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Product Not Found</h2>
          <a href="https://carving.clunk.tech/store/" className="text-brand-accent hover:underline">Return to Store</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <a href="https://carving.clunk.tech/store/" className="inline-flex items-center text-brand-muted hover:text-brand-dark mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Store
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-gray rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-brand-gray rounded cursor-pointer hover:ring-2 ring-brand-accent transition-all">
                  <img src={`https://picsum.photos/200/200?random=${i}`} className="w-full h-full object-cover opacity-75 hover:opacity-100" alt="Thumbnail" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div>
            <div className="mb-2 text-brand-secondary font-bold uppercase tracking-wider text-sm">
              {product.category}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark uppercase mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="text-3xl font-bold text-brand-accent mb-8">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-brand-text text-lg leading-relaxed mb-8 border-b border-gray-100 pb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center text-sm text-brand-muted">
                <Check className="text-green-500 mr-2" size={18} />
                In Stock - Ready to ship
              </div>
              <div className="flex items-center text-sm text-brand-muted">
                <Truck className="text-brand-dark mr-2" size={18} />
                Worldwide Shipping Available
              </div>
              <div className="flex items-center text-sm text-brand-muted">
                <Shield className="text-brand-dark mr-2" size={18} />
                Carver's Quality Guarantee
              </div>
            </div>

            <Button onClick={() => addToCart(product)} fullWidth>
              Add to Cart
            </Button>
            
            {/* Mock Tabs */}
            <div className="mt-12">
               <div className="border-b border-gray-200">
                 <nav className="-mb-px flex space-x-8">
                   <button className="border-brand-accent text-brand-accent border-b-2 py-4 px-1 text-sm font-bold uppercase">Description</button>
                   <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-1 text-sm font-bold uppercase">Specs</button>
                   <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-4 px-1 text-sm font-bold uppercase">Reviews</button>
                 </nav>
               </div>
               <div className="pt-4 text-sm text-gray-500">
                 <p>Additional technical specifications and details would appear here in the full implementation.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;