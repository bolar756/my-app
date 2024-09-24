import './home.css'
import {Banner} from '../components/banner';
import {Skill} from '../components/skills';
import {Contact} from '../components/contact';
import {Hero} from '../components/hero';
export const Home= () =>{
    return(
        <div class="hero">
        <Hero/>
        {/* <Banner/>
        <Skill/> */}
        </div>
    )
}
export default Home