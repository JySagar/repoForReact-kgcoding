import { RiChatDeleteFill } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick2 }) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row jy-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger jy-button"
            onClick={() => {
              onDeleteClick2(todoName);
            }}
          >
            <RiChatDeleteFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
