import books from '../../public/books.json';
import Book from './Book';

const Shop = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shop View</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
