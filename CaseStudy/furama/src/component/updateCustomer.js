export default function UpdateCustomer() {
    return (
        <>
        <div className="d-flex justify-content-center mb-4" style="margin-top: 85px">
      <form style="width: 50%">
        <div>
          <legend>Update Customer</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Name</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label"
              >Date of birth</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter date of birth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Gender</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter gender"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Identity</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter identity"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Phone</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Email</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Address</label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">Customer type</label>
            <select id="disabledSelect" className="form-select">
              <option>Diamond</option>
              <option>Platinium</option>
              <option>Gold</option>
              <option>Silver</option>
              <option>Member</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
                disabled
              />
              <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                Can't check this
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="" className="btn btn-secondary me-3">Back</a>
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
        </>
    );
}