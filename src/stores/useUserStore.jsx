import { create } from "zustand";

const ENDPOINTS = {
    getUserIdByEmail: (email) =>
        `http://localhost:8080/trusted/auth/user/id-by-email?email=${email}`,
};

export const useUserStore = create((set) => ({
    userId: null,
    error: null,

    fetchUserIdByEmail: async (email) => {
        try {
            const response = await fetch(ENDPOINTS.getUserIdByEmail(email));
            if (!response.ok) {
                throw new Error("Failed to fetch user ID");
            }
            const userId = await response.json();
            set({ userId, error: null });
            return userId;
        } catch (error) {
            set({ error: error.message });
            throw error;
        }
    },
}));
