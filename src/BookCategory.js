import React, { Component } from "react";
import PropTypes from "prop-types";
import BookInfo from "./BookInfo";
// import * as BooksAPI from './BooksAPI';

class BookCategory extends Component {
  render() {
    const { books, name, shelf, handleChange, getBookCategories } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map(
                (book) =>
                  book.shelf === shelf && (
                    <BookInfo
                      key={book.id}
                      book={book}
                      handleChange={handleChange}
                      getBookCategories={getBookCategories}
                    />
                  )
              )}
          </ol>
        </div>
      </div>
    );
  }
}

BookCategory.propTypes = {
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
};

export default BookCategory;
