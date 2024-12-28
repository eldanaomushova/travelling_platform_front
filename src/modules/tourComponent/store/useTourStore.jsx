import { create } from "zustand";

const ENDPOINTS = {
    tourInfo: "https://alaia-tours.up.railway.app/api/v1/tours",
};

export const useTourStore = create((set) => ({
    data: null,

    fetchData: async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("Token not found");
            }

            const response = await fetch(ENDPOINTS.tourInfo, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            set({ data: data });
            console.log(data);
        } catch (error) {
            console.error("Fetch Error:", error.message);
        }
    },
}));
