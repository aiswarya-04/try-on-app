import axios from "axios";

const API_URL = "https://trial-virtual-tryon-backend.onrender.com/api/users";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Ensure credentials are sent with requests
});

// Register user
const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error; // Rethrow or handle as needed
  }
};

// Login user
const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error; // Rethrow or handle as needed
  }
};

// Logout user
const logoutUser = async () => {
  try {
    await axiosInstance.post("/logout");
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw error; // Rethrow or handle as needed
  }
};

// Get user profile
const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error) {
    console.error("Fetch profile error:", error.response?.data || error.message);
    throw error; // Rethrow or handle as needed
  }
};

export { registerUser, loginUser, logoutUser, getUserProfile };