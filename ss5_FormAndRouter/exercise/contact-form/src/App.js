import logo from './logo.svg';
import './App.css';
import ContractForm from './ContactForm';
import MedicalForm from './medicalForm';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/medical' className='ms-5'>Medical</NavLink>
      <Routes>
        <Route path='/contact' element={<ContractForm />} />
        <Route path='/medical' element={<MedicalForm />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
