const Book = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.description}</p>
      <p className="text-sm">Category: {book.category}</p>
      <p className="text-sm">Rating: {book.rating}</p>
      <p className="text-sm font-semibold">${book.price}</p>
      <span className="absolute bottom-2 right-2 text-red-500 text-2xl">❤️</span>
    </div>
  );
};

export default Book;