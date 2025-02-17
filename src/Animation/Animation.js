import "./Animation.css";
import LeftColumn from '../LeftColumn/LeftColumn';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

import {useState} from 'react';

const columnText = "This Page showcases my animation. ranging from simple quick films to big spectacles. my style focuses on energy and the feel of the scene. I accomplish this through my dynamic and creative angles as well as background animation and complex effects animation.";

const videos = require.context('../WillData/Art/Animation', false);
const videoList = videos.keys().map(video=> videos(video));
console.log(videoList);

const Animation = () => {

    const [selectedImage, setSelectedImage] = useState(videoList[0]);

    const handleClick = (imageToSelect) => {
        setSelectedImage(imageToSelect);
    }

    return (
        <div className="animation">
            <LeftColumn text={columnText}/>
            <div className="rightSide">
                <div className="selectedImage">
                    <video controls src={selectedImage} alt='selected video'/>
                </div>
                <div className="otherImages">
                    <img onClick={handleClick.bind(this, img3)} src={img3} alt='image3'/>
                    <img onClick={handleClick.bind(this, img1)} src={img1} alt='image1'/>
                    <img onClick={handleClick.bind(this, img2)} src={img2} alt='image2'/>
                    {videoList.map((video,index)=>{
                        return <video onClick={handleClick.bind(this,video)} key={index} src={video} alt={`image-${index}`} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Animation;