import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Dashboard() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <Sidebar />
                <div className="flex-grow flex flex-col justify-center items-center bg-black p-8">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <img src='/EmptyMail.png' alt="empty-inbox" className="w-72 h-72 object-cover object-center" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 mt-8">
                        <div className="text-center text-gray-800 text-2xl font-bold leading-9" style={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontFamily: 'DM Sans',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '152.2%' /* 36.528px */
                        }}>It’s the beginning of a legendary sales pipeline</div>
                        <div className="w-72 text-center text-gray-600 text-lg font-medium leading-7" style={{
                            color: '#9E9E9E',
                            textAlign: 'center',
                            fontFamily: 'DM Sans',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '152.2%' /* 27.396px */
                        }}>When you have inbound E-mails you’ll see them here</div>
                    </div>
                </div>
            </div>
        </div>
    );
}