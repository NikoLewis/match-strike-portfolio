import React from 'react';

function Footer() {
    return (
        <footer className="py-8 text-center text-gray-400 text-sm font-lato bg-dark-purple-end/50">
            <p className="text-sm text-gray-500 font-lato mt-16">
                Designed & Built by Niko Lewis
            </p>
            <p>&copy; {new Date().getFullYear()} Niko Lewis. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
