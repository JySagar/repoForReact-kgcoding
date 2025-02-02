function AddTodo() {
  return (
    <div className="container">
      <div className="row jy-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success jy-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
