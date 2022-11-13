import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const [name,setName] = useState("Hany");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    },[name]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('Hanyyyy')}>Change Name (for use effect hook)</button>
            <p>{ name }</p>
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Hany`s Blogs"/> */}

        </div>
     );
}
 
export default Home;