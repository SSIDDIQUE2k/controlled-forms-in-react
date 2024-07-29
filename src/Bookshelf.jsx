// Bookshelf.jsx
import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <br />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Add Book</button>
      </form>
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h2>{book.title}</h2>
            <p>By: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;