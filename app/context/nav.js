"use client";
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [activePage, setActivePage] = useState(1);

    return (
        <ThemeContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
