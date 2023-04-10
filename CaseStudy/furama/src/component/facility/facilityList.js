import {facilityMap} from "./facility";
import { NavLink } from "react-router-dom";
export default function FacilityList() {
  return (
    <>
      <div
        className="container-fluid px-0 mt-5 position-relative"
        style={{ paddingTop: "27px" }}
      >
        <img
          src=".\304477226_783255306109726_3396164101345234771_n.jpg"
          style={{ height: "400px", width: "100%" }}
          alt=""
        />
        <div className="position-absolute">FACILITYS</div>
      </div>
      <div>
      <div className="row b-0 p-0" style={{height: "50px"}}>
        <div className="col-4 px-0">
          <NavLink to="/facility-create"
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
            Create new product
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
      </div>
      <div className="row gx-5 container-fluid" style={{ margin: "10px 0px" }}>
        {facilityMap.map((facility, index) => {
          return (
            <div
              className="col-4 align-items-center d-flex justify-content-center"
              key={index}
            >
              <div
                className="card p-2 border-1 shadow mt-5"
                style={{ width: "25rem" }}
              >
                <img
                  height="200px"
                  src={facility.img}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{facility.name}</h5>
                  <p className="card-text p-0">{facility.size}</p>
                </div>
                <div className="card-body p-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Delete
                  </button>
                  <button type="button" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
