import {useState} from 'react';

const Gallery = ({media}) => {

    let mediaSources = [];

    mediaSources = media.map(source=>{
        return {
            source: require(`../../WillData/Blogs/Media/${source.name}`),
            type: source.type
        }
    })

    const [selectedMedia, setSelectedMedia] = useState(mediaSources[0]);

    const handleClick = (e, source) => {
        e.preventDefault();

        setSelectedMedia(source);
    }

    return (
        <div className="gallery">
            <div className="selectedMediaWrapper">
                <img src={selectedMedia} className="selectedMedia"/>
            </div>
            <div className="otherMedia">
                {mediaSources.map(source=> {
                    return (
                        <img onClick ={handleClick.bind(this, source)} src={source.source}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;