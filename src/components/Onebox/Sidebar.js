import React from "react";
import { FaHome, FaSearch, FaEnvelope, FaArrowRight, FaList, FaInbox, FaChartLine, FaUser } from "react-icons/fa";

const Sidebar = () => {
    const menuItems = [
        { icon: <FaHome size={24} className="text-gray-400 hover:text-black" />, text: "Home" },
        { icon: <FaSearch size={24} className="text-gray-400 hover:text-black" />, text: "Find" },
        { icon: <FaEnvelope size={24} className="text-gray-400 hover:text-black" />, text: "Mail" },
        { icon: <FaArrowRight size={24} className="text-gray-400 hover:text-black" />, text: "Send Mail" },
        { icon: <FaList size={24} className="text-gray-400 hover:text-black" />, text: "List" },
        { icon: <FaInbox size={24} className="text-gray-400 relative hover:text-black" />, text: "Inbox", notification: 12 },
        { icon: <FaChartLine size={24} className="text-gray-400 hover:text-black" />, text: "Analytics" },
    ];

    return (
        <div className="fixed top-0 left-0 w-[50px] h-screen bg-black shadow-lg flex flex-col justify-between" style={{ background: "#101113" }}>
            <div className="flex justify-center items-center h-20">
                <img
                    src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl4AzEtXSK~06lRD-V3DXYPZGX-3ok8CEebBaMpSkWQAkFWOVwabcZspMmEKNJES3i8SqT9w1c-Qt96D1-3ezTqfrM~RwaNthPHlPppqJ4fCG0oXLlENaaOubkJhpqGEVqAwJK54pmhpO0YTC5QDVSexqsQ9r2XMeBnhoLJDvYGo4GiLG-IDAY3q4Xstp5YuRtiWYG2EpThoF3R1SiQYLzYuHq0ges5bFcTw64nKinSqt0hB8A7~LcnqIvJImb0Nya-B12d1M13IxP3i0zLHkkWXM0XrvjmSVFkuS9mX82bDOqUG7A9lH~R3GH-A38NCtoyLR17HHwFxf~d9kB59hw__"
                    alt="logo"
                    className="w-20 h-10 object-cover object-left m-0 p-0"
                />
            </div>
            <nav className="flex-grow flex flex-col justify-top items-center p-1.25 py-7">
                <ul className="flex flex-col space-y-4">
                    {menuItems.map(({ icon, text, notification }, index) => (
                        <li
                            key={index}
                            className="text-xl flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-md w-full relative h-12"
                        >
                            {icon}
                            {notification && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {notification}+
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex justify-center items-center p-4">
                <FaUser size={32} className="text-gray-400 hover:text-white" />
            </div>
        </div>
    );
};

export default Sidebar;