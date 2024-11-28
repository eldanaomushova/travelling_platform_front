import { create } from "zustand";
import { useUserStore } from "@stores/useUserStore";

const ENDPOINTS = {
    travelInfo: (userId) => `http://localhost:8080/bookings/travel/${userId}`,
    editBooking: (userId, travelId) =>
        `http://localhost:8080/bookings/travel/${userId}/${travelId}`,
    deleteData: (userId, travelId) => `http://localhost:8080/bookings/travel/${userId}/${travelId}`,
};

export const useTravelMapStore = create((set) => ({
    dataTravel: null,
    error: null,
    fetchTravel: async () => {
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
            const response = await fetch(ENDPOINTS.travelInfo(updatedUserId));
            if (!response.ok) {
                throw new Error("Failed to fetch booking data.");
            }
            const dataTravel = await response.json();
            set({ dataTravel, error: null });
        } catch (error) {
            set({ error: error.message });
        }
    },
    editTravel: async (travelId, planName, startDate, endDate) => {
        try {
            const { userId } = useUserStore.getState();
            if (!userId) {
                throw new Error("User ID not found.");
            }
            const formattedStartDate = `${startDate}T00:00:00`;
            const formattedEndDate = `${endDate}T23:59:59`;
            const response = await fetch(ENDPOINTS.editBooking(userId, travelId), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    planName,
                    startDate: formattedStartDate,
                    endDate: formattedEndDate,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to update booking.");
            }
            const updatedBooking = await response.json();
            set((state) => ({
                dataTravel: state.dataTravel.map((item) =>
                    item.travelId === travelId ? { ...item, ...updatedBooking } : item
                ),
            }));
        } catch (error) {
            console.error("Edit Travel Error:", error.message);
            set({ error: error.message });
        }
    },
    deleteTravel: async (userId, tourId) => {
        console.log(userId, tourId);
        try {
            const response = await fetch(ENDPOINTS.deleteData(userId, tourId), {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete booking.");
            }
            set((state) => ({
                dataTravel: state.dataTravel.filter((item) => item.id !== tourId),
            }));
        } catch (error) {
            set({ error: error.message });
        }
    },
}));
