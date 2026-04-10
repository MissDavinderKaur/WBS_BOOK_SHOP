const Header = ({ setSelectedOption }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
      <button
        type="button"
        className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
        onClick={() => setSelectedOption('Home')} 
      >
        Home
      </button>
      <div className="flex gap-3">
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