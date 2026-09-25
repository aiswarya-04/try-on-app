import { useEffect, useState } from "react";
import { getUserProfile } from "../../api/userService";
import { Link } from "react-router-dom";

const Profile = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUserName(profile.username);
        setEmail(profile.email);
      } catch (error) {
        console.error("Error fetching profile:", error.response?.data || error.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    
    <div className="container mx-auto p-4 mt-[1rem]">
    <div className="flex justify-center align-center md:flex md:space-x-4">
      <div className="md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input p-2 rounded-sm w-full"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-input p-2 rounded-sm w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-input p-2 rounded-sm w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="form-input p-2 rounded-sm w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-600"
            >
              Update
            </button>           
          </div>
          
        </form>
      </div>
    </div>
  </div>    
       
       
    
  );
};

export default Profile;