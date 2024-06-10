import React from 'react';
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='absolute bottom-0 w-full flex flex-col gap-4 p-4'>
                <div>
                    Created by Jason Lee.
                </div>
                <Link href="https://www.github.com/Dioclei">
                    Check out my github
                </Link>
            </div>
        </footer>
    );
};

export default Footer;