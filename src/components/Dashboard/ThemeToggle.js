import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useTheme();

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex items-center mr-4">
            <div
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-300 border-gray-400'}`}
                onClick={toggleDarkMode}
                style={{ background: darkMode ? '#222426' : '#f0f0f0', borderColor: darkMode ? '#343A40' : '#d0d0d0' }}
            >
                <div className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? 'translate-x-8' : ''}`} style={{ background: '#f8f9fa', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', border: '2px solid #d0d0d0' }}></div>
                <div className={`absolute ${darkMode ? 'text-gray-400' : 'text-yellow-400'} ${darkMode ? 'ml-2' : 'ml-8'}`}>
                    {darkMode ? <FaMoon /> : <FaSun />}
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;