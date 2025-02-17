import "./Design.css";
import LeftColumn from '../LeftColumn/LeftColumn';

//import {useEffect,useState} from 'react';

const columnText = "This Page features my designs, ranging from promotional pieces, posters, to character designs. I mainly work digitally using a rougher texture to add a sketchy feel to my pieces with subtle color. I want to focus more on graphic design and using my skills to promote brands as well as design characters to be used in animation.";

const images = require.context('../WillData/Art/Design', false);
const imageList = images.keys().map(image=> images(image));

console.log(imageList);


const Design = () => {

    return (
        <div className="design">
            <LeftColumn text={columnText}/>
            <div className="rightSide">
                <div className="collage">
                    {imageList.map((image,index)=>{
                        return <img src={image} key={index} alt={`image-${index}`}/>
                    })}
                </div>          
            </div>
        </div>
    )
}

export default Design;