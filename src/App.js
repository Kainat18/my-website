import logo from './logo.svg';
import './App.css';
import Main from './components/MainPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'

function App() {
return(
<div>
     <Main />
     <Navbar />
     <About />
   <Projects />
   <Resume />
   <Footer />
      
</div>
)

  
}

export default App;
/*  <Navbar />
<About />
<Projects />
<Resume />
/ <Footer />*/