import React, { Component } from "react";
import BookInfo from "./BookInfo";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  render() {
    const { query, newBooks, handleChange, getBookCategories } = this.props;
    console.log(newBooks);
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
              onChange={(event) => this.props.updateQuery(event.target.value)}
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
  }
}

export default SearchBooks;
