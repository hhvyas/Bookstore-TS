import React, { useState } from "react";
import { BookItemContextInterface } from "../../types/BookCollectionContextInterface";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/pagination/Footer";
import BookList from "../../components/bookList/BookList";
import usePagination from "./usePagination";
import useWhichBooksToBeRendered from "./useWhichBooksToBeRendered";
import useArrayOfBooksInfo from "./useArrayOfBooksInfo";
import "./Home.css";

const numberOfEntries: number = 8;
function Home(): JSX.Element {
  const [currentActivePage, setCurrentActivePage] = useState(1);

  const { arrayOfBooksInfo } = useArrayOfBooksInfo();
  console.log(arrayOfBooksInfo);
  const paginationCount = usePagination({ arrayOfBooksInfo, numberOfEntries });

  const booksToBeRendered: BookItemContextInterface[] =
    useWhichBooksToBeRendered({
      currentActivePage,
      arrayOfBooksInfo,
      numberOfEntries,
    });

  const handlePageChange = React.useCallback((newCurrentActivePage: number) => {
    setCurrentActivePage(newCurrentActivePage);
  }, []);

  return (
    <>
      <div className="home-body">
        <BookList booksToBeRendered={booksToBeRendered} />
        <Filter handlePageChange={handlePageChange} />
      </div>
      <Footer
        paginationCount={paginationCount}
        handlePageChange={handlePageChange}
        currentActivePage={currentActivePage}
      />
    </>
  );
}

export default Home;
