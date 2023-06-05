import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ToDoList from "./ToDoList/ToDoList";
import AddTodo from "./AddTodo/AddTodo";

const ToDo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="w-2/5 mx-auto">
      <ToDoList />

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
          // user={user}
          // editUserInfo={editUserInfo}
        />
      )}
    </div>
  );
};

export default ToDo;
