import React from 'react';

export const Button = ({ children }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8">
            {children}
        </button>
    );
};
