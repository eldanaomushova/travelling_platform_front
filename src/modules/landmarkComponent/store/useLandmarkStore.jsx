import { create } from "zustand";

const ENDPOINTS = {
    landInfo: "http://localhost:8080/landmarks/get-all",
};

export const useLandmarkStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(ENDPOINTS.landInfo);
            const data = await response.json();
            set({ data: data, loading: false });
            console.log(data);
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Fetch Error:", error);
        }
    },
}));
