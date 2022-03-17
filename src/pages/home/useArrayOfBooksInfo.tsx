import { useSearchParams } from "react-router-dom";
import {
  BookCollectionContextInterface,

} from "../../types/BookCollectionContextInterface";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";
export function useArrayOfBooksInfo() {
  const [searchParams] = useSearchParams();

  const { BooksInfo: storedBooks }: BookCollectionContextInterface =
    useBookCollectionUseContext();
  const receivedQueryFromAddress: string[] =
    searchParams.get("genre")?.split(",") ?? [];

  const booksFromLocalStorage = localStorage.getItem("bookCollection");

  const combinedBooks = [...storedBooks, ...JSON.parse(booksFromLocalStorage ?? "[]")]

  const arrayOfBooksInfo = receivedQueryFromAddress.length
    ? combinedBooks.filter((bookItem) => receivedQueryFromAddress.includes(bookItem.genre))
    : combinedBooks;

  return { arrayOfBooksInfo };
}
