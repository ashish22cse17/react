import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import React,{useState,useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Header from './pages/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';

import Footer from './pages/Footer';

const App = () => {

  const  [loading, setLoading] = useState(false);

  useEffect (() =>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },3)
  },[])

  return (
      <div className="App">
          {
            loading ?

                     <ClimbingBoxLoader

                    size={30}
                    color={"#36d7b7"}
                    loading={loading}
                   />


              :
                 (
                  <div className='app-container'>
                        <Sidebar />
                      <div className="content-container">
         
                        <Header id="Header" />
                        <Home id="Home" />
                        <Skills id="Skills" /> 
                        <Projects id="Projects" />
                        <Education id="Education" />
                        <Footer id="Footer" /> 
                      </div>
                    </div> )
          }
      </div>

  );
};

export default App;
