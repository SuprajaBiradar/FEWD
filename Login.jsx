import React, {useState} from 'react';

const predefinedUsers = [
  {username: 'supraja', password: '1234'},
  {username: 'admin', password: 'admin123'},
];

const Login = ({onLogin}) => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
    const user = predefinedUsers.find (
      u => u.username === username && u.password === password
    );

    if (user) {
      onLogin (user.username);
      localStorage.setItem ('loggedInUser', user.username);
    } else {
      setError ('❌ Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername (e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword (e.target.value)}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Login;
