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
import MoreFormsPage from './components/MoreFormsPage';
import FeesPage from './components/FeesPage';
import SexualBehaviorPage from './components/SexualBehaviorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/potential-client-form" element={<FormPage />}></Route>
            <Route path="/staff/:staffID" element={<StaffPage />}></Route>
            <Route path="/more-forms" element={<MoreFormsPage />}></Route>
            <Route path="/fees-insurance" element={<FeesPage />}></Route>
            <Route path="/problematic-sexual-behaviors" element={<SexualBehaviorPage />}></Route>
        </Routes>
    </BrowserRouter>
);
