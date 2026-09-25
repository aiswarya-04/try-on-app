import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userService";
import useAuthStore from "../../store/authStore"; 
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e) => {console.log('btn login click');
  
    e.preventDefault();
    try {
        const response = await loginUser({ email, password });
        console.log('login successful');
        setUser(response); // Store the user data in Zustand store
        navigate("/profile"); // Redirect to profile after successful login
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="container w-[20rem]">
      <div className="my-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
        </div>
        <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2">
          Login
        </button>
      </form>
      <div className="mt-4">
            <p className="text-white">
              New Customer?{" "}
              <Link
                to="/register"
                className="text-pink-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
    </div>
  );
};

export default Login;