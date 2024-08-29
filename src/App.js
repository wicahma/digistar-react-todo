import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Creator from "./components/Creator";
import TodoCard from "./components/TodoCard";

const dummyTodos = [
  {
    title: "Belajar React",
    description: "Belajar React bersama Digitar Academy",
    date: "2021-09-01",
    checked: false,
  },
  {
    title: "Belajar Tailwind CSS",
    description: "Belajar Tailwind CSS bersama Digitar Academy",
    date: "2021-09-02",
    checked: false,
  },
  {
    title: "Belajar Next.js",
    description: "Belajar Next.js bersama Digitar Academy",
    date: "2021-09-03",
    checked: true,
  },
  {
    title: "Belajar Node.js",
    description: "Belajar Node.js bersama Digitar Academy",
    date: "2021-09-04",
    checked: false,
  },
];

function App() {
  const [baseTodo, setBaseTodo] = useState({});
  const [todos, setTodos] = useState(dummyTodos);

  return (
    <div className="container">
      <Navbar />
      <div className="main-section">
        <Creator
          baseTodo={baseTodo}
          creatorCallback={(todo, formStatus, i) => {
            if (formStatus === "add") {
              setTodos((prev) => [...prev, { ...todo, checked: false }]);
            } else {
              setTodos((prev) => {
                const newTodos = [...prev];
                newTodos[i] = { ...todo, checked: false };
                return newTodos;
              });
            }
          }}
        />

        <div className="todo-list">
          {todos.map((todo, i) => (
            <TodoCard
              key={i}
              checked={todo.checked}
              title={todo.title}
              date={todo.date}
              desc={todo.description}
              isDoneCallback={(e) => {
                const { checked } = e.target;
                console.log(checked);
                setTodos((prev) => {
                  const newTodos = [...prev];
                  newTodos[i].checked = checked;
                  return newTodos;
                });
              }}
              handleDelete={() => {
                setTodos((prev) => {
                  const newTodos = [...prev];
                  newTodos.splice(i, 1);
                  return newTodos;
                });
              }}
              handleEdit={() => {
                setBaseTodo({
                  index: i,
                  title: todo.title,
                  desc: todo.description,
                  date: todo.date,
                  formStatus: "edit",
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
