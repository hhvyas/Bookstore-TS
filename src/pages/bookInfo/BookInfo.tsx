import BookPreview from "../../components/bookPreview/BookPreview";
import useBookChange from "./useBookChange";
import BookDescription from "../../components/bookDescription/bookDescription/BookDescription";
import {
  BookItemContextProvider,
} from "../../contexts/bookCollectionContext";
import RelatedBooks from "../../components/relatedBooks/RelatedBooks";
import './BookInfo.css'

function BookInfo(): JSX.Element {
  // Returns book which will render through Params.
  const bookToBeDisplayed = useBookChange();
  return (
    <BookItemContextProvider value={bookToBeDisplayed}>
       <BookPreview />
      <BookDescription />
      <RelatedBooks />
    </BookItemContextProvider>
  );
}

export default BookInfo;
