import "./Storyboarding.css";
import LeftColumn from '../LeftColumn/LeftColumn';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Storyboarding = () => {

    const columnText = "A Page dedicated to my animatics and storyboards, showcasing my storytelling abilities as well as how I buiLd up my film through composition and setting before the animation is in.";

    return (
        <div className="storyboarding">
            <LeftColumn text={columnText}/>
            <div className="rightSide">
                <div className="selectedImage">
                    <img src={img2} alt='image2'/>
                </div>
                <div className="otherImages">
                    <img src={img1} alt='image1'/>
                    <img src={img3} alt='image3'/>
                </div>
            </div>
        </div>
    )
}
 
export default Storyboarding;