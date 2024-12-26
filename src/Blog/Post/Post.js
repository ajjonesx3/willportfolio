import './Post.css';

const Post = ({data}) => {
    return (
        <div className="post">
            <div className="date">
                {data.date}
            </div>
            <div className="title">
                {data.title}
            </div>
            <div className="content">
                {data.content}
            </div>

        </div>
    )
}

export default Post;