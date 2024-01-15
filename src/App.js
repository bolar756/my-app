import './App.css';
import {Navbar} from './components/navabar';
import {Banner} from './components/banner';
import {Skill} from './components/skills';
import {Contact} from './components/contact';

function App() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav a');
  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
          if(top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
          };
      });
  };
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
