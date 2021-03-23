import React from "react";
import BookInfo from "./BookInfo";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBooks = (props) => {
  const { query, newBooks, handleChange, getBookCategories, updateQuery } = props;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {newBooks &&
            newBooks.length > 0 &&
            newBooks.map((book) => (
              <BookInfo
                key={book.id}
                book={book}
                handleChange={handleChange}
                getBookCategories={getBookCategories}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  query: PropTypes.string.isRequired,
  newBooks: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  getBookCategories: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
};

export default SearchBooks;
