import books from '../../public/books.json';

const Home = ({ setSelectedOption }) => {
  const randomBooks = books.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="p-4 bg-pink-50">
      <h2 className="text-2xl font-bold mb-4">Top 5 Books</h2>
      <ol className="list-decimal list-inside">
        {randomBooks.map((book, index) => (
          <li key={book.id} className="text-lg mb-2">{book.title}</li>
        ))}
      </ol>
      <button
        type="button"
        className="mt-4 px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
        onClick={() => setSelectedOption('Shop')}
      >
        Shop
      </button>
    </div>
  );
};

export default Home;