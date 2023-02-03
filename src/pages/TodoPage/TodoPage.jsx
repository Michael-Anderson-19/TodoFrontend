import { useState } from "react";
import AddTodoForm from "../../components/forms/AddTodoForm";
import Modal from "../../components/modal/Modal";
const TodoPage = () => {
  const [openAddTodoModel, setOpenTodoModel] = useState(false);

  const openModal = () => {
    setOpenTodoModel(true);
  };
  const closeModal = () => {
    setOpenTodoModel(false);
  };
  return (
    <div>
      <button onClick={openModal}>open</button>
      {openAddTodoModel && (
        <Modal title="Add Item" onClose={closeModal}>
          <AddTodoForm />
        </Modal>
      )}
    </div>
  );
};

export default TodoPage;
