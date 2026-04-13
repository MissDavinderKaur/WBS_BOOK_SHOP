// Browse all books

import { useState, useEffect } from 'react';
import books from '../../public/books.json';
import Book from './Book';

const Shop = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    let filtered = books;

    // Filter by search input
    if (searchInput.trim() !== '') {
      const searchLower = searchInput.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (selectedCategory !== '') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    setFilteredBooks(filtered);
  }, [searchInput, selectedCategory]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="p-4 bg-pink-50">
      <div className="mb-4 flex justify-center">
        <div className="flex gap-2 w-full max-w-md">
          <input 
            type="text" 
            placeholder="Search books..." 
            className="flex-1 px-4 py-2 border rounded border-red-500"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button 
            className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
            onClick={() => {}} // Search is now automatic
          >
            Search
          </button>
        </div>
      </div>
      <div className="mb-4 flex justify-center gap-4">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedCategory('Strategy')}
        >
          Strategy
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedCategory('Systems')}
        >
          Systems
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => setSelectedCategory('People')}
        >
          People
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg border-2 border-red-500 text-red-500 bg-transparent font-semibold hover:bg-red-500 hover:text-white transition-colors"
          onClick={() => { setSelectedCategory(''); setSearchInput(''); }}
        >
          All
        </button>
      </div>
      {filteredBooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No books to show!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map(book => (
            <Book key={book.id} book={book} selectedOption="Shop" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
