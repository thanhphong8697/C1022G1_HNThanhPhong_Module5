const { Component } = require("react");

class CreateFacility extends Component {
    render(){
        return (
            <div class="d-flex justify-content-center mb-4" style="margin-top: 85px;">
        <form style="width: 50%;">
            <div>
              <legend>Create facility</legend>
              <div class="row mb-4">
                <div class="col-3 d-flex align-items-center">
                    <label for="disabledTextInput" class="form-label">Room name</label>
                </div>
                <div class="col-8">
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter name of room"/>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-3 d-flex align-items-center">
                    <label for="disabledTextInput" class="form-label">Room size</label>
                </div>
                <div class="col-8">
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter size of room"/>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-3 d-flex align-items-center">
                    <label for="disabledTextInput" class="form-label">Room image</label>
                </div>
                <div class="col-8">
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter image of room"/>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-3 d-flex align-items-center">
                    <label for="disabledTextInput" class="form-label">Room price</label>
                </div>
                <div class="col-8">
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Enter price of room"/>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-3 d-flex align-items-center">
                    <label for="disabledSelect" class="form-label">Room type</label>
                </div>
                <div class="col-8">
                    <select id="disabledSelect" class="form-select">
                        <option>Room</option>
                        <option>Villa</option>
                        <option>House</option>
                      </select>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <a href="" class="btn btn-secondary me-3">Back</a>
                <button type="submit" class="btn btn-primary">Create</button>
              </div>
            </div>
          </form>
    </div>
        );
    }
}

export default CreateFacility;