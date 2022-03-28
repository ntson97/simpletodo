import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeHandle }) => {
  const mapTodo = todos.map((todo) => {
    return (
      <TodoItem todo={todo} key={todo.id} completeHandle={completeHandle} />
    );
  });
  return <div className="todo-list">{mapTodo}</div>;
};
export default TodoList;
