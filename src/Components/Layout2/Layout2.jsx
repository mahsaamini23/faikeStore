import React from "react";
import Navbar from "../Layout/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <main className="container" style={{backgroundColor:"#22a593", width:"100%", height:"660px"}}>
                <Outlet/>
            </main>
        </React.Fragment>
    )
}

export default Layout2;