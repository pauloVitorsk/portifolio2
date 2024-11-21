import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuRespon, setMenuRespon] = React.useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Verifica se o clique ocorreu fora do menu
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuRespon(false); // Fecha o menu
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRespon]);
    return (
        <header className='header-conteiner'>
            <div className="usuario">
                <label>Paulo</label>
                <label className="usuario-2">Vitorsk</label>
            </div>

            <div className={"nav"}>
                <Link to="/" className={"nav"}> Home </Link>
                <Link to="/" className={"nav"}> Project </Link>
                <Link to="/About" className={"nav"}> About </Link>
            </div>

            <div className={"header-lEsquerdo"}>
                <div className={"menu-responsive"} ref={menuRef}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={"menu"}
                        onClick={() => { setMenuRespon(!menuRespon) }}
                    />
                    <div className={menuRespon ? "dropdow" : "invisible"}>
                        <Link to="/" className={"item-menu"}> Home </Link>
                        <Link to="/" className={"item-menu"}> Project </Link>
                        <Link to="/About" className={"item-menu"}> About </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;