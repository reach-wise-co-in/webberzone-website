"use client";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
const logo = "/webberzone-logo.svg";
import { Link, useLocation } from "@/lib/router";

function Header() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState({ enterprises: false, services: false, solutions: false });
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseEnter = (dropdown) => {
        if (window.innerWidth >= 992) { // lg breakpoint
            setIsOpen(prevState => ({ ...prevState, [dropdown]: true }));
        }
    };

    const handleMouseLeave = (dropdown) => {
        if (window.innerWidth >= 992) { // lg breakpoint
            setIsOpen(prevState => ({ ...prevState, [dropdown]: false }));
        }
    };

        const handleLinkClick = () => {
            setExpanded(false);
            setIsOpen({ enterprises: false, services: false, solutions: false });
        };

    const handleToggleClick = () => {
        setExpanded(expanded ? false : "expanded");
    };

    const handleDropdownClick = (dropdown) => {
        if (window.innerWidth < 992) { // lg breakpoint
            setIsOpen(prevState => ({ ...prevState, [dropdown]: !prevState[dropdown] }));
        }
    };

    return (
        <Navbar expand="lg" className={`bg-utility sticky-top ${scrolled ? 'scrolled' : ''}`} expanded={expanded}>
            <Container>
                <Navbar.Brand href="/" onClick={handleLinkClick}>
                    <img src={logo} alt="WebberZone logo" className='logo-nav' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <div className={`dropdown nav-item-wrapper ${isOpen.enterprises ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('enterprises')} onMouseLeave={() => handleMouseLeave('enterprises')} onClick={() => handleDropdownClick('enterprises')}>
                            <Link to="/" className='drop-btn'>
                                <button className={`btn drop-btn me-3 nav-text ${pathname === '/enterprises' ? 'active' : ''}`} type="button" id="dropdownMenuButton" aria-expanded={isOpen.enterprises ? "true" : "false"} onClick={handleLinkClick}>
                                    Company
                                    <span className="orange-circle"></span>
                                </button>
                            </Link>
                            <ul className={`dropdown-menu ${isOpen.enterprises ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                <li><Link className="dropdown-item" to="/pricing" onClick={handleLinkClick}>Pricing Plans</Link></li>
                                <li><Link className="dropdown-item" to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
                            </ul>
                        </div>

                        <Nav.Link as={Link} to="/about" className={`me-3 nav-text ${pathname === '/case-studies' ? 'active' : ''}`} onClick={handleLinkClick}>About us</Nav.Link>

                        <div className={`dropdown nav-item-wrapper ${isOpen.services ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')} onClick={() => handleDropdownClick('services')}>
                            <Link to="/services" className='drop-btn'>
                                <button className={`btn drop-btn me-4 nav-text ${pathname === '/services' ? 'active' : ''}`} type="button" id="dropdownMenuButton" aria-expanded={isOpen.services ? "true" : "false"} onClick={handleLinkClick}>
                                    Services
                                    <span className="orange-circle"></span>
                                </button>
                            </Link>
                            <ul className={`dropdown-menu ${isOpen.services ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/services/1" onClick={handleLinkClick}>Social Media Management</Link></li>
                            <li><Link className="dropdown-item" to="/services/2" onClick={handleLinkClick}>Meta & Google Ads</Link></li>
                            <li><Link className="dropdown-item" to="/services/3" onClick={handleLinkClick}>Geo-Fencing Ads</Link></li>
                            <li><Link className="dropdown-item" to="/services/4" onClick={handleLinkClick}>Content & AI Videos</Link></li>
                            <li><Link className="dropdown-item" to="/services/5" onClick={handleLinkClick}>SEO</Link></li>
                            <li><Link className="dropdown-item" to="/services/6" onClick={handleLinkClick}>Website & App Development</Link></li>
                            </ul>
                        </div>

                        <Nav.Link href="/contact" className={`me-3 nav-text ${pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
