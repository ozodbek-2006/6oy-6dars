import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold">
          <span className="rounded-lg bg-primary px-4 py-2 text-white">
            TODOS
          </span>
        </Link>
        <Link to="/create" className="btn btn-primary">
          Create
        </Link>
      </div>
    </nav>
  );
}
