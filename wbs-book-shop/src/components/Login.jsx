// User login form

import { useState } from 'react';

const Login = ({ setSelectedOption }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert('Please fill in both email and password');
      return;
    }
    localStorage.setItem('loggedIn', JSON.stringify(true));
    localStorage.setItem('email', email);
    setEmail('');
    setPassword('');
    setSelectedOption('Shop');
  };

  return (
    <div className="p-4 bg-pink-50 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <form className="bg-white p-6 rounded-lg shadow-md border-2 border-red-500">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Login</h2>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;