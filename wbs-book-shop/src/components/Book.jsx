const Book = ({ book }) => {
  const handleHeartClick = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    const isFavourite = favourites.some(fav => fav.id === book.id);
    if (!isFavourite) { //book is not in favourites, add it
        favourites.push(book);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        }
    };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.description}</p>
      <p className="text-sm">Category: {book.category}</p>
      <p className="text-sm">Rating: {book.rating}</p>
      <p className="text-sm font-semibold">${book.price}</p>
      <button
        className="absolute bottom-2 right-2 text-red-500 text-2xl bg-transparent border-none cursor-pointer"
        onClick={handleHeartClick}>
        ❤️
      </button>
    </div>
  );
};

export default Book;