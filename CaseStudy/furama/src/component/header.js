import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{height: "75px", backgroundColor: "#085f56"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={{margin: "0px 40px"}}>
            <img
              src="https://phuongviethcm.com/wp-content/uploads/2019/07/FURAMA.png"
              style={{width: "75px"}}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/"
                className="nav-link active me-4"
                aria-current="page"
                style={{color: "white"}}
              >
                HOME
              </NavLink>
              <NavLink
                to="/facility"
                className="nav-link active me-4"
                aria-current="page"
                style={{color: "white"}}
              >
                FACILITY
              </NavLink>
              <NavLink
                to="/customer"
                className="nav-link active me-4"
                aria-current="page"
                style={{color: "white"}}
              >
                CUSTOMER
              </NavLink>
              <NavLink
                to="/contract"
                className="nav-link active me-4"
                aria-current="page"
                style={{color: "white"}}
              >
                CONTRACT
              </NavLink>
              
            
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
