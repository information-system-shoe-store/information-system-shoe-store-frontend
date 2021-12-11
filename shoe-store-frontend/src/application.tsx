import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/product/ProductsPage';


export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = props => {

    return (
        <BrowserRouter>
            <div className="Application">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Application;