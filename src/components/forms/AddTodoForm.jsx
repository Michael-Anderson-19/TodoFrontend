import Style from "./Form.module.css";

const AddTodoForm = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className={Style.form}>
      <div className={Style.formItem}>
        <label htmlFor="title" type="text">
          Title
        </label>
        <input type="text" id="title" name="title" />
      </div>
      <div className={Style.formItem}>
        <label htmlFor="description" type="text">
          Description
        </label>
        <textarea rows={5} cols={20} />
      </div>
      <div className={Style.formItem}>
        <label htmlFor="description" type="textarea">
          Priority
        </label>
        <select id="description" name="description">
          <option value="" default>
            select priority
          </option>
        </select>
      </div>
      <div className={Style.formItemButton}>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </form>
  );
};

export default AddTodoForm;
