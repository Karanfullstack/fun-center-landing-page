// Left.jsx or Left.tsx
export function Left({ fill = "#000000" }) {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 5V7H14V5L16 5Z" fill={fill} />
            <path d="M12 9L12 7L14 7L14 9H12Z" fill={fill} />
            <path d="M10 11L10 9L12 9V11H10Z" fill={fill} />
            <path d="M10 13L8 13L8 11L10 11V13Z" fill={fill} />
            <path d="M12 15V13H10L10 15H12Z" fill={fill} />
            <path d="M12 15H14V17H12L12 15Z" fill={fill} />
            <path d="M16 19L16 17H14L14 19H16Z" fill={fill} />
        </svg>
    );
}

export function Right({ fill = "#000000" }) {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 5V7H14V5L16 5Z" fill={fill} />
            <path d="M12 9L12 7L14 7L14 9H12Z" fill={fill} />
            <path d="M10 11L10 9L12 9V11H10Z" fill={fill} />
            <path d="M10 13L8 13L8 11L10 11V13Z" fill={fill} />
            <path d="M12 15V13H10L10 15H12Z" fill={fill} />
            <path d="M12 15H14V17H12L12 15Z" fill={fill} />
            <path d="M16 19L16 17H14L14 19H16Z" fill={fill} />
        </svg>
    );
}
