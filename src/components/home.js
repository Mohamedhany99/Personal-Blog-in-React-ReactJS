import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
            {/* <h2> Home PAGE</h2>
            <p> {name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e)=>{handleClickagain('hanyyyy',e);}}>Click Me again</button> */}
        </div>
     );
}
 
export default Home;