import './Post.css';
import Gallery from './Gallery';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Post = ({data}) => {

    const dataString = t => {
        const date = new Date(t);
        let ret = "";
        ret += `${months[date.getMonth()]} `;
        ret += `${date.getDate()}, `;
        ret += ` ${date.getFullYear()}`;
        
        return ret;
    }

    const parseContent = text => {

        let textArray = text.split(' ');
        let html = textArray.map((word,index)=>{
            if(word.slice(0,8)==="https://"){
                console.log('hurrah');
                return <a target="__blank" href={word}>{word} </a>
            } else {
                return <>{word} </>
            }
        })

        return html;
    }

    return (
        <div className="post">
            <div className="date">
                {dataString(data.uploadTime)}
            </div>
            <div className="title">
                {data.title}
            </div>
            <div className="content">
                {parseContent(data.textContent)}
            </div>
            <div className="mediaContent">
                {data.media ? <Gallery media={data.media} /> : undefined}
            </div>

        </div>
    )
}

export default Post;