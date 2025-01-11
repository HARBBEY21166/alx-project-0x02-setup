// pages/posts.tsx
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import Button from '@/components/common/Button';
import { PostProps } from '@/interfaces';

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const transformedPosts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId
        }));
        setPosts(transformedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = (newPost: { title: string; content: string }) => {
    // In a real application, you would make an API call here
    const post: PostProps = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      userId: 1 // Using a default userId for demonstration
    };
    
    setPosts([post, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Posts
          </h1>
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Create Post
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="text-xl text-gray-600">Loading posts...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreatePost}
        />
      </main>
    </div>
  );
};

export default Posts;