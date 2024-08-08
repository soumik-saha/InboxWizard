import React from 'react';
import { BASE_URL } from '../../config.js';

export default function LoginForm() {
    const handleGoogleLogin = () => {
        const googleLoginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${BASE_URL}/onebox`;
        window.location.href = googleLoginUrl;
    };

    return (
        <>
            <section className="bg-black dark:bg-black flex items-center justify-center" style={{ height: '89.7vh' }}>
                <div className="w-full max-w-md p-6 rounded-2xl shadow dark:border"
                    style={{
                        background: 'linear-gradient(138.97deg, #111214 5.16%, #121212 105.18%)',
                        border: '1px solid #343A40'
                    }}
                >
                    <div className="space-y-4 md:space-y-6 text-center">
                        <h1 className="text-xl leading-tight tracking-tight text-white md:text-2xl">
                            Create a new account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <button type="button" onClick={handleGoogleLogin} className="flex items-center justify-center py-2.5 px-8 mb-2 text-sm font-medium text-white focus:outline-none rounded-md border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" style={{
                                width: '95%',
                                background: 'linear-gradient(138.97deg, #111214 5.16%, #121212 105.18%)',
                                border: '1px solid #707172',
                                margin: '8px'
                            }}>
                                <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="Google logo" style={{ width: '16px', height: '21px', marginRight: '8px' }} />
                                Sign Up with Google
                            </button>
                            <button type="button" className="text-white font-medium text-sm text-center me-2 mb-2" style={{
                                width: '195px',
                                height: '48px',
                                margin: '50px auto 0 auto',
                                padding: '13px 35px',
                                gap: '10px',
                                borderRadius: '4px',
                                background: 'linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)'
                            }}>
                                Create an Account
                            </button>
                            <p className="text-sm font-light text-gray-400 pb-10">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}