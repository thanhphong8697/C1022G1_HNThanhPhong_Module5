import { useEffect, useState } from "react";
import * as getProducts from "../service/productService"
import * as getProductType from "../service/productTypeService"
import { Link } from "react-router-dom";
import { deleteModal } from "./modalDelete";

function ProductList() {
    const [products, setProducts] = useState([]);

    const [productTypes, setProductTypes] = useState([]);

    const handleDeleteProduct = (productName, productId) => {
        deleteModal(
            `abc ${productName}?`,
            async() => {
                await getProducts.getProductDelete(productId);
                getProductList();
            }
        )

    }

    const getProductList = async() => {
        const result = await getProducts.getProducts();
        setProducts(result.data)
    }

    const getProductTypeList = async() => {
        const result = await getProductType.getProductType();
        setProductTypes(result.data)
    }

    useEffect(() => {
        getProductList();
        getProductTypeList();
    },[])

    return (
    <>
        <h1>ProductList</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{productTypes.filter(
                                (pt) => pt.id === product.productType
                            )[0]?.name}</td>
                            <td>{product.price}</td>
                            <td>
                            <Link to={`/product/${product.id}/Edit`}>Edit</Link>
                            </td>
                            <td>
                                <button type="button" onClick={() => {
                                    handleDeleteProduct(product.name, product.id)
                                }} >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </>
    );
}

export default ProductList;