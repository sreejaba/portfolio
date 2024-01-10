import { useEffect, useState } from 'react';
import Aaaaa from './Aaaaa';
import About from './About';
import './App.css';
import Hello from './Hello';
import Loding from './Loding';
import NavB from './NavB';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';





function App() {

  const [Load,setLoad] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoad(false)
    },1950)
    
  }, []);

  return (
    <>
    {Load?
  <Loding></Loding>: 
    
    <div className="App">
     

    <img className='background'style={{width:'354vh', height:'200vh', position:'fixed'} } src='https://www.amd.com/content/dam/amd/en/images/backgrounds/abstract/1579650-twa-ai.jpg'/>


  <NavB></NavB>
  <Hello/>
  <About/>
  <Skills/>
  <Projects></Projects>
  <Resume></Resume>
  
      <Aaaaa></Aaaaa>

    </div>
    
    }
    </>
  );
}

export default App;
