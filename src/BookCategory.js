import React, { Component } from "react";
import PropTypes from "prop-types";
import BookInfo from "./BookInfo";

class BookCategory extends Component {
  render() {
    const { books, name, shelf } = this.props;
    // console.log(books)
    // console.log(shelf)
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
                      title={book.title}
                      authors={book.authors}
                      imageLinks={
                        book.imageLinks && book.imageLinks.smallThumbnail
                      }
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
