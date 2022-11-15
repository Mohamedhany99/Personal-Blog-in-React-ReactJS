import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs").then(res => {
            return res.json();
        }).then((data)=> {
            console.log(data);
            setBlogs(data);
        })
    },[]);
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <button onClick={() => setName('Hanyyyy')}>Change Name (for use effect hook)</button>
            <p>{ name }</p> */}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Hany`s Blogs"/> */}

        </div>
     );
}
 
export default Home;