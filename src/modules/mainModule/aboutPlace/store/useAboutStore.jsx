import { create } from "zustand";

const ENDPOINTS = {
    aboutInfo: "http://localhost:8080/travel-plans/get-all",
    createBooking: "http://localhost:8080/landmarks/create",
};

export const useAboutStore = create((set) => ({
    data: null,
    error: null,
    fetchData: async () => {
        try {
            const response = await fetch(ENDPOINTS.aboutInfo);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            set({ data, error: null });
        } catch (error) {
            set({ error: error.message });
            console.error("Error fetching data:", error.message);
        }
    },
    createBooking: async (id, planName, landmarkIds) => {
        console.log(id, planName);
        try {
            const startDate = new Date().toISOString();
            const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); 
            const payload = {
                planName,
                startDate,
                endDate,
                landmarkIds,
            };

            const response = await fetch(`http://localhost:8080/travel/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to create booking");
            }

            const result = await response.json();
            set({ data: result, error: null });
            return result;
        } catch (error) {
            set({ error: error.message });
            console.error("Error creating booking:", error.message);
            throw error;
        }
    },
}));
