const Home = () => {
    const handleClick = (e) =>{
        console.log("hi hany",e);
    }
    const handleClickagain = (name,e) =>{
        console.log('Hi'+name,e.target);
    }
    
    return ( 
        <div className="home">
            <h2> Home PAGE</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>{handleClickagain('hanyyyy',e);}}>Click Me again</button>
        </div>
     );
}
 
export default Home;