import { useNavigate } from "react-router";
import { getProductCreate } from "../service/productSer";
import { getProductType } from "../service/productTypeSer";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
function ProductCreate() {
  const navigate = useNavigate();
  const [productTypes, setproductTypes] = useState([]);

  const getProductTypeList = async () => {
    const getProductTypeData = await getProductType();
    setproductTypes(getProductTypeData.data);
  };

  useEffect(() => {
    getProductTypeList();
  }, []);

  return (
    <>
      <h1>create</h1>
      <Formik
        initialValues={{
          name: "",
          productType: "",
          price: "",
        }}
        onSubmit={(values) => {
          try {
            (async () => {
              await getProductCreate({
                ...values,
                productType: +values.productType
              });
              navigate("/product");
            })();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">name</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="price">price</label>
            <Field type="text" id="price" name="price" />
          </div>
          <div>
            <label htmlFor="productType">type</label>
            <Field as= "select" id= "productType" name= "productType">
                <option value={""}>select</option>
                {
                    productTypes.map((pt, index) => (
                        <option key={index} value={pt.id}>
                            {pt.name}
                        </option>
                    )
                    )
                }
            </Field>
          </div>
          <button type="submit">submit</button>
    
        </Form>
      </Formik>
    </>
  );
}
export default ProductCreate;
