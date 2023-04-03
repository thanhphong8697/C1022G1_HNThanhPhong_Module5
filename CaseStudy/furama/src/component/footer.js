export default function Footer() {
  return (
    <>
    <footer className="footer-04" style="background-color: #085f56">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading"><a href="#" className="logo">ADDRESS</a></h2>
            <p>
              103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
              District, Danang City, Vietnam 7,0 km from Danang Airport
            </p>
            <p>Tel: 84-236-3847 333/888</p>
            <p>Email: reservation@furamavietnam.com</p>
            <a href="#"
              >read more <span className="ion-ios-arrow-round-forward"></span></a>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Categories</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-1 d-block">Buy &amp; Sell</a></li>
              <li><a href="#" className="py-1 d-block">Merchant</a></li>
              <li><a href="#" className="py-1 d-block">Giving back</a></li>
              <li><a href="#" className="py-1 d-block">Help &amp; Support</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Service</h2>
            <div className="tagcloud">
              <a href="#" className="tag-cloud-link">dish</a>
              <a href="#" className="tag-cloud-link">menu</a>
              <a href="#" className="tag-cloud-link">food</a>
              <a href="#" className="tag-cloud-link">sweet</a>
              <a href="#" className="tag-cloud-link">tasty</a>
              <a href="#" className="tag-cloud-link">delicious</a>
              <a href="#" className="tag-cloud-link">desserts</a>
              <a href="#" className="tag-cloud-link">drinks</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
            <h2 className="footer-heading">Subcribe</h2>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button type="submit" className="form-control submit rounded-right">
                  <span className="sr-only">Submit</span><i className="ion-ios-send"></i>
                </button>
              </div>
            </form>
            <h2 className="footer-heading mt-5">Follow us</h2>
            <ul className="ftco-footer-social p-0">
              <li className="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                  ><span className="ion-logo-twitter"></span></a>
              </li>
              <li className="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  ><span className="ion-logo-facebook"></span></a>
              </li>
              <li className="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                  ><span className="ion-logo-instagram"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
            </>
        );
    }