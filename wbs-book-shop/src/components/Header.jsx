const Header = ({ setSelectedOption }) => {
  return (
    <header className="flex gap-3 p-4 bg-slate-100 rounded-md shadow-sm">
      <button
        type="button"
        className="px-4 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors"
        onClick={() => setSelectedOption('Shop')}
      >
        Shop
      </button>
      <button
        type="button"
        className="px-4 py-2 rounded-lg bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition-colors"
        onClick={() => setSelectedOption('Favourites')}
      >
        Favourites
      </button>
    </header>
  );
};

export default Header;