import { create } from "zustand";
import { useUserStore } from "@stores/useUserStore";

const ENDPOINTS = {
    bookingsInfo: (userId) => `http://localhost:8080/bookings/tour/${userId}`,
    deleteData: (userId, travelId) => `http://localhost:8080/bookings/tour/${userId}/${travelId}`,
};

export const useBookingsStore = create((set) => ({
    data: null,
    error: null,
    fetchData: async () => {
        try {
            const { userId, fetchUserIdByEmail } = useUserStore.getState();
            if (!userId) {
                const email = localStorage.getItem("email");
                if (!email) {
                    throw new Error("Email not found in local storage.");
                }
                await fetchUserIdByEmail(email);
            }
            const updatedUserId = useUserStore.getState().userId;
            if (!updatedUserId) {
                throw new Error("User ID not found.");
            }
            const response = await fetch(ENDPOINTS.bookingsInfo(updatedUserId));
            if (!response.ok) {
                throw new Error("Failed to fetch booking data.");
            }
            const data = await response.json();
            set({ data, error: null });
        } catch (error) {
            set({ error: error.message });
        }
    },
    deleteData: async (userId, tourId) => {
        console.log(userId, tourId);
        try {
            const response = await fetch(ENDPOINTS.deleteData(userId, tourId), {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete booking.");
            }
            set((state) => ({
                data: state.data.filter((item) => item.id !== tourId),
            }));
        } catch (error) {
            set({ error: error.message });
        }
    },
}));
