import React from 'react';

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center container mx-auto pt-5">
            <a href='#' className="title-font text-2xl text-white font-bold hover:text-black hover:underline hover:underline-offset-8">
                SpaceX
            </a>
            <div className="flex items-center text-base text-white justify-center">
                <a href='#banner' className="mr-5 hover:text-black hover:underline hover:underline-offset-8">Banner</a>
                <a href='#search' className="mr-5 hover:text-black hover:underline hover:underline-offset-8">Search</a>
                <a href='#data-grid' className="mr-5 hover:text-black hover:underline hover:underline-offset-8">Data Grid</a>
            </div>
        </nav>
    );
}

export default Navbar;
