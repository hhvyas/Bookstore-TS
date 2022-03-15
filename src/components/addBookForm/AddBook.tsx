import React from "react";
import { BookItemContextProvider } from "../../contexts/bookCollectionContext";
import { bookItemInitialValue } from "../../contexts/initialValues";
import { BookCollectionContextInterface } from "../../types/BookCollectionContextInterface";
import "./AddBook.css";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const bookInitialValue = {
  bookID: "",
  bookName: "",
  genre: "",
  seller: "",
  quantitiyLeft: 0,
  price: 0,
  likes: 0,
  author: "",
  publisher: "ABC Pvt. Limited",
  edition: "",
  binding: "",
  language: "",
  pages: 0,
  condition: "",
  imageURL: "",
  summary: "",
};

type BookProperties = keyof typeof bookItemInitialValue;

const formTags: {
  input_name: BookProperties;
  text: string;
  type: "text" | "number";
}[] = [
  {
    input_name: "bookName",
    text: "Book Name",
    type: "text",
  },
  {
    input_name: "genre",
    text: "Genre",
    type: "text",
  },
  {
    input_name: "seller",
    text: "Seller",
    type: "text",
  },
  {
    input_name: "quantitiyLeft",
    text: "No. Of Books",
    type: "number",
  },
  {
    input_name: "price",
    text: "Price of One Book",
    type: "text",
  },
  {
    input_name: "author",
    text: "Author",
    type: "text",
  },

  {
    input_name: "edition",
    text: "Edition",
    type: "text",
  },
  {
    input_name: "binding",
    text: "Binding",
    type: "text",
  },
  {
    input_name: "language",
    text: "Language",
    type: "text",
  },
  {
    input_name: "pages",
    text: "No. of Pages",
    type: "number",
  },
  {
    input_name: "condition",
    text: "Condition of Book",
    type: "text",
  },
  {
    input_name: "imageURL",
    text: "URL of Book Image",
    type: "text",
  },
];


function AddBook() {
  const [book, setBook] = React.useState(bookInitialValue);
  const BooksCollection = useBookCollectionUseContext();
  const handleChange = (event: any): void => {
    setBook((prevBook) => {
      return {
        ...prevBook,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    



    let newBook = book;
    let derivedBook_ID = String(
      +BooksCollection.BooksInfo[BooksCollection.BooksInfo.length - 1].bookID +
        Math.random()
    );
    newBook.bookID = derivedBook_ID;
    if (localStorage.getItem("BookCollection")) {
      console.log("It matched");
      let bookFromLocalStorage = JSON.parse(
        localStorage.getItem("BookCollection") ?? ""
      );
      bookFromLocalStorage.push(newBook);
      localStorage.removeItem("BookCollection");
      localStorage.setItem(
        "BookCollection",
        JSON.stringify(bookFromLocalStorage)
      );
    } else {
      let newBooks = [];
      newBooks.push(newBook);
      localStorage.setItem("BookCollection", JSON.stringify(newBooks));
    }
    setBook(bookInitialValue);
  };

  return (
    <>
      <Link to="/" className="back-button-link">
        <IoIosArrowBack className="back-button-icon" />
      </Link>
      <form className='book-form-main' onSubmit={handleSubmit}>
      <h3 className="heading">Add Book to Sell</h3>
        <div className="book-form">
        <>
          {formTags.map((formInputElement) => (
            <div
              className="book-form-container"
              key={JSON.stringify(formInputElement)}
            >
              <div className="book-form-label">
                <label htmlFor="book_name">
                  {formInputElement.text}
                  <span>*</span>
                </label>
              </div>
              <div className="book-form-input">
                <input
                  type={formInputElement.type}
                  id="book_name"
                  name={formInputElement.input_name}
                  value={book[formInputElement.input_name]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
        </>
        <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddBook;
