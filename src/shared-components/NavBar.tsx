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
                {/* <img src="./img/text-center.svg" height="50px" id="menu-ico" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" onClick={handleShow} /> */}
            </div>
            {/* <Offcanvas placement={"end"} className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel" show={show} onHide={handleClose}>
                <Offcanvas.Header className="offcanvas-header p-5" closeButton closeVariant="white">
                    <Offcanvas.Title className="offcanvas-title" id="offcanvasRightLabel">{navbarCopy.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <OffcanvasBody className="offcanvas-body px-5 py-2">
                    <ul className="navbar-nav text-end">
                        {navbarCopy.links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a href={link.href} className="nav-link">{link.title}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className="w-100 d-flex position-fixed bottom-0" style={{ listStyle: "none" }}>
                        {navbarCopy.socials.map((social, index) => (
                            <li key={index} className="p-social">
                                <a target={social.target} href={social.href} >
                                    <img src={social.image} alt={social.title} />
                                </a>
                            </li>

                        ))}

                    </ul>
                </OffcanvasBody>
            </Offcanvas > */}
        </>
    )
}

