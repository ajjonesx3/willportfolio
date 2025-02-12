import './Header.css';
import {Link} from 'react-router-dom';

const watermelonStyle = {
    color: "rgb(78,170,97)"
}

const Header = () => {

    return (
        <div className="header">
            <div className="content-wrapper">
                <Link className="header" to='/'><h1>Watermelon Will</h1></Link>
                <div className="nav">
                    <ul className="navlist">
                        <li><Link to="/">ME</Link></li>
                        <li style={{cursor:'default'}} className="mystuff">
                            MY STUFF
                            <ul className="TheStuff">
                                <li><Link to="/animation">Animation</Link></li>
                                <li><Link to="/design">Design</Link></li>
                                <li><Link to="/storyboarding">Storyboarding</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog">WHAT I'M DOING</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;