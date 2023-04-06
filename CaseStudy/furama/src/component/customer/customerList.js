import customerMap from "./customer"
import customerType from "./customerType";
export default function CustomerList() {
    return (
      <>
        <div style={{marginTop: '75px'}}>
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
          {customerMap.map((customer) => (
              <tr key={customer.id}>
              <th>{customer.id}</th>
              <td>{customer.name}</td>
              <td>{customer.dateOfBirth}</td>
              <td>{customer.gender}</td>
              <td>{customer.identity}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customerType.filter(customerId => (
                customerId.id === customer.customerType
              ))[0].type}</td>
              <td>
                  <a href="" className=" btn btn-primary">Update</a>
              </td>
              <td>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Delete
                    </button>
              </td>
            </tr>
            )
          )}
        </tbody>
      </table>
</div>
</>
    );
}