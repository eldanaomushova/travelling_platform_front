import { create } from "zustand";

const ENDPOINTS = {
    signup: "http://localhost:8080/trusted/auth/sign-up",
};

export const useSignupStore = create((set) => ({
    data: null,
    error: null,

    register: async (email, password) => {
        try {
            const response = await fetch(ENDPOINTS.signup, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                set({ error: errorData });
                throw new Error("Registration failed");
            }

            const data = await response.json();
            set({ data, error: null });
            console.log(data);
            return data;
        } catch (error) {
            set({ error: error.message || "Registration failed" });
            throw error;
        }
    },
}));
