import { useContext } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { todoItemsContext } from "../store/todoItemsStore";

function TodoItem({ todoName, todoDate }) {
  const contextObj = useContext(todoItemsContext);
  const deleteItemHere = contextObj.deleteItemFromContext;

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
              deleteItemHere(todoName);
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
