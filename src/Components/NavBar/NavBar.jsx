import React, {useEffect, useState} from 'react';
import Logo from "../Logo/Logo.jsx";
import {FiMenu, FiX} from "react-icons/fi";
import LanguageController from "../LanguageController/LanguageController.jsx";
import {useTranslation} from "react-i18next";
import useScrollChange from "../../NavScroll/useScrollChange.js";

const NavBar = () => {

    const {t} = useTranslation();

    const isNavBarVisible = useScrollChange();

    const [showLinks , setShowLinks] = useState(false);

    const handleLinksShowing = () => setShowLinks(!showLinks);

    const navBarAnimation = `transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isNavBarVisible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-32 opacity-0 scale-95 pointer-events-none"}`;

    const navButtonStyle = "text-3xl text-slate-400";

    const linkStyle = "hover:text-blue-800 transition-all duration-300 text-slate-200 text-lg active:bg-slate-950 px-7 py-1 rounded-lg";

    useEffect(() => {
        if (!isNavBarVisible) setShowLinks(false);
    }, [isNavBarVisible]);

    return (
        <nav className={`${navBarAnimation} rounded-full px-7 py-2 shadow-xl sticky top-5 w-[85%] bg-slate-900/40 md:w-[70%] m-auto text-base md:text-xl backdrop-blur-sm flex gap-5 items-center justify-between`}>

            <div className={"w-18"}><Logo/></div>

            {/* DeskTop Menu */}
            <ul className={"hidden min-[1170px]:flex gap-3 items-center justify-center"}>
                <li><a href="#me" className={linkStyle}>{t('links.me')}</a></li>
                <li><a href="#stack" className={linkStyle}>{t('links.stack')}</a></li>
                <li><a href="#projects" className={linkStyle}>{t('links.projects')}</a></li>
                <li><a href="#phone" className={linkStyle}>{t('links.phone')}</a></li>
            </ul>

            <div className={"flex gap-2 items-center justify-center"}>
                <LanguageController/>
                <button onClick={handleLinksShowing} className={"min-[1170px]:hidden cursor-pointer active:translate-y-0.5"}>
                    {showLinks ? <FiX className={navButtonStyle}/> : <FiMenu className={navButtonStyle}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${showLinks ? "translate-y-5 opacity-100 scale-100" : "opacity-0 scale-85 pointer-events-none"} shadow-xl backdrop-blur-md bg-slate-900/95 border border-slate-300/20 min-[1170px]:hidden overflow-hidden transition-all duration-300 absolute top-full right-4 w-45 rounded-xl px-2 py-5 flex flex-col items-center justify-center`}>
                <ul className={"flex flex-col gap-3 items-center justify-center"}>
                    <li><a href="#me" className={linkStyle}>{t('links.me')}</a></li>
                    <li><a href="#stack" className={linkStyle}>{t('links.stack')}</a></li>
                    <li><a href="#projects" className={linkStyle}>{t('links.projects')}</a></li>
                    <li><a href="#phone" className={linkStyle}>{t('links.phone')}</a></li>
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;