import React from "react";
import PropTypes from "prop-types";
import BookInfo from "./BookInfo";

const BookCategory = (props) => {
  const { books, handleChange, getBookCategories } = props;
  const { name, shelf } = props.bookCategory;
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
};

BookCategory.propTypes = {
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  getBookCategories: PropTypes.func.isRequired,
  bookCategory: PropTypes.object.isRequired,
};

export default BookCategory;
