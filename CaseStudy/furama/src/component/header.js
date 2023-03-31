const { Component } = require("react");

class Header extends Component {
    render(){
        return (
            <nav
      class="navbar navbar-expand-lg navbar-light fixed-top"
      style="height: 75px; background-color: #085f56"
    >
      <div class="container-fluid">
        <a class="navbar-brand" style="margin: 0px 40px" href="#"
          ><img
            src="https://phuongviethcm.com/wp-content/uploads/2019/07/FURAMA.png"
            style="width: 75px"
            alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active me-4" aria-current="page" href="#" style="color: white;">THE RESORT</a>
            <a class="nav-link active me-4" aria-current="page" href="#" style="color: white;">ROOMS & SUITES</a>
            <a class="nav-link active me-4" aria-current="page" href="#" style="color: white;">CULINARY</a>
            <a class="nav-link active me-4" aria-current="page" href="#" style="color: white;">MEETING & EVENTS</a>
            <a class="nav-link active me-4" aria-current="page" href="#" style="color: white;">SPA & FITNESS</a>
            <a class="nav-link active me-4" aria-current="page" href="#" style="color: white;">SPECIAL OFFER</a>
          </div>
        </div>
      </div>
    </nav>
        );
    }
}

export default Header;