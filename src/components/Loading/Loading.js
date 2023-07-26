import "./Loading.css"
function Loading({isVisible}) {
    
    return ( 
    <div className={isVisible ? "loading-screen" : "hide-loadscreen"}>
        <span className="loader-spinner"></span>
    </div> );
}

export default Loading;