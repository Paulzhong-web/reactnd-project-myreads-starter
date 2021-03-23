import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BookShelf from "./BookShelf";
import "./App.css";

// set total book categories for the app
const bookCategories = [
  {
    id: 1,
    name: "Currently Reading",
    shelf: "currentlyReading",
  },
  {
    id: 2,
    name: "Want to Read",
    shelf: "wantToRead",
  },
  {
    id: 3,
    name: "Read",
    shelf: "read",
  },
];

class BooksApp extends React.Component {
  state = {
    books: [],
    query: "",
    newBooks: [],
  };

  // get initial data and fetch to main page
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
      // console.log(books)
    });
  }

  // define each book's drop down menu's current value
  getBookCategories = (selectedBook) => {
    const book = this.state.books.find((book) => book.id === selectedBook.id);
    if (book !== undefined && book.shelf !== undefined) {
      return book.shelf;
    } else {
      return "none";
    }
  };

  // search function in searchBook.js
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

  // handle event change on book selection
  handleChange = (event, updatedBook) => {
    BooksAPI.update(updatedBook, event).then((data) => {
      //update the shelf's value
      updatedBook.shelf = event;
      // console.log(updatedBook)
      // update the state 
      // 1. filter that the book which changed the shelf
      // 2. add it back to the books array and re-render the main page
      this.setState((prevState) => ({
        books: prevState.books
          .filter((book) => book.id !== updatedBook.id)
          .concat(updatedBook),
      }));
    });
    // console.log(this.state.books)
  };

  render() {
    const { handleChange, getBookCategories, updateQuery } = this;
    const { books, query, newBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={books}
              handleChange={handleChange}
              bookCategories={bookCategories}
              getBookCategories={getBookCategories}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              updateQuery={updateQuery}
              query={query}
              newBooks={newBooks}
              handleChange={handleChange}
              getBookCategories={getBookCategories}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
