// pages/about.tsx
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Our Project
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg text-gray-600 mb-6">
            This project demonstrates the implementation of various Next.js features
            and components. We're showcasing our understanding of React, TypeScript,
            and Tailwind CSS through practical examples.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Button Showcase
          </h2>
          
          <div className="space-y-4">
            <div className="flex space-x-4 items-center">
              <Button size="small" shape="rounded-sm">
                Small Button
              </Button>
              <Button size="medium" shape="rounded-md">
                Medium Button
              </Button>
              <Button size="large" shape="rounded-full">
                Large Button
              </Button>
            </div>

            <div className="flex space-x-4 items-center">
              <Button size="medium" shape="rounded-sm" className="bg-green-500 hover:bg-green-600">
                Custom Color
              </Button>
              <Button size="medium" shape="rounded-full" className="bg-purple-500 hover:bg-purple-600">
                Another Style
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Features
          </h2>
          <div className="space-y-3">
            <p className="text-gray-600">✓ TypeScript Integration</p>
            <p className="text-gray-600">✓ Tailwind CSS Styling</p>
            <p className="text-gray-600">✓ Responsive Design</p>
            <p className="text-gray-600">✓ Component Reusability</p>
            <p className="text-gray-600">✓ Modern React Patterns</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;