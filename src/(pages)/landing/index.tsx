
import { useEffect, useState } from "react";
import { Founder } from "../../components/Founder";
import { Header } from "../../components/Header";
import { MeetJP } from "../../components/MeetJP";
import { Engineer } from "../../components/Engineer";
import { Explorer } from "../../components/Explorer";
import { Investor } from "../../components/Investor";
import { Bio } from "../../components/Bio";
import { Principles } from "../../components/Principles";


export function Landing() {
    const [mounted, setMounted] = useState(true)
    useEffect(() => {
        const loadScript = (src: string) => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script ${src}`));
                document.body.appendChild(script);
            });
        };

        const loadScripts = async () => {
            try {
                await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
                await loadScript('../lib/fadescroll.js');


                const items = document.querySelectorAll('.appear2');
                const itemsAppear = document.querySelectorAll('.appear3');
                const active = function (entries: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('inview2');
                        } else {
                            entry.target.classList.remove('inview2');
                        }
                    });
                }
                const io2 = new IntersectionObserver(active);
                for (let i = 0; i < items.length; i++) {
                    io2.observe(items[i]);
                }


                // appear
                const active2 = function (entries: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('inview2');
                        } else {
                            entry.target.classList.remove('inview2');
                        }
                    });
                }
                const io3 = new IntersectionObserver(active2);
                for (let i = 0; i < itemsAppear.length; i++) {
                    io2.observe(itemsAppear[i]);
                }

                // scroller
                $(window).scroll(function () {
                    const menu = document.querySelector("#menu");
                    if (menu === null) {
                        return;
                    }
                    if (window.scrollY > 300) {
                        if (!menu.classList.contains('fixed-top')) {
                            menu.classList.add('fixed-top');
                        }
                    } else {
                        if (menu.classList.contains('fixed-top')) {
                            menu.classList.remove('fixed-top');
                        }
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };

        loadScripts();
    }, []);
    return (
        <>
            {mounted &&
                <>
                    <Header />
                    <div className="container mt-lg-high">
                        <div className="vertical-line"></div>
                        <div className="section" style={{ marginTop: "-120px" }}>
                            <div className="bullet top-bullet" style={{ top: "-100px" }}></div>
                        </div>
                        <MeetJP />
                        <Founder />
                        <Engineer />
                        <Explorer />
                        <Investor />
                        <Bio />
                        <Principles />
                    </div >
                </>
            }
        </>

    )
}