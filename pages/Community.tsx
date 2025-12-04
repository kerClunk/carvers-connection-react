import React from 'react';
import Button from '../components/Button';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-gray flex items-center justify-center">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="font-display text-5xl font-bold text-brand-dark uppercase mb-6">Group Therapy</h1>
        <p className="text-xl text-brand-text mb-8">
          The forum is currently undergoing maintenance as we migrate to the new platform. 
          Connect with other carvers, share your setups, and discuss the perfect turn.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-accent text-left mb-8">
          <h3 className="font-display text-xl font-bold mb-2">Latest Topics</h3>
          <ul className="space-y-3">
             <li className="flex justify-between items-center text-sm text-gray-600 border-b border-gray-100 pb-2">
               <span>Need advice: 55 vs 60 degree front angle?</span>
               <span className="text-xs bg-gray-100 px-2 py-1 rounded">24 replies</span>
             </li>
             <li className="flex justify-between items-center text-sm text-gray-600 border-b border-gray-100 pb-2">
               <span>Review: New Kessler shape</span>
               <span className="text-xs bg-gray-100 px-2 py-1 rounded">12 replies</span>
             </li>
             <li className="flex justify-between items-center text-sm text-gray-600 pb-2">
               <span>Anyone riding in Aspen next week?</span>
               <span className="text-xs bg-gray-100 px-2 py-1 rounded">5 replies</span>
             </li>
          </ul>
        </div>
        <Button variant="secondary">Join the Waitlist</Button>
      </div>
    </div>
  );
};

export default Community;