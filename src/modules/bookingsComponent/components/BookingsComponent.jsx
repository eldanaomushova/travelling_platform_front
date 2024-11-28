import React, { useEffect, useState } from "react";
import { Container } from "@ui/container/Container";
import styles from "./bookingsComponent.module.scss";
import { useBookingsStore } from "../store/useBookingsStore";
import { Typography } from "@ui/typography/Typography";
import { useUserStore } from "@stores/useUserStore";
import { useTravelMapStore } from "../store/useTravelMapStore";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const BookingsComponent = () => {
    const { data, fetchData, deleteData } = useBookingsStore();
    const { dataTravel, fetchTravel, editTravel, deleteTravel } = useTravelMapStore();
    const [editingTravelId, setEditingTravelId] = useState(null);
    const [editValues, setEditValues] = useState({});
    const [openId, setOpenId] = useState(null);
    const { userId } = useUserStore.getState();

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (email) {
            fetchData(email);
            fetchTravel(email);
        }
    }, [fetchData, fetchTravel]);

    useEffect(() => {
        fetchData();
        fetchTravel();
    }, []);

    const handleEdit = (id) => {
        const booking = dataTravel.find((b) => b.id === id);
        if (!booking) {
            return;
        }
        setEditingTravelId(id);
        setEditValues({
            planName: booking.planName,
            startDate: booking.startDate.split("T")[0],
            endDate: booking.endDate.split("T")[0],
        });
    };

    const handleSave = async (id) => {
        if (!id) {
            return;
        }
        try {
            await editTravel(id, editValues.planName, editValues.startDate, editValues.endDate);
            await fetchTravel();
            setEditingTravelId(null);
        } catch (error) {
            window.alert("Error saving data:", error);
        }
    };

    const handleOpen = (id) => {
        setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            try {
                await deleteData(userId, id);
            } catch (error) {
                window.alert("Error deleting booking:", error);
            }
        }
    };
    const handleDeleteTravel = async (id) => {
        if (window.confirm("Are you sure you want to delete this booking?")) {
            try {
                console.log(userId, id);
                await deleteTravel(userId, id);
            } catch (error) {
                window.alert("Error deleting booking:", error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditValues((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Container className={styles.container}>
            <Typography variant="h3" className={styles.title}>
                Your Booked Tours
            </Typography>
            <ul className={styles.list}>
                {data?.map((booking) => (
                    <li
                        key={booking.id}
                        className={`${styles.listItem} ${openId === booking.id ? styles.open : ""}`}
                        onClick={() => handleOpen(booking.id)}
                    >
                        <div className={styles.listItemHeader}>
                            {editingTravelId === booking.id ? (
                                <input
                                    type="text"
                                    name="planName"
                                    value={editValues.planName}
                                    onChange={handleChange}
                                    className={styles.editInput}
                                />
                            ) : (
                                <Typography variant="h6">{booking.planName}</Typography>
                            )}
                            <div className={styles.actions}>
                                <button
                                    onClick={() => handleDelete(booking.id)}
                                    className={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        {editingTravelId === booking.id ? (
                            <div className={styles.editDates}>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={editValues.startDate}
                                    onChange={handleChange}
                                    className={styles.dateInput}
                                />
                                <input
                                    type="date"
                                    name="endDate"
                                    value={editValues.endDate}
                                    onChange={handleChange}
                                    className={styles.dateInput}
                                />
                            </div>
                        ) : (
                            <>
                                <Typography variant="p">
                                    {`${formatDate(booking.startDate)} - ${formatDate(booking.endDate)}`}
                                </Typography>
                                <Typography variant="p">{`Price: $${booking.price}`}</Typography>
                            </>
                        )}
                        {openId === booking.id && booking.landmarks?.length > 0 && (
                            <div className={styles.additionalInfo}>
                                <Typography variant="h6">Landmarks</Typography>
                                <ul className={styles.landmarksList}>
                                    {booking.landmarks.map((landmark, index) => (
                                        <li
                                            key={`${booking.id}-${landmark.id || `index-${index}`}`}
                                            className={styles.landmarkItem}
                                        >
                                            <Typography variant="h6">{landmark.title}</Typography>
                                            <Typography variant="p">
                                                {landmark.description}
                                            </Typography>
                                            <Typography variant="p">
                                                Location: {landmark.location}
                                            </Typography>
                                            <Typography variant="p">{`Price: $${landmark.price}`}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <Typography variant="h3" className={styles.title}>
                Your Travel Map
            </Typography>
            <ul className={styles.list}>
                {dataTravel?.map((booking) => (
                    <li
                        key={booking.id}
                        className={`${styles.listItem} ${openId === booking.id ? styles.open : ""}`}
                        onClick={() => handleOpen(booking.id)}
                    >
                        <div className={styles.listItemHeader}>
                            {editingTravelId === booking.id ? (
                                <input
                                    type="text"
                                    name="planName"
                                    value={editValues.planName}
                                    onChange={handleChange}
                                    className={styles.editInput}
                                />
                            ) : (
                                <Typography variant="h6">{booking.planName}</Typography>
                            )}
                            <div className={styles.actions}>
                                {editingTravelId === booking.id ? (
                                    <button
                                        onClick={() => handleSave(booking.id)}
                                        className={styles.saveButton}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(booking.id)}
                                        className={styles.editButton}
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDeleteTravel(booking.id)}
                                    className={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        {editingTravelId === booking.id ? (
                            <div className={styles.editDates}>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={editValues.startDate}
                                    onChange={handleChange}
                                    className={styles.dateInput}
                                />
                                <input
                                    type="date"
                                    name="endDate"
                                    value={editValues.endDate}
                                    onChange={handleChange}
                                    className={styles.dateInput}
                                />
                            </div>
                        ) : (
                            <>
                                <Typography variant="p">
                                    {`${formatDate(booking.startDate)} - ${formatDate(booking.endDate)}`}
                                </Typography>
                                <Typography variant="p">{`Price: $${booking.price}`}</Typography>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </Container>
    );
};
