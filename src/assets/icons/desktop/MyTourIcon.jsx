export const MyTourIcon = ({ className, width = "32px", height = "32px", onClick, color }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            stroke={color}
            viewBox="0 0 34 34"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M11 14V27.5C11 27.5 11 32 15.5 32C20 32 20 27.5 20 27.5V12.5C20 12.5 19.25 8 24.5 8C29.75 8 29 12.5 29 12.5V26M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14ZM29 26C27.3431 26 26 27.3431 26 29C26 30.6569 27.3431 32 29 32C30.6569 32 32 30.6569 32 29C32 27.3431 30.6569 26 29 26Z"
                stroke="color"
                stroke-width="2"
            />
        </svg>
    );
};
