// pages/home.tsx
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import { useState } from 'react';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Our Next.js Project
        </h1>
        
        {showWelcome && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="text-lg text-gray-600 mb-4">
              This is our home page where we'll showcase various components and features
              of our Next.js application. Feel free to explore the different sections
              and interact with our components.
            </p>
            <Button 
              size="medium" 
              shape="rounded-md"
              onClick={() => setShowWelcome(false)}
            >
              Dismiss Welcome
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Feature Section 1
            </h2>
            <p className="text-gray-600">
              This section demonstrates the use of our grid layout and card-like
              styling. We'll add more interactive components here later.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Feature Section 2
            </h2>
            <p className="text-gray-600">
              Another section showcasing our layout capabilities. This will be
              enhanced with more components as we build them.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;