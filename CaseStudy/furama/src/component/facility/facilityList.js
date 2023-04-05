import { FacilityMap } from "./facility"
export default function FacilityList() {
    return (
      <>
      <div className="container-fluid px-0 mt-5 position-relative" style={{paddingTop: '27px'}}>
      <img src=".\304477226_783255306109726_3396164101345234771_n.jpg" style={{height: '400px', width: '100%'}} alt="" />
      <div className="position-absolute facility">
          FACILITYS
        </div>
      </div>
   <div className="row gx-5 container-fluid" style={{margin: '10px 0px'}}>
    {FacilityMap.map((facility, index) => {
      return(
        <div className="col-4 align-items-center d-flex justify-content-center" key={index}>
        <div className="card p-2 border-1 shadow mt-5" style={{width: '25rem'}}>
          <img height="200px" src={facility.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{facility.name}</h5>
            <p className="card-text p-0">{facility.size}</p>
          </div>
          <div className="card-body p-2">
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </button>
            <button type="button" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
      )
    })}
      </div>
    </>
          );
      }