const { Component } = require("react");

class Header extends Component {
    render(){
        return (
            <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style="height: 75px; background-color: #085f56"
    >
      <div className="container-fluid">
        <a className="navbar-brand" style="margin: 0px 40px" href="#"
          ><img
            src="https://phuongviethcm.com/wp-content/uploads/2019/07/FURAMA.png"
            style="width: 75px"
            alt=""
        /></a>
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
            <a className="nav-link active me-4" aria-current="page" href="#" style="color: white;">THE RESORT</a>
            <a className="nav-link active me-4" aria-current="page" href="#" style="color: white;">ROOMS & SUITES</a>
            <a className="nav-link active me-4" aria-current="page" href="#" style="color: white;">CULINARY</a>
            <a className="nav-link active me-4" aria-current="page" href="#" style="color: white;">MEETING & EVENTS</a>
            <a className="nav-link active me-4" aria-current="page" href="#" style="color: white;">SPA & FITNESS</a>
            <a className="nav-link active me-4" aria-current="page" href="#" style="color: white;">SPECIAL OFFER</a>
          </div>
        </div>
      </div>
    </nav>
        );
    }
}

export default Header;