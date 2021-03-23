import React, { Component } from "react";
// import PropTypes from "prop-types";

class BookInfo extends Component {
  render() {
    const { book, handleChange, getBookCategories } = this.props;
    const { title, authors, imageLinks } = this.props.book;
    return (
      <li
        style={{
          listStyleType: "none",
        }}
      >
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageLinks &&
                  imageLinks.smallThumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={(event) => handleChange(event.target.value, book)}
                value={getBookCategories(book)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors &&
              authors.length > 0 &&
              authors.map((author) => <p key={author}>{author}</p>)}
          </div>
        </div>
      </li>
    );
  }
}

// BookInfo.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default BookInfo;
