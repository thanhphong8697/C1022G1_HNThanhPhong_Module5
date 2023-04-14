import { useNavigate } from "react-router";
import * as ProductTypeService from "../service/productTypeService"
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import {getProductCreate} from "../service/productService"

function ProductCreate() {
    const navigate = useNavigate();

    const [productType, setProductType] = useState([]);

    const getProductTypeList = async() => {
        const result = await ProductTypeService.getProductType();
        setProductType(result.data)
    }

    useEffect(() => {
        getProductTypeList()
    },[])


    return (
    <>
        <h1>ProductCreate</h1>
        <Formik
            initialValues={{
            name: "",
            productType: "",
            price: ""
            }}

            onSubmit={(values) => {
                try {
                    (async() => {
                        await getProductCreate({
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
                            productType.map((pt, index) => (
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

export default ProductCreate
