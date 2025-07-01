import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container">
      <form className="row jy-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // onChange={handleDateChange}
            // value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            className="btn btn-success jy-button"
            // onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
