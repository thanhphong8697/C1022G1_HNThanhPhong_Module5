const { Component } = require("react");

class UpdateFacility extends Component {
    render(){
        return (
            <div class="d-flex justify-content-center mb-4" style="margin-top: 85px;">
        <form style="width: 50%;">
            <div>
              <legend>Update facility</legend>
              <div class="mb-3">
                <img height="200px" src="https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg" class="card-img-top" alt="..."/>
              </div>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Room name</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter name of room"/>
              </div>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Room size</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter size of room"/>
              </div>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Room image</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter image of room"/>
              </div>
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Room price</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter price of room"/>
              </div>
              <div class="mb-3">
                <label for="disabledSelect" class="form-label">Room type</label>
                <select id="disabledSelect" class="form-select">
                  <option>Room</option>
                  <option>Villa</option>
                  <option>House</option>
                </select>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <a href="" class="btn btn-secondary me-3">Back</a>
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
    </div>
        );
    }
}

export default UpdateFacility;