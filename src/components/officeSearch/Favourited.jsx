"use client";
import React, { useState } from "react";
import styles from "./officeSearch.css"

export default function Favourited() {
    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(prevState => !prevState);
    };
    return (
        <>
            <svg className={`  ${isFavorited ? ("heartSvgCheck") : ("heartSvg")}`} xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 24 24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
                onClick={toggleFavorite}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
        </>
    )
}
