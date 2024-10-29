export const BackArrowIcon = ({ onClick, className }) => {
    return (
        <svg
            className={className}
            onClick={onClick}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.58579 18.5858C2.80474 19.3668 2.80474 20.6332 3.58578 21.4142L16.3137 34.1421C17.0948 34.9232 18.3611 34.9232 19.1421 34.1421C19.9232 33.3611 19.9232 32.0948 19.1421 31.3137L7.82842 20L19.1421 8.68629C19.9232 7.90524 19.9232 6.63891 19.1421 5.85786C18.3611 5.07681 17.0948 5.07681 16.3137 5.85786L3.58579 18.5858ZM35 18L5 18L5 22L35 22L35 18Z"
                fill="black"
            />
        </svg>
    );
};
