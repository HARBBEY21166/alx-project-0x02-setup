// components/common/Card.tsx
import { CardProps } from '@/interfaces';

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;