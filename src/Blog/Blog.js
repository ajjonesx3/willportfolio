import "./Blog.css";
import Post from'./Post/Post';


const samplePostData1 = {
    date: 'September 3rd',
    title: 'Sample Post #1',
    content: 'This week I made this art'
}
const samplePostData2 = {
    date: 'August 2nd',
    title: 'Sample Post #2',
    content: 'This week I made this other art'
}
const samplePostData3 = {
    date: 'June 8th',
    title: 'Sample post #3',
    content: 'This week you wouldn\'t believe I made this art'
}

const samplePost1 = <Post data={samplePostData1}/>
const samplePost2 = <Post data={samplePostData2}/>
const samplePost3 = <Post data={samplePostData3}/>

const Blog = () => {
    return (
        <div className="blog">
            <div className="blogNav">
                <ul className="blogNavList">
                    <li>All Posts</li>
                    <li>Links</li>
                    <li>Preproduction</li>
                    <li>The Vessel</li>
                    <li>Capstone</li>
                </ul>
            </div>
            <div className="posts">
                {samplePost1}
                {samplePost2}
                {samplePost3}
            </div>

        </div>
    )
}

export default Blog;