import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useAddToDoMutation } from "../../../../features/todos/todosSlice";
import { toast } from "react-hot-toast";

const AddTodo = ({ setModalOpen, modalOpen }) => {
  const [date, setDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [addToDoIntoDB, { data, isError, error, isLoading, isSuccess }] =
    useAddToDoMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("To-Do Added...");
      setModalOpen(false);
    }
  }, [isSuccess, setModalOpen]);
  console.log(data);

  const addToDo = (todo) => {
    const newToDo = {
      taskName: todo.title,
      addedTime: date,
      description: todo.description,
      status: "To-Do",
    };
    addToDoIntoDB(newToDo);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
      <div
        onClick={() => setModalOpen(!modalOpen)}
        className="absolute w-full h-full opacity-60 bg-blend-overlay bg-black"
      ></div>
      <div className="modal-container bg-secondary w-11/12 md:max-w-md mx-auto rounded-sm z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left">
          <div className="flex justify-between items-center pb-3 px-6">
            <h2 className="text-2xl font-semibold font-barlow tracking-wide">
              Add Your New To-Do
            </h2>
            <div className="modal-close cursor-pointer z-50">
              <button
                className="w-8 h-8 flex justify-center items-center rounded-full border-primary border-2 hover:bg-primary duration-200 text-primary"
                onClick={() => setModalOpen(!modalOpen)}
              >
                <svg
                  className="fill-current text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
          </div>
          <hr className="my-2" />
          <div className="px-6 py-6">
            <form
              onSubmit={handleSubmit(addToDo)}
              className="flex flex-col gap-y-2"
            >
              <label className="flex flex-col">
                <h5 className="font-semibold">
                  <span>*</span>
                  Title:
                </h5>
                <input
                  {...register("title", { required: true })}
                  className="border px-2 w-full h-8 outline-none border-none focus:outline-primary"
                  name="title"
                  required
                  type="text"
                />
              </label>

              <label className="flex flex-col">
                <h5 className="font-semibold">
                  <span>*</span>
                  Description:
                </h5>
                <textarea
                  {...register("description", { required: true })}
                  className="border px-2 outline-none border-none focus:outline-primary"
                  name="description"
                  required
                  type="text"
                  rows="3"
                  cols="50"
                />
              </label>

              <DatePicker
                className="p-2 rounded"
                // minDate={new Date()}
                onChange={(date) => setDate(date)}
                // selectsStart
                // isClearable
                dateFormat="dd-MM-yyyy"
                inline
              />

              <hr className="" />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="border px-8 font-semibold rounded-sm hover:bg-primary duration-200 hover:text-white"
                >
                  {isLoading ? <div className="loader"></div> : "Add To-Do"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
