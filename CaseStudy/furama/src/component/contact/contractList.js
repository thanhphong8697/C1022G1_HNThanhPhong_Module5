import contractMap from "./contract";
import customerMap from "../customer/customer";
import facilityMap from "../facility/facility";
export default function ContractList() {
    return (
        <>
        <div style="margin-top: 75px">
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
          </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    );
}