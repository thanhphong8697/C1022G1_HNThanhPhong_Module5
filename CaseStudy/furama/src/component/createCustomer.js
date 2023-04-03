export default function CreateCustomer() {
    return (
        <>
        <div className="d-flex justify-content-center mb-4" style="margin-top: 85px">
      <form style="width: 50%">
        <div>
          <legend>Create Customer</legend>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label">Name</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter name of customer"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label"
                >Date of birth</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter date of birth"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label">Gender</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter gender of customer"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label">Identity</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter identity of customer"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label">Phone</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter phone of customer"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label">Email</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter email of customer"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledTextInput" className="form-label">Address</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Enter address of customer"
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-3 d-flex align-items-center">
              <label htmlFor="disabledSelect" className="form-label"
                >Customer type</label>
            </div>
            <div className="col-8">
              <select id="disabledSelect" className="form-select">
                <option>Diamond</option>
                <option>Platinium</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Member</option>
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