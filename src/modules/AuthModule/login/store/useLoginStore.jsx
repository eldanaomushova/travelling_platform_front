import { create } from "zustand";

const ENDPOINTS = {
    login: "http://localhost:8080/trusted/auth/login",
};

export const useLoginStore = create((set) => ({
    data: null,
    error: null,
    token: null,

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
                set({ data, error: null, token: data.token });

                localStorage.setItem("authToken", data.token);
                return data;
            } else if (response.status === 401) {
                window.alert("Please verify your account.");
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

    logout: () => {
        set({ data: null, token: null, error: null });
        localStorage.removeItem("authToken");
    },

    initializeToken: () => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            set({ token: storedToken });
        }
    },
}));
