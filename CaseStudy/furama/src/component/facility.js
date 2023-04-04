export default function Facility() {
  return (
    <>
    <div class="container-fluid px-0 mt-5 position-relative" style={{paddingTop: '27px'}}>
    <img src="/furama/public/304477226_783255306109726_3396164101345234771_n.jpg/" style={{height: '400px', width: '100%'}} alt="" />
    <div class="position-absolute facility">
        CUSTOMERS
      </div>
    </div>
 <div className="row gx-5 container-fluid" style={{margin: '10px 0px'}}>
  {FacilityMap.map((facility, index) => {
    return(
      <div className="col-4 align-items-center d-flex justify-content-center" key={index}>
      <div className="card p-2 border-1" style={{width: '25rem'}}>
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
    const FacilityMap =[
      {
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        name: "OCEAN SUITE",
        size: "Room size: 85.8 m2",
        maxPersons: "10",
        price: "1000"
      },
      {
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        name: "OCEAN SUITE",
        size: "Room size: 85.8 m2",
        maxPersons: "10",
        price: "1000"
      },
      {
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        name: "OCEAN SUITE",
        size: "Room size: 85.8 m2",
        maxPersons: "10",
        price: "1000"
      },
      {
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        name: "OCEAN SUITE",
        size: "Room size: 85.8 m2",
        maxPersons: "10",
        price: "1000"
      },
      {
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        name: "OCEAN SUITE",
        size: "Room size: 85.8 m2",
        maxPersons: "10",
        price: "1000"
      },
      {
        img: "https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg",
        name: "OCEAN SUITE",
        size: "Room size: 85.8 m2",
        maxPersons: "10",
        price: "1000"
      }
    ];