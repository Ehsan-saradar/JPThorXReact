import { useState } from "react";
import { Offcanvas } from "../components/OffCanvas/OffCanvas";
import React from 'react';
import { navbarCopy } from "../copy/NavBar";
import { OffcanvasProvider } from "../components/OffCanvas/Context";
import { Trigger } from "../components/OffCanvas/Trigger";


export const NavBar: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleOpen = () => console.log("");
    // Callback function that is triggered when the Offcanvas is closed
    const handleClose = () => console.log("");
    return (
        <>


            <div className="w-100 d-flex py-4 justify-content-between" id="menu">
                <a className="navbar-brand d-flex align-items-center col-6 col-lg-4" href="./index.html">
                    <img src="./img/jpthor-logo.svg" className="d-inline-block align-top" id="header-logo" alt="JPThor Logo" />
                </a>
                <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                    <Trigger />
                    <Offcanvas />
                </OffcanvasProvider>
            </div>
        
        </>
    )
}

