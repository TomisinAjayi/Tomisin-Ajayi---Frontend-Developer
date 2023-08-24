import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Search from '../components/Search';
import Datagrid from '../components/Datagrid';
import { DataProvider } from '../services/data.context';
import Footer from '../components/Footer';

const Landingpage = () => {


    return (
        <div className='background'>
            <div className='container mx-auto p-5'>
                <Navbar />
                <Header />
                <Banner />
                <DataProvider>
                    <Search />
                </DataProvider>
                <DataProvider>
                    <Datagrid />
                </DataProvider>
                <Footer />
            </div>
        </div>
    );
}

export default Landingpage;
