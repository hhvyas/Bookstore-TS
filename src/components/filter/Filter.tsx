import React from "react";
import useFilter from "./useFilter";
import "./Filter.css";
import { useSearchParams } from "react-router-dom";
import getUpdatedGenre from "./getUpdatedGenre";
type FilterProps = {
  handlePageChange: (newCurrentActivePage: number) => void;
};

function Filter(props: FilterProps): JSX.Element {
  const { handlePageChange } = props;
  const { filterGenreArray } = useFilter();
  let [searchParams, setSearchParams] = useSearchParams();

  const currentgenres: string[] = searchParams.get("genre")?.split(",") ?? [];
  const handlegenreChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    const updategenres = getUpdatedGenre(currentgenres, event);
    !updategenres.length
      ? setSearchParams({})
      : setSearchParams({ genre: updategenres.join(",") });
    handlePageChange(1);
  };
  return (
    <div className="home-filter">
      <ul>
        {filterGenreArray.map((bookgenre, index) => {
          return (
            <li style={{ listStyleType: "none" }} key={index}>
              <input
                type="checkbox"
                value={`${bookgenre}`}
                onClick={handlegenreChange}
                checked={currentgenres.includes(bookgenre) ? true : false}
                id={bookgenre}
                readOnly
              />
              <label htmlFor={bookgenre}>{bookgenre}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
