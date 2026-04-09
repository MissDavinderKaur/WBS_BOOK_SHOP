import { useState, useEffect } from 'react';
import Book from './Book';

const Favourites = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favourites View</h2>
      {favourites.length === 0 ? (
        <p>You haven't saved any books to Favourites yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favourites.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
