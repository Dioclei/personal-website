import React from 'react';
import Link from 'next/link';

const NavigationBar: React.FC = () => {
    return (
        <nav>
            <ul className='flex p-4 gap-4'>
                <li><Link href="/">logo</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;