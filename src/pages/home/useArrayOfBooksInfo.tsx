import { useSearchParams } from "react-router-dom";
import {
  BookCollectionContextInterface,
  BookItemContextInterface,
} from "../../types/BookCollectionContextInterface";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";
export default function useArrayOfBooksInfo() {
  let [searchParams] = useSearchParams();

  let bookCollections: BookCollectionContextInterface

    bookCollections = useBookCollectionUseContext();
  const receivedQueryFromAddress: string[] =
    searchParams.get("genre")?.split(",") ?? [];

  let arrayOfBooksInfo: BookItemContextInterface[] = bookCollections.BooksInfo;

  
  console.log('arrayOfBooksInfo', arrayOfBooksInfo);
    if (localStorage.getItem('BookCollection')){
      arrayOfBooksInfo = [...arrayOfBooksInfo, ...JSON.parse(localStorage.getItem('BookCollection') ?? '')];
    }
    if (receivedQueryFromAddress) {
      arrayOfBooksInfo = arrayOfBooksInfo.filter((bookItem) =>
      receivedQueryFromAddress.includes(bookItem.genre)
      );
    }
    console.log('arrayOfBooksInfo', arrayOfBooksInfo)
    if (!arrayOfBooksInfo.length) {
      if (localStorage.getItem('BookCollection')){
        arrayOfBooksInfo = bookCollections.BooksInfo;
        arrayOfBooksInfo = [...arrayOfBooksInfo, ...JSON.parse(localStorage.getItem('BookCollection') ?? '')];
      }
      else
        arrayOfBooksInfo = bookCollections.BooksInfo
    }

  return { arrayOfBooksInfo }
}
