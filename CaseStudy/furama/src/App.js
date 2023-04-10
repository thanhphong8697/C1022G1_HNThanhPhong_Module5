import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
// import CreateCustomer from './component/customer/createCustomer';
import CustomerList from "./component/customer/customerList";
// import UpdateCustomer from './component/customer/updateCustomer';
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import FacilityList from "./component/facility/facilityList";
import Home from "./component/home";
import FacilityCreate from "./component/facility/createFacility"
import CustomerCreate from "./component/customer/createCustomer"
import ContractList from "./component/contact/contractList";
import CreateContract from "./component/contact/createContract";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<FacilityList />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/contract" element={<ContractList />} />
        <Route path="/facility-create" element={<FacilityCreate />} />
        <Route path="/customer-create" element={<CustomerCreate />} />
        <Route path="/contract-create" element={<CreateContract />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}
export default App;
