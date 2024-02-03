import './App.css';
import {Navbar} from './components/navabar';
import {Banner} from './components/banner';
import {Skill} from './components/skills';
import {Contact} from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
