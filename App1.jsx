import React, {useState} from 'react';
import UserList from './components/Userlist';

const App = () => {
  const [showUserList] = useState (true);

  return (
    <div>
        {showUserList && <UserList />}
    </div>
  );
};

export default App;
