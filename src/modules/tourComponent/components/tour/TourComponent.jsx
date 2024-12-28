import React, { useEffect, useState } from "react";
import styles from "./tourComponent.module.scss";
import { Card } from "@ui/cards/smallCard/Card";
import { useNavigate } from "react-router-dom";
import { useTourStore } from "@modules/tourComponent/store/useTourStore";
import { Input } from "@ui/input/Input";
import { SearchIcon } from "@assets/icons/desktop/SearchIcon";
import { CalendarIcon } from "@assets/icons/desktop/CalendarIcon";
import { CloseIcon } from "@assets/icons/desktop/CloseIcon";
import { PATH } from "@utils/constants/Constants";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const TourComponent = () => {
    const { data, fetchData } = useTourStore();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter(({ planName }) =>
                    planName.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, data]);
    const handleClick = (id, planName, startDate, endDate, price, landmarks) => {
        console.log(id);
        navigate(`${PATH.tours}/:id`, {
            state: { id, planName, startDate, endDate, price, landmarks },
        });
    };

    return (
        <div className={styles.tourContainer}>
            <div className={styles.inputWrapper}>
                <Input
                    type="text"
                    name="search"
                    placeholder="Найдите нужный тур"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                >
                    <SearchIcon />
                    {searchTerm && (
                        <CloseIcon
                            onClick={() => setSearchTerm("")}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                </Input>
                <Input
                    type="text"
                    name="date"
                    placeholder="Дата тура"
                    className={styles.searchInput}
                >
                    <CalendarIcon />
                </Input>
            </div>
            <div className={styles.tourWrapper}>
                {filteredData &&
                    filteredData
                        .filter(({ price }) => price >= priceRange.min && price <= priceRange.max)
                        .map(({ id, planName, startDate, endDate, price, landmarks }) => (
                            <Card
                                key={id}
                                planName={planName}
                                startDate={formatDate(startDate)}
                                endDate={formatDate(endDate)}
                                price={price}
                                onClick={() =>
                                    handleClick(id, planName, startDate, endDate, price, landmarks)
                                }
                            />
                        ))}
            </div>
        </div>
    );
};
