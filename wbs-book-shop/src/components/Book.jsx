const Book = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.description}</p>
      <p className="text-sm">Category: {book.category}</p>
      <p className="text-sm">Rating: {book.rating}</p>
      <p className="text-sm font-semibold">${book.price}</p>
    </div>
  );
};

export default Book;