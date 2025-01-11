// components/common/UserCard.tsx
import { UserProps } from '@/interfaces';
import Button from './Button';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-xl">
              {name.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-600">
              {email}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Address</h4>
          <p className="text-gray-700">
            {address.street}
          </p>
          <p className="text-gray-700">
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <Button 
            size="small" 
            shape="rounded-md"
            className="bg-gray-500 hover:bg-gray-600"
          >
            View Profile
          </Button>
          <Button 
            size="small" 
            shape="rounded-md"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;