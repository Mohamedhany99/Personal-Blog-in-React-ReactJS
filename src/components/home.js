import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs").then(res => {
            return res.json();
        }).then((data)=> {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
        })    
        }, 1000);
        
    },[]);
    return ( 
        <div className="home">
            { isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <button onClick={() => setName('Hanyyyy')}>Change Name (for use effect hook)</button>
            <p>{ name }</p> */}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Hany`s Blogs"/> */}

        </div>
     );
}
 
export default Home;