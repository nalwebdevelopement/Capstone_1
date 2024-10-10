import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = ({ onLogin }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Initialize useNavigate hook
  const navigate = useNavigate();

  
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      console.log(response.data)
      const { token, role } = response.data;

      
      localStorage.setItem('token', token);

     
      setUser({ username, role });

     
      onLogin(role);

      
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
    <div className="maincontainer-img">
      <img
              src="https://images.hebcdn.com/9E1HTV21/at/mfwssvmt4ckfgh4bwzp4h3mq/100924-seasonal-produce-desktop-hero-1376x300.jpg?auto=webp&format=jpg&max_age=2592000&optimize=high&width=2752"
              alt="img-main"
              style={{ width: "100%", height: "500px" }}
            />
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
      <p> Register</p>
    </div>
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