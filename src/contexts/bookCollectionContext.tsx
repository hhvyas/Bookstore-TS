import React, { useContext } from "react";
import {
  BookCollectionContextInterface,
  BookItemContextInterface,
} from "../types/BookCollectionContextInterface";
import {
  bookItemInitialValue,
} from "./initialValues";


const BookCollectionContext =
  React.createContext<BookCollectionContextInterface>(
    {BooksInfo: []}
  );
const BookItemContext =
  React.createContext<BookItemContextInterface>(bookItemInitialValue);

const BookCollectionContextProvider = BookCollectionContext.Provider;
const BookItemContextProvider = BookItemContext.Provider;

const useBookCollectionUseContext = () => {
  return useContext(BookCollectionContext);
};

const useBookItemUseContext = function () {
  return useContext(BookItemContext);
};

export {
  useBookCollectionUseContext,
  BookCollectionContextProvider,
  useBookItemUseContext,
  BookItemContextProvider,
};

// Comonent Name, Ty
