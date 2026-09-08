"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
    children,
    animation = "animate-fade-up",
    animationDelay,
    className = "",
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${
                isVisible ? animation : "opacity-0"
            } ${className} ${animationDelay}`}
        >
            {children}
        </div>
    );
}
