import React, { useEffect, useState } from 'react';

export const useBreakpoints = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    const handleResize= () => {
        setIsDesktop(window.innerWidth > 1024);
        setIsTablet(window.innerWidth < 1025 && window.innerWidth > 767);
        setIsMobile(window.innerWidth < 768);
    }

    return {
        isDesktop, isTablet, isMobile
    };
}