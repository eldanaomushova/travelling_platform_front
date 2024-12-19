import { PATH } from "@utils/constants/Constants";
import { create } from "zustand";

const ENDPOINTS = {
    signup: "https://alaia-tours.up.railway.app/api/v1/auth/sign-up",
};

export const useSignupStore = create((set) => ({
    data: null,
    error: null,

    register: async (email, password, username, navigate) => {
        try {
            const response = await fetch(ENDPOINTS.signup, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password, role }),
            });

            if (response.status === 200) {
                navigate(PATH.login);
                return;
            }

            if (!response.ok) {
                const errorData = await response.json();
                set({ error: errorData });
                throw new Error("Registration failed");
            }
            if (response.ok) {
                navigate(PATH.home);
                return { email, password };
            }

            const data = await response.json();
            set({ data, error: null });
            return data;
        } catch (error) {
            set({ error: error.message || "Registration failed" });
            throw error;
        }
    },
}));
