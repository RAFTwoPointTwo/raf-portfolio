import { useState, useEffect } from "react";

const useScrollChange = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {

        const controlNavbar = () => {

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) { setIsVisible(false); }
            else { setIsVisible(true); }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };

    }, [lastScrollY]);

    return isVisible;

};

export default useScrollChange;