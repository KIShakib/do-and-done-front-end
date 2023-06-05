import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
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

  // const todoList = [
  //   {
  //     taskName: "Khabo",
  //     addedTime: "10:45",
  //     description: "hfajksdfh sdahfjaskdhfas sdafhskjdff",
  //     status: "To-Do",
  //   },
  //   {
  //     taskName: "Porbo",
  //     addedTime: "10:45",
  //     description: "hfajksdfh sdahfjaskdhfas sdafhskjdff",
  //     status: "Completed",
  //   },
  //   {
  //     taskName: "Ghumabo",
  //     addedTime: "10:45",
  //     description: "hfajksdfh sdahfjaskdhfas sdafhskjdff sdafhskjdff",
  //     status: "To-Do",
  //   },
  //   {
  //     taskName: "Ghumabo",
  //     addedTime: "10:45",
  //     description: "hfajksdfh sdahfjaskdhfas sdafhskjdff sdafhskjdff",
  //     status: "To-Do",
  //   },
  //   {
  //     taskName: "Ghumabo",
  //     addedTime: "10:45",
  //     description: "hfajksdfh sdahfjaskdhfas sdafhskjdff sdafhskjdff",
  //     status: "To-Do",
  //   },
  // ];

  return (
    <div className="w-2/5 mx-auto">
      <ToDoList todoList={todoList} />
      {isLoading && (
        <div className="w-full h-72 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      <div className="flex justify-end">
        <button onClick={() => setModalOpen(!modalOpen)}>
          <AiOutlinePlusCircle className="text-5xl text-secondary duration-200" />
        </button>
      </div>

      {/* Conditionally Modal Open For New To-DO */}
      {modalOpen && (
        <AddTodo
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          todoList={todoList}
        />
      )}
    </div>
  );
};

export default ToDo;
