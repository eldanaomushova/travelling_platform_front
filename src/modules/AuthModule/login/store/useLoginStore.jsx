import { create } from "zustand";

const ENDPOINTS = {
    login: "http://localhost:8080/trusted/auth/login",
};

export const useLoginStore = create((set) => ({
    data: null,
    error: null,

    login: async (email, password) => {
        try {
            const response = await fetch(ENDPOINTS.login, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                set({ data, error: null });
                return data;
            } else {
                const errorData = await response.json();
                set({ error: errorData });
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
            set({ error: error.message || "Login failed" });
            throw error;
        }
    },
}));
