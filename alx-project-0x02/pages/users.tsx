import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <h1>Users Page</h1>
      {users.map((user) => (
        <User Card key={user.id} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  );
};

export default UsersPage;