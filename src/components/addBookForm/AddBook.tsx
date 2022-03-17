import React, { useRef, useState } from "react";
import { bookItemInitialValue } from "../../contexts/initialValues";
import { BookItemContextInterface } from "../../types/BookCollectionContextInterface";
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

const forbiddenValues = bookInitialValue;

function AddBook() {
  const [book, setBook] = React.useState(bookInitialValue);
  const BooksCollection = useBookCollectionUseContext();
  const inputRefs = React.useRef<any>([]);
  const [error, setError] = useState("");
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
      let x = book[item.input_name];
      let y = forbiddenValues[item.input_name];

      if (x === y && !flag) {
        setError(`${item.text} should not be ${y === "" ? "empty" : y}`);
        console.log(formTags, item.input_name);
        const x = {
          input_name: `${item.input_name}`,
          text: `${item.text}`,
          type: `${item.type}`,
        };
        let indexOfErrorElement = 0;
        console.log("x.input_name", x.input_name);
        for (let i = 0; i < formTags.length; i++) {
          if (x.input_name === formTags[i].input_name) {
            console.log(inputRefs);
            indexOfErrorElement = i;
            break;
          }
        }

        console.log(indexOfErrorElement);
        inputRefs.current[indexOfErrorElement].focus();
        flag = true;
      }
    });
    if (flag) {
      flag = false;
      return;
    }
    setError("");
    let derivedBook_ID = "";
    let newBook = book;
    if (localStorage.getItem("BookCollection")) {
      const arrayOfBooks: BookItemContextInterface[] = JSON.parse(
        localStorage.getItem("BookCollection") ?? ""
      );
      let x = arrayOfBooks[0].bookID;
      derivedBook_ID = String(Number(x) + 1);
    } else {
      derivedBook_ID = String(
        Number(
          BooksCollection.BooksInfo[BooksCollection.BooksInfo.length - 1].bookID
        ) + 1
      );
    }
    newBook.bookID = derivedBook_ID;
    if (localStorage.getItem("BookCollection")) {
      let bookFromLocalStorage = JSON.parse(
        localStorage.getItem("BookCollection") ?? ""
      );
      bookFromLocalStorage.unshift(newBook);
      localStorage.removeItem("BookCollection");
      localStorage.setItem(
        "BookCollection",
        JSON.stringify(bookFromLocalStorage)
      );
    } else {
      let newBooks = [];
      newBooks.unshift(newBook);
      localStorage.setItem("BookCollection", JSON.stringify(newBooks));
    }

    if (localStorage.getItem("BookCollection")) {
      const arrayOfBooks: BookItemContextInterface[] = JSON.parse(
        localStorage.getItem("BookCollection") ?? ""
      );
      let x = arrayOfBooks[0].bookID;
      if (x === derivedBook_ID) {
        alert("Book Successfully Added!");
      } else {
        alert("There was some error!");
      }
    }
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
                    // ref={inputRefs}
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
