import React from 'react';

function Footer() {
    return (
        <footer className="py-2 text-center text-gray-400 text-sm font-lato bg-dark-purple-end/50 bg-cover bg-no-repeat" style={{ backgroundImage: 'url("luke-chesser-eICUFSeirc0-unsplash.jpg")'}}>
            <div className=" flex justify-around mx-auto px-4 relative ">
            <p className="text-lg text-white-500 font-lato ">
                Designed & Built by Niko Lewis
            </p>
            <p className="text-lg text-white-500 font-lato ">&copy; {new Date().getFullYear()} Niko Lewis. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
