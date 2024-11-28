import { create } from "zustand";

const ENDPOINTS = {
    aboutInfo: "http://localhost:8080/travel-plans/get-all",
    travelInfo: () => `http://localhost:8080/bookings/travel/${id}`,
    createBookingTour: (id, tourId) => `http://localhost:8080/bookings/tour/${id}/${tourId}`,
    createBookingTravel: (id) => `http://localhost:8080/bookings/travel/${id}`,
};

export const useAboutStore = create((set) => ({
    data: null,
    error: null,

    fetchDataTour: async () => {
        try {
            const response = await fetch(ENDPOINTS.aboutInfo);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            set({ data, error: null });
        } catch (error) {
            set({ error: error.message });
        }
    },
    createBookingTour: async (userId, travelId) => {
        try {
            const response = await fetch(ENDPOINTS.createBookingTour(userId, travelId), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const errorText = await response.text();
                try {
                    const errorData = JSON.parse(errorText);
                    throw new Error(errorData.message || "Failed to create booking");
                } catch (e) {
                    throw new Error(errorText || "Failed to create booking");
                }
            }
            const resultText = await response.text();
            try {
                return JSON.parse(resultText);
            } catch (e) {
                return resultText;
            }
        } catch (error) {
            throw error;
        }
    },
    createBookingTravel: async (userId, travelName, startDate, endDate, landmarkIds) => {
        try {
            const response = await fetch(ENDPOINTS.createBookingTravel(userId), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    planName: travelName,
                    startDate,
                    endDate,
                    landmarkIds: Array.isArray(landmarkIds) ? landmarkIds : [landmarkIds],
                }),
            });
            const resultText = await response.text();
            if (!response.ok) {
                throw new Error(resultText || "Failed to create booking");
            }
            try {
                return JSON.parse(resultText);
            } catch {
                return { message: resultText };
            }
        } catch (error) {
            throw error;
        }
    },
}));
