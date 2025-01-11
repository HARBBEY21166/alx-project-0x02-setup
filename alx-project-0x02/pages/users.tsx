import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';

const UsersPage = ({ users }) => {
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

// Fetch data at build time
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;