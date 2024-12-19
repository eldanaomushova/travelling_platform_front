import { Typography } from "@ui/typography/Typography";
import styles from "./ourTeam.module.scss";
import { TeamCard } from "@ui/cards/teamCard/TeamCard";

const teamMembers = [
    {
        name: "Алексей Иванов",
        responsibility: "Backend разработчик",
    },
    {
        name: "Мария Смирнова",
        responsibility: "Frontend разработчик",
    },
    {
        name: "Иван Петров",
        responsibility: "Дизайнер",
    },
    {
        name: "Ольга Сидорова",
        responsibility: "Менеджер проекта",
    },
    {
        name: "Ольга Сидоров",
        responsibility: "Менеджер проекта",
    },
];

export const OurTeam = () => {
    return (
        <div className={styles.ourTeamContainer}>
            <Typography variant="h1" weight="small" className={styles.ourTeamTitle}>
                НАША КОМАНДА
            </Typography>
            <Typography variant="h6" className={styles.ourTeamSubtitle}>
                Пока не большая, но зато дружная!
            </Typography>
            <div className={styles.teamCards}>
                {teamMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        responsibility={member.responsibility}
                    />
                ))}
            </div>
        </div>
    );
};
