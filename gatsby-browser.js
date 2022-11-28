import React from "react";
import { ConfigProvider } from 'antd';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
    <ConfigProvider>
        {element}
    </ConfigProvider>
);