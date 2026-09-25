import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Navigation = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl">            
      <span className=" nav-item-name mt-[3rem]">      
      Home
      </span>
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/profile" className="mr-4">Profile</Link>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="bg-pink-500 hover:underline px-4 py-2 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;