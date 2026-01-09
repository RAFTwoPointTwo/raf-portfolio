import { useTranslation } from 'react-i18next';
import {FiGlobe} from "react-icons/fi";

const LanguageController = () => {
    const { i18n , t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className={"flex items-center justify-evenly p-1 w-15 shadow bg-slate-950 border border-blue-950 rounded-lg hover:bg-slate-900 transition cursor-pointer active:bg-slate-800 active:translate-y-0.5"}
        >
            <FiGlobe size={18} className="group-hover:rotate-[20deg] transition-transform duration-500 text-blue-500"/>
            <span className={"text-base"}>{t('change_lang')}</span>
        </button>
    );
};

export default LanguageController;