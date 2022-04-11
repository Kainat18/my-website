import logo from './logo.svg';
import './App.css';
import Image from './components/photo';
import Name from './components/name';
import  Buttons from'./components/button1';
import About from './components/about';
import Interest from './components/interests';
import Footer from './components/footer';

function App() {
return(
<div>
<Image />
        <Name/>
        <Buttons/>
        <About/>
        <Interest />
        <Footer />
</div>
)

  
}

export default App;
