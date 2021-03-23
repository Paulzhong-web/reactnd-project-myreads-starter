import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookCategory from "./BookCategory";

const BookShelf = (props) => {
  const { books, handleChange, bookCategories, getBookCategories } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookCategories.map((bookCategory) => (
          <BookCategory
            key={bookCategory.id}
            books={books}
            handleChange={handleChange}
            bookCategory={bookCategory}
            getBookCategories={getBookCategories}
          />
        ))}
      </div>
      <Link to="/search" className="open-search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  bookCategories: PropTypes.array.isRequired,
  getBookCategories: PropTypes.func.isRequired,
};

export default BookShelf;
