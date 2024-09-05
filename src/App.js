import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title = 'Textutiles' about = 'About Us '/>
    <div className="container my-4">
    <TextForm heading = 'Enter your text'/>
    {/* <About/> */}
    </div>
    </>
    );
  }

export default App;
