import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

/**
 * A page to display a list of posts.
 * This version uses static mock data.
 */
const Posts: React.FC = () => {
  // Mock data to display a few posts
  const posts = [
    { id: 1, title: 'First Post', description: 'This is the description for the first post. It provides a brief summary of the content.' },
    { id: 2, title: 'Next.js Basics', description: 'Exploring the foundational concepts of a Next.js application, including routing and data fetching.' },
    { id: 3, title: 'State Management with React', description: 'A deep dive into different state management patterns, from useState to Context API and beyond.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow pt-20 pb-10">
        <div className="container px-4 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">Latest Posts</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} title={post.title} description={post.description} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Posts;
