import React from "react";
import PortafolioContextProvider from "./src/context/PortafolioContextProvider";
import { ConfigProvider } from 'antd';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
    <PortafolioContextProvider>
        <ConfigProvider>
            {element}
        </ConfigProvider>
    </PortafolioContextProvider>
);