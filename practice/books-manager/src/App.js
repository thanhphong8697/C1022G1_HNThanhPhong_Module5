// import logo from './logo.svg';
import './App.css';
import BooksList from './component/bookList';
import { Route, Routes } from 'react-router-dom';
import BooksCreate from './component/bookCreate';
import { ToastContainer } from 'react-toastify';
import BookUpdate from './component/bookUpdate';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<BooksList/>}/>
      <Route path='/create' element={<BooksCreate/>}/>
      <Route path='/update/:id' element={<BookUpdate/>}/>
      
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
