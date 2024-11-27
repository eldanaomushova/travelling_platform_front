import { Container } from "@ui/container/Container";
import React, { useEffect, useState } from "react";
import styles from "./bookingsComponent.module.scss";
import { useBookingsStore } from "../store/useBookingsStore";
import { Typography } from "@ui/typography/Typography";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const BookingsComponent = () => {
    const { data, fetchData, editData, deleteData } = useBookingsStore();
    const [openId, setOpenId] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editValues, setEditValues] = useState({});

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleOpen = (id) => {
        setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
    };

    const handleEdit = (id) => {
        const booking = data.find((b) => b.id === id);
        setEditingId(id);
        setEditValues({
            name: booking.planName,
            startDate: booking.startDate,
            endDate: booking.endDate,
        });
    };

    const handleSave = async (id) => {
        try {
            await editData(id, {
                planName: editValues.name,
                startDate: `${editValues.startDate}T00:00:00`,
                endDate: `${editValues.endDate}T00:00:00`,
            });
            setEditingId(null);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to delete this booking?")) {
            try {
                await deleteData(id);
                console.log(`Booking with ID ${id} deleted successfully.`);
            } catch (error) {
                console.error("Error deleting booking:", error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Container className={styles.container}>
            <div>
                <Typography variant="h3" className={styles.title}>
                    Your Bookings
                </Typography>
            </div>
            <ul className={styles.list}>
                {data?.map((booking) => (
                    <li
                        key={booking.id}
                        className={`${styles.listItem} ${openId === booking.id ? styles.open : ""}`}
                        onClick={() => handleOpen(booking.id)}
                    >
                        <div className={styles.listItemHeader}>
                            {editingId === booking.id ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={editValues.name}
                                    onChange={handleChange}
                                    className={styles.editInput}
                                />
                            ) : (
                                <Typography variant="h6" className={styles.planName}>
                                    {booking.planName}
                                </Typography>
                            )}
                            <div className={styles.actions}>
                                {editingId === booking.id ? (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSave(booking.id);
                                        }}
                                        className={styles.saveButton}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEdit(booking.id);
                                        }}
                                        className={styles.editButton}
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    onClick={(e) => handleDelete(booking.id, e)}
                                    className={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        {editingId === booking.id ? (
                            <div className={styles.editDates}>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={editValues.startDate.split("T")[0]}
                                    onChange={handleChange}
                                    className={styles.dateInput}
                                />
                                <input
                                    type="date"
                                    name="endDate"
                                    value={editValues.endDate.split("T")[0]}
                                    onChange={handleChange}
                                    className={styles.dateInput}
                                />
                            </div>
                        ) : (
                            <>
                                <Typography variant="p" className={styles.dates}>
                                    {`${formatDate(booking.startDate)} - ${formatDate(booking.endDate)}`}
                                </Typography>
                                <Typography variant="p" className={styles.price}>
                                    Price: ${booking.price}
                                </Typography>
                            </>
                        )}
                        {openId === booking.id && (
                            <div className={styles.additionalInfo}>
                                <Typography variant="h6">Landmarks</Typography>
                                <ul className={styles.landmarksList}>
                                    {booking.landmarks.map((landmark) => (
                                        <li key={landmark.id} className={styles.landmarkItem}>
                                            <div className={styles.landmarkDetails}>
                                                <Typography
                                                    variant="h6"
                                                    className={styles.landmarkTitle}
                                                >
                                                    {landmark.title}
                                                </Typography>
                                                <Typography
                                                    variant="p"
                                                    className={styles.landmarkDescription}
                                                >
                                                    {landmark.description}
                                                </Typography>
                                                <Typography
                                                    variant="p"
                                                    className={styles.landmarkLocation}
                                                >
                                                    Location: {landmark.location}
                                                </Typography>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </Container>
    );
};
