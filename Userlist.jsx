import React, {useEffect, useState} from 'react';

const UserList = () => {
  const [users, setUsers] = useState ([]);

  useEffect (() => {
    console.log ('✅ Component mounted');

    // Fetch user data
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json ())
      .then (data => {
        setUsers (data);
        console.log ('📦 User data loaded');
      })
      .catch (error => {
        console.error ('❌ Error fetching data:', error);
      });

    return () => {
      console.log ('❎ Component unmounted');
    };
  }, []);

  return (
    <div className="user-wrapper">
      <style>
        {`
          .user-wrapper {
            padding: 20px;
            font-family: sans-serif;
          }
          .user-card {
            margin-bottom: 10px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: #f0f8ff;
          }
        `}
      </style>

      <h2>User List</h2>
      {users.length === 0
        ? <p>Loading users...</p>
        : users.map (user => (
            <div key={user.id} className="user-card">
              <strong>{user.name}</strong>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))}
    </div>
  );
};

export default UserList;
