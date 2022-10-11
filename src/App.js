import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import Links from './components/Links/Links';
function App() {

  // useEffect(()=>{
  //   window.addEventListener('scroll', ()=>{
  //     console.log("HELLO")
  //   })
  // })
  return (
    <div className="App">
      <Navigation/>
       <Home/>
      <About />
      <Project/>
      <Contact />
      <Links />
    </div>
  );
}

export default App;
