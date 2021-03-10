import React from "react";
// import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BookShelf from "./BookShelf";
import "./App.css";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookShelf />} />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
