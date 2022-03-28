import Action from "./Action";

const TodoFooter = ({
  count,
  action,
  filter,
  actionHandle,
  filterStateHandle,
}) => {
  return (
    <footer className="todo-footer clearfix">
      <div className="actions pull-left">
        <Action
          name="Add"
          className={`${action === 1 ? "action-selected" : ""}`}
          action={() => actionHandle(1)}
        />
        <Action
          name="Search"
          className={`${action === 2 ? "action-selected" : ""}`}
          action={() => actionHandle(2)}
        />
      </div>
      <div className="status pull-left">{count} item left.</div>
      <div className="filters pull-right">
        <Action
          name="All"
          className={`action-border ${filter === 0 ? "action-selected" : ""}`}
          action={() => filterStateHandle(0)}
        />
        <Action
          name="Active"
          className={`action-border ${filter === 1 ? "action-selected" : ""}`}
          action={() => filterStateHandle(1)}
        />
        <Action
          name="Complete"
          className={`action-border ${filter === 2 ? "action-selected" : ""}`}
          action={() => filterStateHandle(2)}
        />
      </div>
    </footer>
  );
};
export default TodoFooter;
