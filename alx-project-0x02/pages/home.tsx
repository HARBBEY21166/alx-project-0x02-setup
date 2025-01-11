import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSubmit = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <button onClick={handleOpenModal}>Add Post</button>
      {isModalOpen && (
        <PostModal onClose={handleCloseModal} onSubmit={handleSubmit} />
      )}
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default HomePage;