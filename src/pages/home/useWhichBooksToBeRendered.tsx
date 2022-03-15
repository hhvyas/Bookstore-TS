import { useMemo } from "react";
import { BookItemContextInterface } from "../../types/BookCollectionContextInterface";

interface PropUseWhichBooksToBeRendered {
  arrayOfBooksInfo: BookItemContextInterface[];
  currentActivePage: number;
  numberOfEntries: number;
}

export default function useWhichBooksToBeRendered(
  props: PropUseWhichBooksToBeRendered
): BookItemContextInterface[] {
  const { arrayOfBooksInfo, currentActivePage, numberOfEntries } = props;

  const startIndexOfBookListData = (currentActivePage - 1) * numberOfEntries;
  const endIndexOfBookListData = startIndexOfBookListData + numberOfEntries;

  const booksToBeRendered: BookItemContextInterface[] = useMemo(
    () =>
      arrayOfBooksInfo.slice(startIndexOfBookListData, endIndexOfBookListData),
    [startIndexOfBookListData, endIndexOfBookListData, arrayOfBooksInfo]
  );
  return booksToBeRendered;
}
