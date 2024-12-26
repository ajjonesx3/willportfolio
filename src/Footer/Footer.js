import './Footer.css';
import pdf from './Will_Jensen_Resume.pdf';

const Footer = () => {

    return (
        <div className="FooterContent">
            <div className="TopContent">
                <div className="Socials">
                    <ul className="SocialsLinks">
                        <li><a href="https://www.instagram.com/watermelonwillart/" target="__blank" ><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://x.com/Wix" target="__blank" ><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/william-jensen-02165b232/" target="__blank" ><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className="Resume">
                    <a href={pdf} target="__blank">RESUME</a>
                </div>
            </div>
            <div className="Copyright">
            <i className="fa-regular fa-copyright"></i>
                2023 by Will Jensen
            </div>
        </div>
    )
}

export default Footer;