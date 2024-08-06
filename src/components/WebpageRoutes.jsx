import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./Dashboard'));

function WebpageRoutes() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/"
                    element={
                        <React.Suspense fallback={<></>}>
                            <Dashboard />
                        </React.Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default WebpageRoutes;