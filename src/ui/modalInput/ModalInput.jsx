import { useState } from "react";
import styles from "./ModalInput.module.scss";
import { Button } from "@ui/buttons/Button";

export const ModalInput = ({ isOpen, onClose, onSubmit }) => {
    const [travelName, setTravelName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!travelName || !startDate || !endDate) {
            alert("Please fill all fields");
            return;
        }
        onSubmit({ travelName, startDate, endDate });
    };

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}>
            <div className={styles.modalContent}>
                <h2>Enter Travel Details</h2>
                <div className={styles.formGroup}>
                    <label>Travel Map Name</label>
                    <input
                        type="text"
                        value={travelName}
                        onChange={(e) => setTravelName(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button variant="secondary" text="Cancel" onClick={onClose} />
                    <Button variant="primary" text="Submit" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};
