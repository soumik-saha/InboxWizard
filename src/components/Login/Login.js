import React, { useState } from 'react';
import LoginNav from './LoginNav';
import LoginFooter from './LoginFooter';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <LoginNav />
            <LoginForm />
            <LoginFooter />
        </div>
    );
};

export default Login;