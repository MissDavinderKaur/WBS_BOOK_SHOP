// Display top 5 Books

import books from '../../public/books.json';

const Home = ({ setSelectedOption }) => {
  const randomBooks = books.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div className="p-4 bg-pink-50 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Top 5 Books</h2>
        <br />
        <ol className="list-decimal list-inside mb-6 inline-block text-left">
          {randomBooks.map((book, index) => (
            <li key={book.id} className="text-lg mb-2">{book.title} <em>({book.author})</em></li>
          ))}
        </ol>
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
    </div>
  );
};

export default Home;