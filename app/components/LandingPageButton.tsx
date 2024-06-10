import React from 'react'

export default function LandingPageButton({ children }: { children: React.ReactNode }) {
    return (
        <button className='basis-auto p-6 rounded-full bg-cyan-500 text-white font-medium shadow'>
            {children}
        </button>
    )
}