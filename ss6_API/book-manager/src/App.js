import './App.css';
import {Route, Routes } from 'react-router-dom';
import BookCreate from './bookCreate';
import BookList from './bookList';
import BookUpdate from './bookUpdate';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BookList/>} />
        <Route path='/create' element={<BookCreate/>} />
        <Route path='/update/:id' element={<BookUpdate/>} />
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
