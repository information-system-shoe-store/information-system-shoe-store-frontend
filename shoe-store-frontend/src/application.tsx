import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/product/ProductsPage';
import ProvidersPage from './components/provider/ProvidersPage';
import SalesPage from './components/sale/SalesPage';


export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = props => {

    return (
        <BrowserRouter>
            <div className="Application">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:id" element={<ProductsPage />} />
                </Routes>
                <Routes>
                    <Route path="/providers" element={<ProvidersPage />} />
                    <Route path="/providers/:id" element={<ProvidersPage />} />
                </Routes>
                <Routes>
                    <Route path="/sales" element={<SalesPage />} />
                    <Route path="/sales/:id" element={<SalesPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Application;