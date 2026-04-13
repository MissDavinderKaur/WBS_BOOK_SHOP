// Browse all books

import { useState } from 'react';
import books from '../../public/books.json';
import Book from './Book';

const Shop = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => {
        const searchLower = searchInput.toLowerCase();
        return (
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          book.description.toLowerCase().includes(searchLower)
        );
      });
      setFilteredBooks(filtered);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    
    // If input is cleared, show all books
    if (value.trim() === '') {
      setFilteredBooks(books);
    }
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
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
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
