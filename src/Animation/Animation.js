import "./Animation.css";
import LeftColumn from '../LeftColumn/LeftColumn';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const columnText = "This Page showcases my animation. ranging from simple quick films to big spectacles. my style focuses on energy and the feel of the scene. I accomplish this through my dynamic and creative angles as well as background animation and complex effects animation.";

const Animation = () => {
    return (
        <div className="animation">
            <LeftColumn text={columnText}/>
            <div className="rightSide">
                <div className="selectedImage">
                    <img src={img1} alt='image1'/>
                </div>
                <div className="otherImages">
                    <img src={img2} alt='image2'/>
                    <img src={img3} alt='image3'/>
                </div>
            </div>
        </div>
    )
}

export default Animation;