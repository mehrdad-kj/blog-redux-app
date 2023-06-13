import { useState } from "react";
import { Modal } from "@mui/material";
import AddTodoFormModal from "../../components/AddTodo-Form-Modal";

const AddTodoForm = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="w-96 flex flex-col justify-center mx-auto">
        <button
          className="w-96  my-2 border bg-sky-600 p-5 text-white font-extrabold"
          type="submit"
          onClick={handleOpen}
        >
          Add Todo
        </button>
        <Modal open={open} onClose={handleClose}>
          <div>
            <AddTodoFormModal onClose={handleClose} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddTodoForm;
