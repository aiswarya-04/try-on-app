import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { registerUser } from "../../api/userService";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      navigate("/login"); // Redirect to login after successful registration
      toast.success("User successfully registered");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      toast.error(err.data.message);
    }
  };

  return (
    <section className="pl-[10rem] flex flex-wrap w-1/2">
    <div className="max-w-md mx-auto mt-10 w-1/2">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="container w-[20rem]">
      <div className="my-[2rem]">
      <label
              htmlFor="name"
              className="block text-sm font-medium"
            >
              Name
            </label>
      <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
          required
        />
        </div>
        <div className="my-[2rem]">
            <label
              htmlFor="email"
              className="block text-sm font-medium "
            >
              Email Address
            </label>
            <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />
        </div>    
        
        <div className="my-[2rem]">
            <label
              htmlFor="password"
              className="block text-sm font-medium "
            >
              Password
            </label>
            <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />
            </div> 
            <div className="my-[2rem]">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>    
       
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]">
          Register
        </button>
      </form>
      <div className="mt-4">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
    </div>    
    </section>
  );
};

export default Register;