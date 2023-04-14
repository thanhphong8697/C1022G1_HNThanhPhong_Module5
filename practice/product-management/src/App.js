import { Route, Routes } from "react-router";
import ProductList from "./component/productList";
import ProductCreate from "./component/productCreate";
import ProductEdit from "./component/productEdit";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <Link to="/productList">List</Link>
    <Link to="/productCreate">Create</Link>
    
    <Routes>
      <Route path="/productList" element={<ProductList/>}/>
      <Route path="/productCreate" element={<ProductCreate/>}/>
      <Route path="product/:id/Edit" element={<ProductEdit/>}/>
    </Routes>
    </>
  );
}

export default App;
