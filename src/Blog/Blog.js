import "./Blog.css";
import Post from'./Post/Post';

const requireContext = require.context('../WillData/Blogs',false,/\.json$/);

const jsonArray = requireContext.keys().map(file=> requireContext(file));

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
                {jsonArray.map(blogObj=><Post data={blogObj} /> )}
            </div>

        </div>
    )
}

export default Blog;