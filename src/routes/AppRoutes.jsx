import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
import Profile from '../pages/user/Profile';
// import Setting from '../pages/user/Setting';
// import AuthPage from '../pages/auth/AuthPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            
            {/* Auth */}
            {/* <Route path="/auth" element={<AuthPage />} /> */}
            {/* <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} /> */}

            {/* User */}
            <Route path="/user/profile" element={<Profile />} />
            {/* <Route path="/setting" element={<Setting />} /> */}

        </Routes>
    );
}
