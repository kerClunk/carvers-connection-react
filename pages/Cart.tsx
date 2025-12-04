import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const Cart: React.FC = () => {
  const { items, removeFromCart, totalItems } = useCart();

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-gray p-4">
        <h2 className="font-display text-3xl font-bold text-brand-dark mb-4 uppercase">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't found your weapon of choice yet.</p>
        <a href="https://carving.clunk.tech/store/">
          <Button>Return to Shop</Button>
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-brand-dark uppercase mb-12">Shopping Cart ({totalItems})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-display text-lg font-bold text-brand-dark">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-brand-dark">${item.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-24">
              <h3 className="font-display text-xl font-bold uppercase mb-6 border-b pb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-brand-dark font-bold text-xl pt-4 border-t">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <Button fullWidth className="group">
                Checkout 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="mt-6 text-xs text-gray-400 text-center">
                Secure checkout powered by WooCommerce (Simulation)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;