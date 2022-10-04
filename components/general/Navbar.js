import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {

    const [idToggle, setIDToggle] = useState('false');

    const idToggleSwitch = () => {
        idToggle ? setIDToggle(false) : setIDToggle(true);
    }

        return (
            <nav className="navbarr">
                <div className="navbarr_container">
                    <Link href="/"><a id="navbarr_logo"> <Image src="/images/FundWiseLogo.png" width="148.8" height="30" /> </a></Link>
                    <div className={idToggle ? "navbarr_toggle" : "navbarr_toggle is_active"} id="mobile_menu" onClick={idToggleSwitch}>
                        <span className="bar"></span><span className="bar"></span><span className="bar"></span>
                    </div>
                    <ul className={idToggle ? "navbarr_menu" : "navbarr_menu active"}>
                        <li className="navbarr_item"><Link href="/"><a role="button" className="navbarr_links">Home</a></Link></li>
                        <li className="navbarr_item"><Link href="/services"><a role="button" className="navbarr_links">Services</a></Link></li>
                        <li className="navbarr_item"><Link href="/contact"><a role="button" className="navbarr_links">Contact Us</a></Link></li>
                        <li className="navbarr_btn"><Link href="/signup_signin"><a role="button" className="button">Sign In</a></Link></li>
                        {/* <li className="navbarr_btn"><Link  href="/signup_signin"><a id="header_signup" role="button" className="button">Sign Up</a></Link></li> */}
                    </ul>
                </div>
            </nav>
        );
    }

    export default Navbar;