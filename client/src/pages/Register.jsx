import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-8">Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-2 rounded-lg"
          id="username"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-2 rounded-lg"
          id="username"
        />
        <button className="bg-slate-800 text-white p-3 rounded-lg uppercase cursor-pointer hover:opacity-85 disabled:opacity-70">
          Register
        </button>
      </form>
      <div className="flex gap-2">
        <p>Already have an Account?</p>
        <span className="text-blue-600">
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};
