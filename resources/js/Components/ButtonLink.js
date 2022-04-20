import React from 'react';

export default function ButtonLink({  href, className = '',  children }) {
    return (
        <a
            href={href}
            className={
                `inline-flex items-center  px-4 py-2 ml-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 
                opacity-25` + className
            }
        >
            {children}
        </a>
    );
}
