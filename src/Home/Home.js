import './Home.css';
import video from './mainVideo.mp4';
import thumbnail from './thumbnail.png'

const Home = () => {
    return (
        <div className="home">
            <div className="videoHolder">
                <video className="videoPlayer" width="55%" height="auto" src={video} poster={thumbnail} controls></video>
            </div>
        </div>
    )
}

export default Home;