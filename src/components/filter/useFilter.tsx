import { useMemo } from "react";
import { useBookCollectionUseContext } from "../../contexts/bookCollectionContext";

export default function useFilter(){
    const bookCollection = useBookCollectionUseContext();
    let bookCollectionFromLocalStorage = useMemo(() => [], []);
    if (localStorage.getItem('bookCollection')){
      bookCollectionFromLocalStorage  = JSON.parse(localStorage.getItem('bookCollection') ?? '');
    }else{
      bookCollectionFromLocalStorage = [];
    }
    const filterGenreArray: string[] = useMemo(() => {
      const returnGenreArray: string[] = [];

      const newBookCollection = [...bookCollection.BooksInfo, ...bookCollectionFromLocalStorage];

      newBookCollection.forEach(
        (bookItem) =>
          !returnGenreArray.includes(bookItem.genre) &&
          returnGenreArray.push(bookItem.genre)
      );
      return returnGenreArray;
    }, [bookCollection, bookCollectionFromLocalStorage]);
    return { filterGenreArray };
  }