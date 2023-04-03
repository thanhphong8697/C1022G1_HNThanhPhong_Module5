export default function CreateFacility() {
  return (
    <>
        <div className="d-flex justify-content-center mb-4" style="margin-top: 85px;">
        <form style="width: 50%;">
            <div>
              <legend>Create facility</legend>
              <div className="row mb-4">
                <div className="col-3 d-flex align-items-center">
                    <label htmlFor="disabledTextInput" className="form-label">Room name</label>
                </div>
                <div className="col-8">
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter name of room"/>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-3 d-flex align-items-center">
                    <label htmlFor="disabledTextInput" className="form-label">Room size</label>
                </div>
                <div className="col-8">
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter size of room"/>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-3 d-flex align-items-center">
                    <label htmlFor="disabledTextInput" className="form-label">Room image</label>
                </div>
                <div className="col-8">
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter image of room"/>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-3 d-flex align-items-center">
                    <label htmlFor="disabledTextInput" className="form-label">Room price</label>
                </div>
                <div className="col-8">
                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter price of room"/>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-3 d-flex align-items-center">
                    <label htmlFor="disabledSelect" className="form-label">Room type</label>
                </div>
                <div className="col-8">
                    <select id="disabledSelect" className="form-select">
                        <option>Room</option>
                        <option>Villa</option>
                        <option>House</option>
                      </select>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a href="" className="btn btn-secondary me-3">Back</a>
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </div>
          </form>
    </div>
    </>
        );
    }