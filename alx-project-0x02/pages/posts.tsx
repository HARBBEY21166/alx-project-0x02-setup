import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

const PostsPage = ({ posts }) => {
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

// Fetch data at build time
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;