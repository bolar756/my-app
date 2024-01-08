import './App.css';
import {Navbar} from './components/navabar';
import {Banner} from './components/banner'
import {Skill} from './components/skills'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skill/>
    </div>
  );
}

export default App;
