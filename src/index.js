import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import FormPage from './components/FormPage';
import Home from './components/Home';
import StaffPage from './components/StaffPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/potential-client-form" element={<FormPage />}></Route>
            <Route path="/staff/:staffID" element={<StaffPage />}></Route>
        </Routes>
    </BrowserRouter>
);
