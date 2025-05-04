import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/user/Profile';
import Setting from '../pages/user/Setting';
import StoreList from '../pages/store/StoreList';
import StoreDetail from '../pages/store/StoreDetail';
import ItemList from '../pages/item/ItemList';
import ItemDetail from '../pages/item/ItemDetail';
import TransactionList from '../pages/transaction/TransactionList';
import AuthPage from '../pages/auth/AuthPage';

export default function AppRoutes() {
    return (
        <Routes>
            {/* Jika user sudah login, arahkan ke Home */}
            <Route path="/" element={<Home />} />

            
            {/* Auth */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />

            {/* User */}
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />

            {/* Store */}
            <Route path="/stores" element={<StoreList />} />
            <Route path="/stores/:id" element={<StoreDetail />} />

            {/* Item */}
            <Route path="/item/ItemList" element={<ItemList />} />
            <Route path="/items/byId/:id" element={<ItemDetail />} />

            {/* Transaction */}
            <Route path="/transactions" element={<TransactionList />} />
        </Routes>
    );
}
