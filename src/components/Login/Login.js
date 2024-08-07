import React, { useState } from 'react';
import LoginNav from './LoginNav';
import LoginFooter from './LoginFooter';
import LoginForm from './LoginForm';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <LoginNav />
            <LoginForm />
            <LoginFooter />
        </div>
    );
};

export default Login;