import React, { useState } from 'react';
import { authStore } from '../stores/auth';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const response = await authStore.logIn(username, password);

    if (response.ok) {
      onLoginSuccess();
    } else {
      alert('Login failed');
    }
  };

  return (
    <form className="w-25 m-auto mt-5 p-5 bg-light" onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
