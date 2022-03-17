import React, { useState } from "react";
import { bookItemInitialValue } from "../../contexts/initialValues";
import { BookCollectionContextInterface, BookItemContextInterface } from "../../types/BookCollectionContextInterface";
import "./AddBook.css";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
// import bookCollectionData from '../../data/booksData.json';
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

const forbiddenValues = bookInitialValue;

const getBookID = (bookCollection: BookCollectionContextInterface) => {
  const derivedBook_ID = localStorage.getItem("bookCollection")
    ? String(
        JSON.parse(localStorage.getItem("bookCollection") ?? "")[0].bookID + 1
      )
    : String(
        Number(
          bookCollection.BooksInfo[bookCollection.BooksInfo.length - 1].bookID
        ) + 1
      );
  return derivedBook_ID;
};

const checkIfBookAdded = (navigate: any, newBookID: string) => {
  const updatedLocalStorage = localStorage.getItem("bookCollection");
    if (updatedLocalStorage) {
      const arrayOfBooks: BookItemContextInterface[] = JSON.parse(
        updatedLocalStorage ?? ""
      );
      if (arrayOfBooks[0].bookID === newBookID) {
        alert("Book Successfully Added!");
        navigate("/");
      } else {
        alert("There was some error!");
      }
    }
}

function AddBook() {
  const [book, setBook] = React.useState(bookInitialValue);
  const navigate = useNavigate();
  const inputRefs = React.useRef<any>([]);
  const [error, setError] = useState("");
  const bookCollection = useBookCollectionUseContext();
  const localStorageBookItems = localStorage.getItem('bookCollection')
  const handleChange = (event: any): void => {
    setBook((prevBook) => {
      return {
        ...prevBook,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    let flag = false;
    formTags.forEach((item) => {
      if (item.input_name === "bookID") {
        return;
      }
      const currentBook = book[item.input_name];
      const currentBook_forbiddenValue = forbiddenValues[item.input_name];

      if (currentBook === currentBook_forbiddenValue && !flag) {
        setError(
          `${item.text} should not be ${
            currentBook_forbiddenValue === ""
              ? "empty"
              : currentBook_forbiddenValue
          }`
        );
        console.log(formTags, item.input_name);
        const searchBook = {
          input_name: `${item.input_name}`,
          text: `${item.text}`,
          type: `${item.type}`,
        };
        let indexOfErrorElement = 0;
        for (let i = 0; i < formTags.length; i++) {
          if (searchBook.input_name === formTags[i].input_name) {
            indexOfErrorElement = i;
            break;
          }
        }
        inputRefs.current[indexOfErrorElement].focus();
        flag = true;
      }
    });
    if (flag) {
      flag = false;
      return;
    }
    setError("");
    const newBook = book;

    const newBookID = getBookID(bookCollection);

    newBook.bookID = newBookID;

    if (localStorageBookItems) {
      let bookFromLocalStorage = JSON.parse(
        localStorageBookItems ?? ""
      );
      bookFromLocalStorage.unshift(newBook);
      localStorage.removeItem("bookCollection");
      localStorage.setItem(
        "bookCollection",
        JSON.stringify(bookFromLocalStorage)
      );
    } else {
      let newBooks = [];
      newBooks.unshift(newBook);
      localStorage.setItem("bookCollection", JSON.stringify(newBooks));
    }

    
    checkIfBookAdded(navigate, newBookID);
    
    setBook(bookInitialValue);
  };

  return (
    <>
      <Link to="/" className="back-button-link">
        <IoIosArrowBack className="back-button-icon" />
      </Link>
      <form className="book-form-main" onSubmit={handleSubmit}>
        <h3 className="heading">Add Book to Sell</h3>
        <div className="book-form">
          <>
            {formTags.map((formInputElement, index) => (
              <div
                className="book-form-container"
                key={JSON.stringify(formInputElement.input_name)}
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
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                </div>
              </div>
            ))}
          </>
          <div>{error && <p className="error-msg">{error}</p>}</div>
          <div></div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddBook;
