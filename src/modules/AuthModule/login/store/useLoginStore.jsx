import { create } from "zustand";

const ENDPOINTS = {
    login: "https://alaia-tours.up.railway.app/api/v1/auth/sign-in",
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
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", data.email);

                return data;
            } else if (response.status === 401) {
                const errorData = await response.json();
                set({ error: errorData.message || "Account not verified" });
                throw new Error(errorData.message || "Account not verified");
            } else {
                const errorData = await response.json();
                set({ error: errorData.message || "Login failed" });
                throw new Error(errorData.message || "Login failed");
            }
        } catch (error) {
            set({ error: error.message || "Login failed" });
            throw error;
        }
    },

    logout: () => {
        set({ data: null, token: null, error: null });
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    },

    initializeToken: () => {
        const storedToken = localStorage.getItem("token");
        const storedEmail = localStorage.getItem("email");
        if (storedToken) {
            set({ token: storedToken, data: { email: storedEmail }, error: null });
        }
    },
}));
