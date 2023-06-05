import React, { useState } from "react";
import EditToDo from "../../../shared/EditToDo";

const SingleToDo = ({ singleToDo }) => {
  const [statusOpen, setStatusOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="border-b p-3 flex justify-between items-center bg-secondary rounded-sm">
      <div className="w-4/6">
        <h1 className="text-2xl font-barlow">{singleToDo.taskName}</h1>
        <dl className="text-sm">{singleToDo.description}</dl>
      </div>

      <div className="w-1/6">
        <h4 className="font-orbitron">{singleToDo.addedTime}</h4>
      </div>

      <div className="w-1/6 text-center bg-primary text-white font-barlow tracking-widest hover:bg-opacity-75 cursor-pointer rounded-sm pb-0.5 px-1">
        {/* <select name="status" id="" className="text-secondary bg-primary">
          <option value="">{singleToDo.status}</option>
          <option value="">Completed</option>
          <option value="">Edit</option>
          <option value="">Delete</option>
        </select> */}
        <button onClick={() => setEditModalOpen(!editModalOpen)}>Edit</button>
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
