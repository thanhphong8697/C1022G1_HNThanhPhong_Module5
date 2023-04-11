// import {customerMap} from "./customer"
// import {customerType} from "./customerType";
import { NavLink } from "react-router-dom";
import { customerService } from "../../service/customer/customerService";
import { customerTypeService } from "../../service/customer/customerTypeService";
// import { Form, Field, Formik } from "formik";
import { useEffect, useState } from "react";
export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const [customerType, setCustomerType] = useState([]);

  useEffect(() => {
    getCustomerList();
    getCustomerTypeList();
  }, []);

  

  const getCustomerList = async () => {
    const customerData = await customerService.listAll();
    setCustomerList(customerData.data);
  };

  const getCustomerTypeList = async () => {
    const customerTypeData = await customerTypeService.listAll();
    setCustomerType(customerTypeData.data);
    console.log(customerTypeData.data);
  };

  // if(!customerType){
  //   return null;
  // }
  return (
    <>
      {console.log(typeof customerList[0]?.customerType)}
      <div
        className="row b-0 p-0"
        style={{ height: "50px", marginTop: "75px" }}
      >
        <div className="col-4 px-0">
          <NavLink
            to="/customer-create"
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: "#f0715f",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // margin: "15px 0px"
            }}
            type="button"
            className="btn "
            data-bs-toggle="modal"
            data-bs-target="#modalCreate"
          >
            Create new Customer
          </NavLink>
        </div>
        <div className="col-8 ">
          <form className="container d-flex p-0" style={{ margin: 15 }}>
            <div className="col-10 p-0">
              <input
                type="text"
                className="form-control "
                name="search"
                id="search"
                placeholder="Search"
                style={{ width: "400px", float: "right" }}
              />
            </div>
            <div className="col-2 p-0">
              <span>
                <button
                  className=" btn btn-secondary ml-1"
                  style={{ height: "100%" }}
                  type="submit"
                >
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div style={{ marginTop: "31px" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Identity</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Customer type</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer) => (
              <tr key={customer.id}>
                <th>{customer.id}</th>
                <td>{customer.name}</td>
                <td>{customer.dateOfBirth}</td>
                <td>{parseInt(customer.gender) === 0 ? "Nam" : "Nữ"}</td>
                <td>{customer.identity}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>
                  {
                    customerType.filter(
                      type => type.id == customer.customerType
                    )[0]?.type
                  }
                </td>
                <td>
                  <NavLink to="/customer-update" className=" btn btn-primary">Update</NavLink>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
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
