import { useEffect, useState } from "react";
import { getProduct } from "../service/productSer";
import { getProductType } from "../service/productTypeSer";

function ProductList() {
  const [products, setProducts] = useState([]);

  const [productTypes, setproductTypes] = useState([]);

  const getProductList = async () => {
    const getProductData = await getProduct();
    setProducts(getProductData.data);
  };

  const getProductTypeList = async () => {
    const getProductTypeData = await getProductType();
    setproductTypes(getProductTypeData.data);
  };

  useEffect(() => {
    getProductList();
    getProductTypeList();
  }, []);

  return (
    <>
      <h1>list</h1>
      <div style={{ marginTop: "31px" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                
                <td>
                    {
                        productTypes.filter((pt) => (
                            pt.id === product.productType
                        ))[0]?.name
                    }
                </td>
                
                <td>{product.price}</td>
                <td>
                  <button to="" className=" btn btn-primary">
                    Update
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProductList;
