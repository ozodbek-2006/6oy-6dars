import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <MainLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <div key={todo.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{todo.title}</h2>
              <p>
                {todo.description.length > 100
                  ? `${todo.description.substring(0, 100)}...`
                  : todo.description}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/todo/${todo.id}`} className="btn btn-primary">
                  Read More
                </Link>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
