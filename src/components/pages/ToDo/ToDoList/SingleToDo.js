import React, { useState } from "react";
import EditToDo from "../../../shared/EditToDo";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import {
  useDeleteToDoByIdMutation,
  useSetStatusToCompleteMutation,
} from "../../../../features/todos/todosSlice";
import { toast } from "react-hot-toast";

const SingleToDo = ({ singleToDo }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteToDo, { data, isError, error, isLoading, isSuccess }] =
    useDeleteToDoByIdMutation();
  const [setStatus, {}] = useSetStatusToCompleteMutation();

  const deleteToDoById = (_id) => {
    deleteToDo(_id);
    if (data?.deletedCount < 0) {
      toast.success("Deleted Successfully...");
    }
  };

  const setStatusToComplete = (_id) => {
    setStatus(_id);
    toast.success("To-Do Completed");
  };

  const date = singleToDo.addedTime.split("T");

  return (
    <div className="border-b p-3 flex justify-between items-center bg-secondary rounded-sm">
      <div className="w-4/6">
        <h1 className="text-2xl font-barlow">{singleToDo.taskName}</h1>
        <dl className="text-sm">{singleToDo.description}</dl>
      </div>

      <div className="w-1/6">
        <h4 className="font-orbitron text-xs tracking-wide font-semibold">
          {date[0]}
        </h4>
      </div>

      <div className="group relative w-1/6 bg-primary hover:bg-purple text-center">
        <button className="text-center text-white font-barlow tracking-widest hover:bg-opacity-75 cursor-pointer rounded-sm pb-0.5 px-1">
          {singleToDo?.status}
        </button>
        <nav
          tabIndex="0"
          className="border-2 bg-white invisible border-gray-800 rounded-sm w-28 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 z-50 p-1"
        >
          <ul className="">
            <li>
              <button
                onClick={() => setStatusToComplete(singleToDo?._id)}
                className="hover:bg-primary bg-secondary w-full px-1 rounded-sm flex items-center justify-center hover:text-white"
              >
                <AiOutlineCheckSquare className="font-bold" />
                Completed
              </button>
            </li>
          </ul>
          <ul className="py-1">
            <li>
              <button
                onClick={() => setEditModalOpen(!editModalOpen)}
                className="hover:bg-primary bg-secondary w-full px-1 rounded-sm flex items-center justify-center hover:text-white gap-x-2"
              >
                <FiEdit className="" />
                Edit
              </button>
            </li>
          </ul>
          <ul className="py-1">
            <li>
              <button
                onClick={() => deleteToDoById(singleToDo._id)}
                className="hover:bg-primary bg-secondary w-full px-1 rounded-sm flex items-center justify-center hover:text-white gap-x-2"
              >
                <AiOutlineDelete className="" />
                {isLoading ? <div className="loader"></div> : "Delete"}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {editModalOpen && (
        <EditToDo
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
          singleToDo={singleToDo}
        />
      )}
    </div>
  );
};

export default SingleToDo;
