import React, { useState } from 'react';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="flex items-center justify-between pl-20 pr-5 p-2" style={{ background: '#1F1F1F' }}>
            <div className="text-white text-xl">OneBox</div>
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                    <div
                        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-300 border-gray-400'}`}
                        onClick={toggleDarkMode}
                        style={{ background: '#222426', borderColor: '#343A40' }}
                    >
                        <div className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? 'translate-x-8' : ''}`} style={{ background: 'white' }}></div>
                        <div className={`absolute ${darkMode ? 'text-gray-400' : 'text-yellow-400'} ${darkMode ? 'ml-2' : 'ml-8'}`}>
                            {darkMode ? <FaMoon /> : <FaSun />}
                        </div>
                    </div>
                </div>
                <div className="text-white text-xl flex items-center">
                    Tim's Workspace <FaChevronDown className="ml-2" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;