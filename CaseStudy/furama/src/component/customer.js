const { Component } = require("react");

class Customer extends Component {
    render(){
        return (
            <div style="margin-top: 75px;">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Gender</th>
                <th scope="col">Identity</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Customer type</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Hà Nguyễn Thanh Phong</td>
                <td>08/06/1997</td>
                <td>Made</td>
                <td>201763234</td>
                <td>079243338</td>
                <td>thanhphong861997@gmail.com</td>
                <td>26 Tú Mỡ</td>
                <td>Gold</td>
                <td>
                    <a href="" className=" btn btn-primary">Update</a>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                      </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Hà Nguyễn Thanh Phong</td>
                <td>08/06/1997</td>
                <td>Made</td>
                <td>201763234</td>
                <td>079243338</td>
                <td>thanhphong861997@gmail.com</td>
                <td>26 Tú Mỡ</td>
                <td>Gold</td>
                <td>
                    <a href="" className=" btn btn-primary">Update</a>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                      </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Hà Nguyễn Thanh Phong</td>
                <td>08/06/1997</td>
                <td>Made</td>
                <td>201763234</td>
                <td>079243338</td>
                <td>thanhphong861997@gmail.com</td>
                <td>26 Tú Mỡ</td>
                <td>Gold</td>
                <td>
                    <a href="" className=" btn btn-primary">Update</a>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                      </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Hà Nguyễn Thanh Phong</td>
                <td>08/06/1997</td>
                <td>Made</td>
                <td>201763234</td>
                <td>079243338</td>
                <td>thanhphong861997@gmail.com</td>
                <td>26 Tú Mỡ</td>
                <td>Gold</td>
                <td>
                    <a href="" className=" btn btn-primary">Update</a>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete
                      </button>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
        );
    }
}

export default Customer;