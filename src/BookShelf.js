import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import BookInfo from "./BookInfo";
import BookCategory from './BookCategory';

class BookShelf extends Component {
  render() {
    // console.log(this.props.books);
    const bookCategories = [
        {
            id: 1,
            name: 'Currently Reading'
        },
        {
            id: 2,
            name: 'Want to Read'
        },
        {
            id: 3,
            name: 'Read'
        },
    ];
    const { books } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
              bookCategories.map((bookCategory) => (
                  <BookCategory 
                    key={bookCategory.id} 
                    name={bookCategory.name}
                    books={books}
                />
              ))
          }
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
