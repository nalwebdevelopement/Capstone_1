import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  // Local state for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Initialize useNavigate hook
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      const { token, role } = response.data;

      // Optionally, store the token for authenticated requests
      localStorage.setItem('token', token);

      // Update parent component with login status and role
      onLogin(role);

      // Navigate based on role
      if (role === 'customer') {
        navigate('/shop');
      } else if (role === 'admin') {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-container">
        <img
              src="https://media4.giphy.com/media/fYNSIDot0a7AZuDWhl/giphy.gif?cid=6c09b952g58wltijf7vccg44h6eqaxgv7pcz483j28l4nfk4&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="img-main"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
      <h1> Entry Hub </h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

//******************* Version 1********************************************
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', {
//         username,
//         password,
//       });
//       const { role } = response.data;

//       // Redirect based on role
//       if (role === 'customer') {
//         navigate('/shop');
//       } else if (role === 'admin') {
//         navigate('/admin');
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//       alert('Invalid credentials, please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;