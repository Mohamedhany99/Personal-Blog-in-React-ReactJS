import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {
                console.log(res);
                if (!res.ok){
                    throw Error("could not fetch the data (backend problem)");
                }
            return res.json();
        }).then((data)=> {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            setError(err.message);
            setIsPending(false);
        } )    
        }, 1000);
        
    },[]);
    return ( 
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <button onClick={() => setName('Hanyyyy')}>Change Name (for use effect hook)</button>
            <p>{ name }</p> */}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Hany`s Blogs"/> */}

        </div>
     );
}
 
export default Home;