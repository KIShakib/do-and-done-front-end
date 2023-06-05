import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ToDoList from "./ToDoList/ToDoList";
import AddTodo from "./AddTodo/AddTodo";

const ToDo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const todoList = [
    {
      _id: 1,
      taskName: "Khabo",
      addedTime: "10:45",
      description: "hfajksdfh sdahfjaskdhfas sdafhskjdff",
      status: "To-Do",
    },
    {
      _id: 2,
      taskName: "Porbo",
      addedTime: "10:45",
      description: "hfajksdfh sdahfjaskdhfas sdafhskjdff",
      status: "Completed",
    },
    {
      _id: 3,
      taskName: "Ghumabo",
      addedTime: "10:45",
      description: "hfajksdfh sdahfjaskdhfas sdafhskjdff sdafhskjdff",
      status: "To-Do",
    },
    {
      _id: 3,
      taskName: "Ghumabo",
      addedTime: "10:45",
      description: "hfajksdfh sdahfjaskdhfas sdafhskjdff sdafhskjdff",
      status: "To-Do",
    },
    {
      _id: 3,
      taskName: "Ghumabo",
      addedTime: "10:45",
      description: "hfajksdfh sdahfjaskdhfas sdafhskjdff sdafhskjdff",
      status: "To-Do",
    },
  ];


  return (
    <div className="w-2/5 mx-auto">
      <ToDoList todoList={todoList} />

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
