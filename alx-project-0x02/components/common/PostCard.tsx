// components/common/PostCard.tsx
import { PostProps } from '@/interfaces';
import Button from './Button';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {title}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            User {userId}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">
          {content}
        </p>
        
        <div className="flex justify-end space-x-2">
          <Button 
            size="small" 
            shape="rounded-md"
            className="bg-gray-500 hover:bg-gray-600"
          >
            Share
          </Button>
          <Button 
            size="small" 
            shape="rounded-md"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;