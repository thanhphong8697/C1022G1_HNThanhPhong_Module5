import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getProductType } from "../service/productTypeService";
import { findById } from "../service/productService";
import { getProductEdit } from "../service/productService";
import { Field, Formik, Form } from "formik";





function ProductEdit() {
    const navigate = useNavigate();

    const param = useParams();

    const [products, setProducts] = useState()

    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = async() => {
        const productTypeDate = await getProductType()
        setProductTypes(productTypeDate.data);
    };

    const getProductDetail = async() => {
        const productDetailData = await findById(param.id)
        setProducts(productDetailData.data)
        } ;
  

    useEffect(() => {
        getProductTypes();
        getProductDetail();
    },[]);

    if(!products){
        return null;
    }

    return (
    <>
        <h1>ProductEdit</h1>
        <Formik
            initialValues={{
            id: products.id,
            name: products.name,
            productType: products.productType,
            price: products.price
            }}

            onSubmit={(values) => {
                try {
                    (async() => {
                        await getProductEdit({
                            ...values, productType: +values.productType,
                        });
                        navigate("/productList")
                    })();
                } catch (error) {
                    console.log(error);
                }
            
            }}
        >
            <Form>
                <div>
                    <label htmlFor="name">name</label>
                    <Field type ="text" id="name" name="name"/>
                </div>
                <div>
                    <label htmlFor="price">price</label>
                    <Field type ="text" id="price" name="price"/>
                </div>
                <div>
                    <label htmlFor="productType">type</label>
                    <Field as = "select" id="productType" name="productType">
                        <option value={""}>select</option>
                        {
                            productTypes.map((pt, index) => (
                                <option key={index} value={pt.id}>
                                    {pt.name}
                                </option>
                            ))
                        }
                    </Field>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </Form>
        </Formik>
    </>
    );
}

export default ProductEdit;