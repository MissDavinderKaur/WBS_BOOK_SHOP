import { useState, useEffect } from 'react';

const Book = ({ book, selectedOption }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    setIsFavourite(favourites.some(fav => fav.id === book.id));
  }, []);

  const handleHeartClick = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    if (selectedOption === 'Shop') {
      // Toggle
      if (isFavourite) {
        const updatedFavourites = favourites.filter(fav => fav.id !== book.id);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        setIsFavourite(false);
      } else {
        favourites.push(book);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        setIsFavourite(true);
      }
    } else if (selectedOption === 'Favourites') {
      // Remove
      const updatedFavourites = favourites.filter(fav => fav.id !== book.id);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsFavourite(false);
    }
    window.dispatchEvent(new Event('favouritesUpdated'));
  };

  const heartSymbol = selectedOption === 'Shop' ? (isFavourite ? '❤️' : '♡') : '❤️';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <div className="w-full aspect-[3/4] overflow-hidden rounded">
        <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.description}</p>
      <p className="text-sm">Category: {book.category}</p>
      <p className="text-sm">Rating: {book.rating}</p>
      <p className="text-sm font-semibold">${book.price}</p>
      <button
        className="absolute bottom-2 right-2 text-red-500 text-2xl bg-transparent border-none cursor-pointer"
        onClick={handleHeartClick}
      >
        {heartSymbol}
      </button>
    </div>
  );
};

export default Book;