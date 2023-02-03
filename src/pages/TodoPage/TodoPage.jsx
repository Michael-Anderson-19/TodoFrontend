import { useState } from "react";
import AddTodoForm from "../../components/forms/AddTodoForm";
import Modal from "../../components/modal/Modal";
import TodoList from "./TodoList";
import Style from "./TodoPage.module.css";

const TodoPage = () => {
  const [openAddTodoModel, setOpenTodoModel] = useState(false);
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
    {
      id: 2,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
    {
      id: 3,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
    {
      id: 4,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
    {
      id: 5,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
    {
      id: 6,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
    {
      id: 7,
      title: "title 1",
      description: "some words here",
      priority: "HIGH",
    },
  ]);
  const openModal = () => {
    setOpenTodoModel(true);
  };
  const closeModal = () => {
    setOpenTodoModel(false);
  };
  return (
    <div className={Style.todoPage}>
      <button onClick={openModal}>open</button>
      <TodoList todos={todoItems} />
      {openAddTodoModel && (
        <Modal title="Add Item" onClose={closeModal}>
          <AddTodoForm />
        </Modal>
      )}
    </div>
  );
};

export default TodoPage;
