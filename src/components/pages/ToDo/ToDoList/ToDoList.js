import React from "react";

const ToDoList = () => {
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
    <div className="mt-4">
      <div>
        <h1 className="text-3xl font-bebas tracking-widest">TO DO</h1>
      </div>
      <div className="mb-4 flex flex-col gap-y-1.5">
        {todoList?.map((singleToDo) => {
          return (
            <div className="border-b p-3 flex justify-between items-center bg-secondary rounded-sm">
              <div className="w-4/6">
                <h1 className="text-2xl font-barlow">{singleToDo.taskName}</h1>
                <dl className="text-sm">{singleToDo.description}</dl>
              </div>

              <div className="w-1/6">
                <h4 className="font-orbitron">{singleToDo.addedTime}</h4>
              </div>

              <button className="w-1/6 text-center bg-primary text-white font-barlow tracking-widest hover:bg-opacity-75 cursor-pointer rounded-sm pb-0.5 px-1">
                {singleToDo.status}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
