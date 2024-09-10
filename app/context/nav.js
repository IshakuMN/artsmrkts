"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [activePage, setActivePage] = useState(() => {
        // Пытаемся получить значение из localStorage
        const savedPage = localStorage.getItem('activePage');

        return savedPage ? JSON.parse(savedPage) : 1; // Если значение не найдено, возвращаем 1
    });

    useEffect(() => {
        // Сохраняем значение activePage в localStorage при его изменении
        localStorage.setItem('activePage', JSON.stringify(activePage));
    }, [activePage]);

    return (
        <ThemeContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
