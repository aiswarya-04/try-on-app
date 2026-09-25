import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Define the store using Zustand
const useAuthStore = create(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    // Action to set user data
    setUser: (user) => set({ user, isAuthenticated: true }),
    // Action to clear user data
    logout: async () => {
      try {
        await fetch('http://localhost:5000/api/users/logout', {
          method: 'POST',
          credentials: 'include', // Include cookies for logout
        });
        set({ user: null, isAuthenticated: false, error: null });
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }))
);

export default useAuthStore;