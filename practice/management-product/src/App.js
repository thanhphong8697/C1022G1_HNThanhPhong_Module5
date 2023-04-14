import { Route, Routes } from "react-router";
import ProductList from "./component/productList";
import ProductCreate from "./component/productCreate";
import ProductEdit from "./component/productEdit";
import { Link } from "react-router-dom";


function App() {
  return (
    <>
    <Link to="/product">List</Link>
    <Link to="/productCreate">create</Link>
    <Link to="/product/edit/:id">edit</Link>

    <Routes>
      <Route path="/product" element={<ProductList/>}/>
      <Route path="/productCreate" element={<ProductCreate/>}/>
      <Route path="/product/edit/:id" element={<ProductEdit/>}/>
    </Routes>
    </>
  );
}

export default App;
