import {
    useBookCollectionUseContext,
    useBookItemUseContext,
  } from "../../../contexts/bookCollectionContext";
export default function useRelatedBook() {
    const currentBook = useBookItemUseContext();
    const BookCollection = useBookCollectionUseContext();
  
    return BookCollection.BooksInfo.filter(
      (item) =>
        item.genre === currentBook.genre &&
        item.bookName !== currentBook.bookName
    ).slice(0, 4);
  }