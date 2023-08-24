import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center">
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
