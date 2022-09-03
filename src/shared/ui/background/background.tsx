import { FC } from "react";
import { BackgroundProps } from "./background.types";
import styles from "./background.module.css";

export const Background: FC<BackgroundProps> = () => {
    return (
        <div className={styles.background}>
            <svg
                className={styles.image}
                fill="none"
                height="1602"
                viewBox="0 0 2769 1602"
                width="2769"
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter
                    id="a"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="1044"
                    width="1044"
                    x="1682"
                    y="558"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                    />
                    <feGaussianBlur
                        result="effect1_foregroundBlur"
                        stdDeviation="100"
                    />
                </filter>
                <filter
                    id="b"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="1044"
                    width="1044"
                    x="1725"
                    y="0"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                    />
                    <feGaussianBlur
                        result="effect1_foregroundBlur"
                        stdDeviation="100"
                    />
                </filter>
                <filter
                    id="c"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="858"
                    width="982"
                    x="0"
                    y="23"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                    />
                    <feGaussianBlur
                        result="effect1_foregroundBlur"
                        stdDeviation="100"
                    />
                </filter>
                <filter
                    id="d"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="646"
                    width="982"
                    x="279"
                    y="58"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                    />
                    <feGaussianBlur
                        result="effect1_foregroundBlur"
                        stdDeviation="100"
                    />
                </filter>
                <g filter="url(#a)" opacity=".14">
                    <circle
                        cx="2204"
                        cy="1080"
                        fill="var(--accent-purple)"
                        r="322"
                    />
                </g>
                <g filter="url(#b)" opacity=".47">
                    <circle
                        cx="2247"
                        cy="522"
                        fill="var(--accent-color)"
                        r="322"
                    />
                </g>
                <g filter="url(#c)" opacity="0.53">
                    <ellipse
                        cx="491"
                        cy="452"
                        fill="var(--accent-pink)"
                        rx="291"
                        ry="229"
                    />
                </g>
                <g filter="url(#d)" opacity=".33">
                    <ellipse
                        cx="770"
                        cy="381"
                        fill="var(--accent-purple)"
                        rx="291"
                        ry="123"
                    />
                </g>
            </svg>
        </div>
    );
};
