import React, { useState } from "react";
import SingleToDo from "./SingleToDo";

const ToDoList = ({ todoList }) => {
  return (
    <div className="mt-4">
      <div>
        <h1 className="text-3xl font-bebas tracking-widest">TO DO</h1>
      </div>
      <div className="mb-4 flex flex-col gap-y-1.5">
        {todoList?.map((singleToDo) => (
          <SingleToDo singleToDo={singleToDo} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
