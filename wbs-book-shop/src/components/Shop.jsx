// Browse all books

import books from '../../public/books.json';
import Book from './Book';

const Shop = () => {
  return (
    <div className="p-4 bg-pink-50">
      <h2 className="text-2xl font-bold mb-4">Shop View</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map(book => (
          <Book key={book.id} book={book} selectedOption="Shop" />
        ))}
      </div>
    </div>
  );
};

export default Shop;
