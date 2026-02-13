import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-slate-50">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Footer handles manually per page for now */}
        </div>
    );
};

export default Layout;
