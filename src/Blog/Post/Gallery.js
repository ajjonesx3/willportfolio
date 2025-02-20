import {useState} from 'react';


const videoTypes = ["video/mp4", "video/webm", "video/ogg"];
const imageTypes = ["image/apng", "image/avif", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp"];

const Gallery = ({media}) => {

    let mediaSources = [];

    mediaSources = media.map(source=>{
        return {
            source: require(`../../WillData/Blogs/Media/${source.name}`),
            type: source.type
        }
    })

    const [selectedMedia, setSelectedMedia] = useState(mediaSources[0]);

    const handleClick = (source) => {

        setSelectedMedia(source);
    }

    const isVideo = (source) => {
       return videoTypes.includes(source.type);
    }

    const otherMediaStyle = {
        display: mediaSources.length > 1 ? "flex" : "none"
    }

    return (
        <div className="gallery">
            <div className="selectedMediaWrapper">
                {isVideo(selectedMedia) ? <video controls src={selectedMedia.source} className="selectedMedia" /> : <img src={selectedMedia.source} className="selectedMedia" />}
            </div>
            <div className="otherMedia" style={otherMediaStyle}>
                {mediaSources.map(source=> {
                    return (
                        isVideo(source) ? <video conrols onClick={handleClick.bind(this, source)} src={source.source} /> : <img onClick={handleClick.bind(this, source)} src={source.source} />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;