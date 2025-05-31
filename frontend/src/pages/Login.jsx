import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/"); // or wherever you want to redirect
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://wsat-production.up.railway.app/api/login", {
        email,
        password,
      });

      console.log("Login success:", res.data);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.dispatchEvent(new Event("userUpdated")); // notify Navbar
      onClose?.();
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="absolute inset-0" onClick={onClose}></div>

      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="relative z-10 max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-lg"
      >
        <Link to={"/"}>
          <button
            type="button"
            className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        </Link>

        <h2 className="text-gray-900 text-3xl mt-10 font-medium">Log In</h2>
        <p className="text-gray-500 text-sm mt-2">Access your account</p>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-6 bg-indigo-500/5 border border-gray-300/80 h-12 rounded-full px-4 text-sm outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 bg-indigo-500/5 border border-gray-300/80 h-12 rounded-full px-4 text-sm outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          Log In
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-indigo-500 underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
