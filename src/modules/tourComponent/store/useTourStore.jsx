import { create } from "zustand";

const ENDPOINTS = {
    tourInfo: "http://localhost:8080/tour-plans/get-all",
};

export const useTourStore = create((set) => ({
    data: null,

    fetchData: async () => {
        try {
            const response = await fetch(ENDPOINTS.tourInfo);
            const data = await response.json();
            set({ data: data });
            console.log(data);
        } catch (error) {
            console.error("Fetch Error");
        }
    },
}));
