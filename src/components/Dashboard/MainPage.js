import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "./AllInbox.js";
import CenterPage from "./CenterPage.js";
import RightSection from "./RightSection.js";

function MainPage() {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedThread, setSelectedThread] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const res = await axios.get(
                        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
                        {
                            headers: {
                                Authorization: token,
                            },
                        }
                    );
                    setData(res.data.data);
                    setLoading(false);
                } else {
                    console.warn("No token found in localStorage");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        const interval = setInterval(fetchData, 2500);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
                Loading ...
            </div>
        );
    }

    const loadMail = async (threadId) => {
        setSelectedThread(threadId);
    };

    return (
        <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen">
            <div className="w-1/4">
                <AllInbox data={datas} loadMail={loadMail} />
            </div>
            <div className="w-2/4">
                <CenterPage selectedThread={selectedThread} />
            </div>
            <div className="w-1/4">
                <RightSection />
            </div>
        </div>
    );
}

export default MainPage;
