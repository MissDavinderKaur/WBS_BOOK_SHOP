import { useState, useEffect } from 'react';

const Header = ({ setSelectedOption }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
      const storedEmail = localStorage.getItem('email') || '';
      setLoggedIn(isLoggedIn);
      setUserEmail(storedEmail);
    };

    // Check on mount
    checkLoginStatus();

    // Listen for storage changes (from other components/tabs)
    const handleStorageChange = (e) => {
      if (e.key === 'loggedIn' || e.key === 'email') {
        checkLoginStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  return (
    <header className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedOption('Home')} 
        >
          Home
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {loggedIn && (
          <span className="text-red-500 font-semibold">Hello {userEmail}!</span>
        )}
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedOption('Shop')}
        >
          Shop
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedOption('Favourites')}
        >
          Favourites
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedOption('Login')}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;