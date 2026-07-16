import { Header } from "../components/Header/Header";
import hero from '../assets/hero.png'
import './pages.css'
export function MainPage() {
    return (
        <div className="main-page">
            <Header/>
            <div className="hero-part">
                <img src={hero} alt="hero" className="hero-img"/>
                <div className="hero-text">
                    <h3>Путешествуйте с комфортом</h3>
                    <div className="hero-description">
                        <p>Лучшие отели по выгодным ценам</p>
                        <p>в любой точке мира</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}