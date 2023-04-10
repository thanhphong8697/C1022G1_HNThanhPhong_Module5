import {contractMap} from "./contract";
import {customerMap} from "../customer/customer";
import {facilityMap} from "../facility/facility";
import { NavLink } from "react-router-dom";
export default function ContractList() {
    return (
        <>
        <div className="row b-0 p-0" style={{height: "50px", marginTop: '75px'}}>
        <div className="col-4 px-0">
          <NavLink to="/contract-create"
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
          <form
            className="container d-flex p-0"
            style={{ margin: 15 }}

          >
            <div className="col-10 p-0">
            <input
              type="text"
              className="form-control "
              name="search"
              id="search"
              placeholder="Search"
              style={{ width:"400px",float: "right" }}
            />
            </div>
            <div className="col-2 p-0">
            <span>
              <button className=" btn btn-secondary ml-1"  style={{height: "100%"}} type="submit">
                Search
              </button>
            </span>
            </div>
          </form>
        </div>
      </div>
        <div style={{marginTop: "32px"}}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Facility</th>
            <th scope="col">Start date</th>
            <th scope="col">Completion date</th>
            <th scope="col">Advance payment</th>
            <th scope="col">Total remaining payment</th>
            <th scope="col">Action</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {contractMap.map((contract, index) => (
            <tr key={index}>
            <td>{contract.contractId}</td>
            <td>
              {
                customerMap.filter((customer) => (
                  customer.id === contract.customerId
                ))[0].name
              }
            </td>
            <td>
              {
                facilityMap.filter((facility) => (
                  facility.id === contract.facilityId
                ))[0].name
              }
            </td>
            <td>{contract.startDate}</td>
            <td>{contract.completionDate}</td>
            <td>{contract.advancePayment}</td>
            <td>{contract.remainingPayment}</td>
            <td>
                  <a href="" className=" btn btn-primary">Update</a>
              </td>
              <td>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
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