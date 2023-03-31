const { Component } = require("react");

class Footer extends Component {
    render(){
        return(
            <>
    <footer class="footer-04" style="background-color: #085f56">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 class="footer-heading"><a href="#" class="logo">ADDRESS</a></h2>
            <p>
              103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
              District, Danang City, Vietnam 7,0 km from Danang Airport
            </p>
            <p>Tel: 84-236-3847 333/888</p>
            <p>Email: reservation@furamavietnam.com</p>
            <a href="#"
              >read more <span class="ion-ios-arrow-round-forward"></span></a>
          </div>
          <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 class="footer-heading">Categories</h2>
            <ul class="list-unstyled">
              <li><a href="#" class="py-1 d-block">Buy &amp; Sell</a></li>
              <li><a href="#" class="py-1 d-block">Merchant</a></li>
              <li><a href="#" class="py-1 d-block">Giving back</a></li>
              <li><a href="#" class="py-1 d-block">Help &amp; Support</a></li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 class="footer-heading">Service</h2>
            <div class="tagcloud">
              <a href="#" class="tag-cloud-link">dish</a>
              <a href="#" class="tag-cloud-link">menu</a>
              <a href="#" class="tag-cloud-link">food</a>
              <a href="#" class="tag-cloud-link">sweet</a>
              <a href="#" class="tag-cloud-link">tasty</a>
              <a href="#" class="tag-cloud-link">delicious</a>
              <a href="#" class="tag-cloud-link">desserts</a>
              <a href="#" class="tag-cloud-link">drinks</a>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 class="footer-heading">Subcribe</h2>
            <form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input
                  type="text"
                  class="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button type="submit" class="form-control submit rounded-right">
                  <span class="sr-only">Submit</span><i class="ion-ios-send"></i>
                </button>
              </div>
            </form>
            <h2 class="footer-heading mt-5">Follow us</h2>
            <ul class="ftco-footer-social p-0">
              <li class="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                  ><span class="ion-logo-twitter"></span></a>
              </li>
              <li class="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  ><span class="ion-logo-facebook"></span></a>
              </li>
              <li class="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  ><span class="ion-logo-instagram"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
            </>
        );
    }
}

export default Footer;