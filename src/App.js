import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BookShelf from "./BookShelf";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    // console.log(this.state.books);
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookShelf books={books} />} />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
