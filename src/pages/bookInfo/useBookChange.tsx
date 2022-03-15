import { useState, useEffect } from "react";
import { BookItemContextInterface } from "../../types/BookCollectionContextInterface";
import { useParams } from "react-router-dom";
import { bookItemInitialValue } from "../../contexts/initialValues";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";
import { BookCollectionContextInterface } from "../../types/BookCollectionContextInterface";
export default function useBookChange(): BookItemContextInterface {
  let { currentBookID } = useParams();
  const [bookToBeDisplayed, SetBookToBeDisplayed] =
    useState(bookItemInitialValue);
    let bookCollections: BookCollectionContextInterface

    bookCollections = useBookCollectionUseContext();

    if (localStorage.getItem('BookCollection')){
      bookCollections.BooksInfo.push(...JSON.parse(localStorage.getItem('BookCollection') ?? ''))
    }

  currentBookID = currentBookID && currentBookID.split("-")[0];

  useEffect(() => {
    for (let i = 0; i < bookCollections.BooksInfo.length; i++) {
      const currentBook = bookCollections.BooksInfo[i];
      if (currentBook["bookID"] === currentBookID) {
        SetBookToBeDisplayed(currentBook);
        window.scrollTo(0, 0);
      }
    }
  }, [currentBookID, bookCollections]);
  return bookToBeDisplayed;
}
