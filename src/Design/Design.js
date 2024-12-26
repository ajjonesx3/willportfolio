import "./Design.css";
import LeftColumn from '../LeftColumn/LeftColumn';

import {useEffect,useState} from 'react';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const columnText = "This Page features my designs, ranging from promotional pieces, posters, to character designs. I mainly work digitally using a rougher texture to add a sketchy feel to my pieces with subtle color. I want to focus more on graphic design and using my skills to promote brands as well as design characters to be used in animation.";


const i1 = (<img src={img1} alt="img1"/>);
const i2 = (<img src={img2} alt="img2"/>);
const i3 = (<img src={img3} alt="img3"/>);
const i4 = (<img src={img4} alt="img4"/>);

const imagesArray = [i1,i2,i3,i4];

const randomSelection = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const makeRandomImages = n => {
    let ret = [];
    for(let i=0;i<n;i++){
        const newImage = randomSelection(imagesArray);
        ret.push(randomSelection(imagesArray));
    }
    return ret;
}

const Design = () => {

    const [collageImages,setCollageImages] = useState([]);
    useEffect(()=>{
        const newImages = makeRandomImages(25);
        setCollageImages(newImages);
    },[]);

    return (
        <div className="design">
            <LeftColumn text={columnText}/>
            <div className="rightSide">
                <div className="collage">
                    {collageImages}
                </div>          
            </div>
        </div>
    )
}

export default Design;