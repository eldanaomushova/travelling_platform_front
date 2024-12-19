export const ActivityTourIcon = ({ className, width = "70px", height = "70px", onClick }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M10 49.9999H27.7778L41.1111 85.5555L58.8889 14.4443L72.2222 49.9999H90"
                stroke="#25D75A"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
