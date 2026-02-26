import React from "react";
import { cn } from "@/lib/utils";
import styles from "./loading.module.css"

interface Props {
    className?: string;
}

export const LoadingSpinner: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <svg
                className={styles.pl}
                width="128px"
                height="128px"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    className={styles.pl__ring2}
                    cx="64"
                    cy="64"
                    r="52.5"
                    fill="none"
                    stroke="hsl(13,90%,55%)"
                    strokeWidth="12" // Изменено
                    transform="rotate(-90,64,64)"
                    strokeLinecap="round" // Изменено
                    strokeDasharray="329.9 329.9" // Изменено
                    strokeDashoffset="-329.3" // Изменено
                ></circle>

                <circle
                    className={styles.pl__ring4}
                    cx="64"
                    cy="64"
                    r="37.5"
                    fill="none"
                    stroke="hsl(33,90%,55%)"
                    strokeWidth="9" // Изменено
                    transform="rotate(-90,64,64)"
                    strokeLinecap="round" // Изменено
                    strokeDasharray="254.5 254.5" // Изменено
                    strokeDashoffset="-254" // Изменено
                ></circle>

                <circle
                    className={styles.pl__ring6}
                    cx="64"
                    cy="64"
                    r="22.5"
                    fill="none"
                    stroke="hsl(53,90%,55%)"
                    strokeWidth="9" // Изменено
                    transform="rotate(-90,64,64)"
                    strokeLinecap="round" // Изменено
                    strokeDasharray="204.2 204.2" // Изменено
                    strokeDashoffset="-203.9" // Изменено
                ></circle>
            </svg>
        </div>
    );
};