import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default PostCard;