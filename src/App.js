import logo from './logo.svg';
import './App.css';
import Main from './components/MainPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Email from './components/Email.js'


function App() {
return(
<div>
     <Main />
     <Navbar />
     <About />
   <Projects />
   <Resume />
  <Email />
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