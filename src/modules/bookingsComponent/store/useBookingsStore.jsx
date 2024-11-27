import { create } from "zustand";

const ENDPOINTS = {
    bookingsInfo: "http://localhost:8080/travel-plans/get-all",
    editBooking: (id) => `http://localhost:8080/travel-plans/update/${id}`,
    deleteData: (id) => `http://localhost:8080/travel-plans/delete/${id}`,
};

export const useBookingsStore = create((set) => ({
    data: null,

    fetchData: async () => {
        try {
            const response = await fetch(ENDPOINTS.bookingsInfo);
            const data = await response.json();
            set({ data });
            console.log(data);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    },

    editData: async (id, updatedData) => {
        try {
            console.log("Sending PUT data:", updatedData);
            const response = await fetch(ENDPOINTS.editBooking(id), {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error("Failed to update booking");
            }

            const updatedBooking = await response.json();
            set((state) => ({
                data: state.data.map((item) =>
                    item.id === id ? { ...item, ...updatedData } : item
                ),
            }));
        } catch (error) {
            console.error("Edit Error:", error);
        }
    },

    deleteData: async (id) => {
        console.log(id);
        try {
            const response = await fetch(ENDPOINTS.deleteData(id), {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete booking");
            }

            set((state) => ({
                data: state.data.filter((item) => item.id !== id),
            }));
        } catch (error) {
            console.error("Delete Error:", error);
        }
    },
}));
