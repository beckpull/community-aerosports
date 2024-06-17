import icon1 from '../assets/react.svg';
import icon2 from '../assets/vite.svg';
import '../styles/Footer.css';

// const styles = {

// }

function Footer() {
    return (
        <footer className="has-text-centered">
            <span>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src={icon1} alt="icon1" className="icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src={icon2} alt="icon2" className="icon" />
            </a>
            </span>
            <p className="signature">made with love, bp</p>
        </footer>
    )
}

export default Footer;