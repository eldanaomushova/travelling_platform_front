export const ChatButton = ({ className, width = "70px", height = "70px", onClick }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_816_3176" fill="white">
                <path d="M0 20C0 8.95431 8.95431 0 20 0H100C111.046 0 120 8.95431 120 20V100C120 111.046 111.046 120 100 120H20C8.95431 120 0 111.046 0 100V20Z" />
            </mask>
            <path
                d="M0 20C0 8.95431 8.95431 0 20 0H100C111.046 0 120 8.95431 120 20V100C120 111.046 111.046 120 100 120H20C8.95431 120 0 111.046 0 100V20Z"
                fill="#25D75A"
            />
            <path
                d="M0 0H120H0ZM120 100C120 112.15 110.15 122 98 122H22C9.84974 122 0 112.15 0 100C0 109.941 8.9543 118 20 118H100C111.046 118 120 109.941 120 100ZM0 120V0V120ZM120 0V120V0Z"
                fill="black"
                mask="url(#path-1-inside-1_816_3176)"
            />
            <path
                d="M59.0044 90C65.6608 89.999 72.1278 87.7843 77.3874 83.7045C82.6469 79.6247 86.4002 73.9116 88.0565 67.4646C89.7127 61.0176 89.1778 54.2028 86.5359 48.0932C83.894 41.9835 79.2952 36.926 73.4635 33.7168C67.6318 30.5077 60.8985 29.3292 54.3235 30.3668C47.7485 31.4044 41.7053 34.5993 37.1453 39.4484C32.5853 44.2975 29.7675 50.5254 29.1356 57.1517C28.5036 63.778 30.0933 70.4264 33.6545 76.05L29.0045 90L42.9545 85.35C47.753 88.3955 53.321 90.0087 59.0044 90Z"
                stroke="black"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};