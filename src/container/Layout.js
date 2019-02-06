
import React from 'react';
import Header from '../components/Header';
const Layout = (props) => {

    return (
        <div>
            <div className="App">
                <Header/>
                <main>{props.children}</main>
            </div>
        </div>
    );
};

export default Layout;