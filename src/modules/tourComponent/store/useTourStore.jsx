import { create } from "zustand";

const ENDPOINTS = {
    tourInfo: "http://localhost:8080/tour-plans/get-all",
};

export const useTourStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(ENDPOINTS.tourInfo);
            const data = await response.json();
            set({ data: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Fetch Error:", error);
        }
    },
}));
