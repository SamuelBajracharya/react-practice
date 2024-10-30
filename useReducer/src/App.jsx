import { useReducer, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete, MdAddCircle } from "react-icons/md";

const ACTIONS = {
  ADD_TODO: "addTodo",
  TOGGLE_TODO: "toggleTodo",
  REMOVE_TODO: "removeTodo",
};

function reducer(todoList, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todoList, newTodo(action.payload.todo)];
    case ACTIONS.TOGGLE_TODO:
      return todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case ACTIONS.REMOVE_TODO:
      return todoList.filter((todo) => todo.id !== action.payload.id);
    default:
      return todoList;
  }
}
const newTodo = (todo) => {
  return { id: Date.now(), todo: todo, complete: false };
};

function App() {
  const [todoList, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
    setTodo("");
  }
  console.log(todoList);

  return (
    <div className="flex flex-col w-fit mx-auto my-10">
      <form
        onSubmit={handleSubmit}
        className="w-fit shadow shadow-lg text-[20px]  px-5 flex items-center rounded-sm"
      >
        <input
          className="w-[600px] h-[100px] outline-none"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add todo..."
        />
        <button className="text-[40px]">
          <MdAddCircle />
        </button>
      </form>
      <div className="w-[680px] h-[400px] overflow-y-scroll rounded-sm shadow shadow-lg scrollbar-hide my-10">
        {
        todoList.map((todos, index) => (
          <div
            key={index}
            className="flex justify-between p-4 w-full h-[80px] text-2xl items-center border-b rounded-xl hover:bg-neutral-100"
          >
            <p
              className={`w-[550px] ${
                todos.complete ? "text-neutral-500 line-through" : ""
              }`}
            >
              {todos.todo}
            </p>
            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todos.id },
                  })
                }
                title="Complete Todo"
                className={`${
                  todos.complete ? "text-green-400" : "text-gray-400"
                } text-3xl px-2`}
              >
                <FaCheckCircle />
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE_TODO,
                    payload: { id: todos.id },
                  })
                }
                title="Delete Todo"
                className="text-red-400 text-3xl"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
