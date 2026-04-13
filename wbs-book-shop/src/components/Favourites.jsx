// Display "Favorite" books

import { useState, useEffect } from 'react';
import Book from './Book';

const Favourites = ({ setSelectedOption }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favourites') || '[]');
    setFavourites(favs);

    const handleUpdate = () => {
      const favs = JSON.parse(localStorage.getItem('favourites') || '[]');
      setFavourites(favs);
    };

    window.addEventListener('favouritesUpdated', handleUpdate);
    return () => window.removeEventListener('favouritesUpdated', handleUpdate);
  }, []);

  return (
    <div className="p-4 bg-pink-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Favourites</h2>
      {favourites.length === 0 ? (
        <p className="text-center">You haven't saved any books to Favourites yet</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favourites.map(book => (
            <Book key={book.id} book={book} selectedOption="Favourites" />
          ))}
        </div>
      )}
       <div className="flex justify-center">
          <button
            type="button"
            className="mt-4 px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
            onClick={() => setSelectedOption('Shop')}
          >
            Shop
          </button>
        </div>
    </div>
  );
};

export default Favourites;
