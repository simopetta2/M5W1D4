import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './components/Mynav.jsx';
import MyFooter from './components/Myfooter.jsx';
import Welcome from './components/Welcome.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';
import { useState } from 'react';
import books from './books/horror.json'
import { BrowserRouter, Routes, Route } from "react-router";
import BookDetail from "./pages/BookDetail.jsx"
import NotFound from './pages/NotFound.jsx'
function App() {
  const [filteredBooks, setFilteredBooks] = useState(books)

  return (
    <>
      <Mynav setFilteredBooks={setFilteredBooks} />
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<>
            <Welcome />
            <AllTheBooks filteredBooks={filteredBooks} />
          </>} />
          <Route path="/:asin" element={<BookDetail />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </>
  )
}

export default App
