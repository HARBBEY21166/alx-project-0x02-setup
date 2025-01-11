import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
      ))}
    </div>
  );
};

export default PostsPage;