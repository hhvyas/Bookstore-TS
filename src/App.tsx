import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BookCollectionContextProvider } from './contexts/bookCollectionContext';
import bookCollections from './data/booksData.json';
import BookInfo from './pages/bookInfo/BookInfo';
import AddBook from './components/addBookForm/AddBook';
function App() {
  return (
    <BookCollectionContextProvider value = {bookCollections}>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:currentBookID' element={<BookInfo />} />
          <Route path='/add-book' element={<AddBook />} />
        </Routes>
       </Router>
      </BookCollectionContextProvider>
  );
}

export default App;
