import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;