import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill in all fields");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title,
      description,
    };
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    navigate("/");
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-4xl font-bold">Add New Todo</h1>
        {error && <div className="alert alert-error mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="label">
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter todo title"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="description" className="label">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description of todo"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
