import { useNavigate, useParams } from "react-router-dom"
import { blogdata } from "./BlogData"
function BlogPost (){
    const {slug} = useParams()
    const blogpost = blogdata.find(post => post.slug === slug)
    const navigate = useNavigate()
    function returToBlog (){
        navigate('/blog')
    }
    return(
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returToBlog}>Volver a Blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    )
}
export {BlogPost}