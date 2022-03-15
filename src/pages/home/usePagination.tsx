import { useMemo } from "react";
import {
    BookItemContextInterface,
  } from "../../types/BookCollectionContextInterface";

interface PropUsePagination {
    arrayOfBooksInfo: BookItemContextInterface[],
    numberOfEntries: number
}

export default function usePagination(props:PropUsePagination):number[] {

    const { arrayOfBooksInfo, numberOfEntries } = props;

    const lengthOfPagination = useMemo(() => {
        if (arrayOfBooksInfo) {
          return (
            arrayOfBooksInfo.length / numberOfEntries +
            (arrayOfBooksInfo.length % numberOfEntries ? 1 : 0)
          );
        }
      }, [arrayOfBooksInfo, numberOfEntries]);
      const paginationCount = useMemo(() => {
        const returnArrayOfPageNumbers: number[] = [];
        if (lengthOfPagination) {
          for (let pageNumber = 1; pageNumber <= lengthOfPagination; pageNumber++) {
            returnArrayOfPageNumbers.push(pageNumber);
          }
        }
        return returnArrayOfPageNumbers;
      }, [lengthOfPagination]);
      return paginationCount;
}