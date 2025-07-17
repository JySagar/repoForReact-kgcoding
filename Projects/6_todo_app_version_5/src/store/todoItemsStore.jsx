import { createContext, useReducer } from "react";

export const todoItemsContext = createContext([]);

const reducerFn = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.nameHere, dueDate: action.payload.dueDateHere },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.nameHere
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(reducerFn, []);

  const addNewItem = (itemName, itemDueDate) => {
    const addItemAction = {
      type: "NEW_ITEM",
      payload: {
        nameHere: itemName,
        dueDateHere: itemDueDate,
      },
    };

    dispatchTodoItems(addItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        nameHere: todoItemName,
        // itemDueDate not needed as we are deleting just by seeing the item name.
        // dueDateHere: itemDueDate,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <todoItemsContext.Provider
      value={{
        // If the key and values are same in js then we can combine them to one . for eg :  see the tutorial there its done.
        todoItemsFromContext: todoItems,
        addNewItemFromContext: addNewItem,
        deleteItemFromContext: deleteItem,
      }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
