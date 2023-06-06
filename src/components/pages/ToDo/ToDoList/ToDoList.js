import React, { useState } from "react";
import SingleToDo from "./SingleToDo";

const ToDoList = ({ todoList }) => {
  const notCompleted = todoList?.filter((todo) => todo.status === "To-Do");

  return (
    <div className="mt-4">
      <div>
        <h1 className="text-3xl font-bebas tracking-widest">TO DO</h1>
      </div>
      {notCompleted?.length < 1 && (
        <div className="font-semibold">
          <h2>
            “Today is the day you’re going to slay your to-do list and bring
            home a major win.”
          </h2>
          <h2 className="italic"> — Michael Hyatt</h2>
        </div>
      )}

      <div className="mb-4 flex flex-col gap-y-1.5">
        {notCompleted?.map((singleToDo, i) => (
          <SingleToDo key={i} singleToDo={singleToDo} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
