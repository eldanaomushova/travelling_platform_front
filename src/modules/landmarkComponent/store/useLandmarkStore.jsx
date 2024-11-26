import { create } from "zustand";

const ENDPOINTS = {
    landInfo: "http://localhost:8080/landmarks/get-all",
};

export const useLandmarkStore = create((set) => ({
    data: null,

    fetchData: async () => {
        try {
            const response = await fetch(ENDPOINTS.landInfo);
            const data = await response.json();
            set({ data: data });
        } catch (error) {
            set({ error: error.message });
        }
    },
}));
