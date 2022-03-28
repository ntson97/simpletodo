import "./App.css";
import TodoList from "./components/ListTodo";
import { Fragment } from "react";
import TodoHeader from "./components/TodoHeader";
import Input from "./components/Input";
import TodoFooter from "./components/TodoFooter";
import { useState } from "react";
let Todos = [
  {
    id: 0,
    content: "Learn Javascript",
    done: false,
  },
  {
    id: 1,
    content: "Learn React",
    done: true,
  },
  {
    id: 2,
    content: "Build a React App",
    done: false,
  },
];
function App() {
  const [action, setAction] = useState(1);
  const [filter, setFilter] = useState(0);
  const [todoData, setTodo] = useState(Todos);
  const count = Todos.filter((todo) => {
    return todo.done !== true;
  }).length;

  const actionHandle = (val) => {
    if (val === action) {
      setAction(0);
    } else {
      setAction(val);
    }
  };
  const addNewHandle = (todo) => {
    todo.id = Todos.length;
    Todos = Todos.concat(todo);
    setTodo(Todos);
  };
  const actionFilterHandle = (query) => {
    if (!query) {
      setTodo(Todos);
      return;
    }
    const data = Todos.filter((todo) => {
      return todo.content.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setTodo(data);
  };
  const filterStateHandle = (state) => {
    if (state !== filter) {
      let data;
      if (state === 0) {
        data = Todos;
      } else if (state === 1) {
        data = Todos.filter((todo) => {
          return !todo.done;
        });
      } else {
        data = Todos.filter((todo) => {
          return todo.done;
        });
      }
      setFilter(state);
      setTodo(data);
    }
  };
  const completeHandle = (id) => {
    const ind = Todos.findIndex((todo) => todo.id === id);
    if (ind !== -1) {
      const todo = Todos[ind];
      todo.done = !todo.done;
      let arr = [];
      if (ind > 0) {
        arr.push(...Todos.slice(0, ind));
      }
      arr.push(todo);
      if (ind <= Todos.length - 1) {
        arr.push(...Todos.slice(ind + 1));
      }
      Todos = arr;
      setTodo(arr);
    }
  };
  let placeHolder;
  if (action > 0) {
    placeHolder = action === 1 ? "Add New" : "Search Anything";
  } else {
    placeHolder = "";
  }
  return (
    <div className="container">
      <div className="content-todo">
        <TodoHeader />
        <Input
          placeHolder={placeHolder}
          action={action}
          filterHandle={actionFilterHandle}
          addNewHandle={addNewHandle}
        />
        <TodoList todos={todoData} completeHandle={completeHandle} />
        <TodoFooter
          count={count}
          action={action}
          filter={filter}
          actionHandle={actionHandle}
          filterStateHandle={filterStateHandle}
        />
      </div>
    </div>
  );
}

export default App;
