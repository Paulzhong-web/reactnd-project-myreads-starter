import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
// import PropTypes from 'prop-types';
import BookInfo from "./BookInfo";
import { Link } from "react-router-dom";

class SearchBooks extends Component {
  state = {
    query: "",
    newBooks: [],
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));

    if (query.trim().length > 0) {
      BooksAPI.search(query).then((books) => {
        books !== undefined &&
          this.setState(() => ({
            newBooks: books,
          }));
      });
    } else {
      this.setState(() => ({
        newBooks: [],
        query: "",
      }));
    }
  };

  render() {
    const { query, newBooks } = this.state;
    // console.log(this.state)
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
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {newBooks &&
              newBooks.length > 0 &&
              newBooks.map((newbook) => (
                <BookInfo
                  key={newbook.id}
                  title={newbook.title}
                  authors={newbook.authors}
                  imageLinks={
                    newbook.imageLinks && newbook.imageLinks.smallThumbnail
                  }
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
