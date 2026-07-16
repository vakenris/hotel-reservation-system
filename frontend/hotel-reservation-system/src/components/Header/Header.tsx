import { FiGlobe } from 'react-icons/fi';
import './header.css'
import {} from 'react-icons'
import { FaChevronDown } from 'react-icons/fa6';
export function Header() {
    return(
        <div className="header">
            <label className="header-logo">
                <h1 className="logo-first">Booking</h1>
                <h1 className="logo-second">Guide</h1>
            </label>
            <nav className="header-nav">
                <a href="#">Отели</a>
                <a href="#">Популярные направления</a>
                <a href="#">Избранное</a>
            </nav>
            <div className="header-buttons">
                <button className="header-selector">
                    <FiGlobe className="world-icon" size={20}/>
                    <span>RU</span>
                    <FaChevronDown/>
                </button>
                <button className="header-enter">Войти</button>
            </div>
        </div>
    );
}