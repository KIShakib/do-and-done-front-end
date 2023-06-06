import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowDownSquare } from "react-icons/bs";
import ToDoList from "./ToDoList/ToDoList";
import AddTodo from "./AddTodo/AddTodo";
import { useGetToDosQuery } from "../../../features/todos/todosSlice";

const ToDo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    data: todoList,
    isLoading,
    isError,
    error,
  } = useGetToDosQuery(null, { refetchOnMountOrArgChange: true });

  const completed = todoList?.filter((todo) => todo.status === "Completed");

  return (
    <div className="w-2/5 mx-auto">
      <ToDoList todoList={todoList} />
      {isLoading && (
        <div className="w-full h-72 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      {isError && (
        <p className="text-sm text-red/80 font-semibold">{error.error}</p>
      )}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-1">
          <h1 className="text-lg font-bebas font-semibold tracking-widest">
            Completed:
          </h1>
          <div className="text-lg bg-secondary rounded-full h-6 w-6 flex justify-center items-center font-bold">
            {completed?.length}
          </div>
        </div>
        <button onClick={() => setModalOpen(!modalOpen)}>
          <AiOutlinePlusCircle className="text-5xl text-secondary duration-200" />
        </button>
      </div>

      {/* Conditionally Modal Open For New To-DO */}
      {modalOpen && (
        <AddTodo modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default ToDo;
