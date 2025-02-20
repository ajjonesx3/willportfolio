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

        if(!text){
            return "";
        }

        const urlRegex = /(https?:\/\/[^\s]+)/g;


        return text.split("\n").map((line, index) => (
            <p key={index}>
              {line.split(urlRegex).map((part, i) =>
                urlRegex.test(part) ? (
                  <a key={i} href={part} target="_blank" rel="noopener noreferrer">
                    {part}
                  </a>
                ) : (
                  part
                )
              )}
            </p>
          ));
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
                {data.media.length > 0 ? <Gallery media={data.media} /> : undefined}
            </div>

        </div>
    )
}

export default Post;