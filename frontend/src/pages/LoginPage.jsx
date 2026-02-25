import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: role === 'admin' ? 'System Admin' : 'Tourist User', email, role });
    navigate(role === 'admin' ? '/admin' : '/tourist');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{role === 'admin' ? 'Admin Login' : 'Tourist Login'}</h2>
      <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
      <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
      <button className="btn" type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
