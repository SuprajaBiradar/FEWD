
import React, {useState, useEffect} from 'react';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState (null);

  useEffect (() => {
    const storedUser = localStorage.getItem ('loggedInUser');
    if (storedUser) {
      setUser (storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem ('loggedInUser');
    setUser (null);
  };

  return (
    <div>
      {user
        ? <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>Welcome, {user} 🎉</h2>
            <button
              onClick={handleLogout}
              style={{padding: '10px', marginTop: '20px'}}
            >
              Logout
            </button>
          </div>
        : <Login onLogin={setUser} />}
    </div>
  );
};

export default App;
