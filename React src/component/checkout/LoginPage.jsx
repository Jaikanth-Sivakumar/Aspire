import { useState } from 'react';
import { useAuth } from '../Navbar/AuthContext';
import './LoginPage.css'; // Assuming you have a separate CSS for the login page

function LoginPage({ onClose }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    // Mock user login for now (this can be replaced with real auth API)
    if (email === 'jai@gmail.com' && password === 'password') {
      login({ name: 'Jaikanth', email });
      setError('');
      onClose(); // Close the modal after successful login
    } else {
      setError('Invalid email or password');
    }
  }

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default LoginPage;
