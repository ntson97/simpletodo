const TodoItem = ({ todo, completeHandle }) => {
  return (
    <div className={`todo-item ${todo.done ? "todo-done" : ""}`}>
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.done}
        onChange={() => completeHandle(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.content}</label>
    </div>
  );
};
export default TodoItem;
