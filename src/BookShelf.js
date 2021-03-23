import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookCategory from "./BookCategory";

class BookShelf extends Component {
  render() {
    const {
      books,
      handleChange,
      bookCategories,
      getBookCategories,
    } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookCategories.map((bookCategory) => (
            <BookCategory
              getBookCategories={getBookCategories}
              key={bookCategory.id}
              name={bookCategory.name}
              shelf={bookCategory.shelf}
              books={books}
              handleChange={handleChange}
            />
          ))}
        </div>
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookShelf;
