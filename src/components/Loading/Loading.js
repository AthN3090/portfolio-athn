import loader from "./Loader.gif"
import "./Loading.css"
function Loading({isVisible}) {
    
    return ( 
    <div className={isVisible ? "loading-screen" : "hide-loadscreen"}>
        <img height="50px" src={loader} alt="Loading"></img>
    </div> );
}

export default Loading;