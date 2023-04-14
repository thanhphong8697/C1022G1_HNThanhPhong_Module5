import { Route, Routes } from "react-router";
import BookList from "./component/bookList";
import BookCreate from "./component/bookCreate";
import BookEdit from "./component/bookEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/book" element={<BookList/>}/>
        {/* <Route path="/book/create" element={<BookCreate/>}/>
        <Route path="/book/edit/:id" element={<BookEdit/>}/> */}
      </Routes>
    </>
  );
}

export default App;
