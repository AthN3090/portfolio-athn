import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import Links from './components/Links/Links';
import Loading from './components/Loading/Loading';
import { useEffect, useState } from 'react';
function App() {
  const [loaderVisible, setLoaderVisible] = useState(true)
  useEffect(()=>{
    const onPageLoad = ()=>{
      console.log("page loaded")
      setLoaderVisible(false)
    }
    if(document.readyState === 'complete'){
      setLoaderVisible(false)
    }else{
      window.addEventListener('load', onPageLoad)
    }
    return ()=> window.removeEventListener('load', onPageLoad)
  },[])
  return (
    <div className="App">
      {loaderVisible ? (
        <Loading isVisible={loaderVisible} />
      ) : (
        <>
          <Navigation />
          <Home />
          <About />
          <Project />
          <Contact />
          <Links />
        </>
      )}
    </div>
  );
}

export default App;
