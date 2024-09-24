import './banner.css';
import user from '../assets/img/mear-removebg-preview-removebg-preview-removebg-preview.png'
export const Banner  = () =>{
   return (  
     <section class="home" id="home">
    <div class="home-content">
      <h1>A Year of Freelancing, Three Years of Web Development</h1>
        <p>
        As a passionate web developer with three years of experience and a year of freelancing under my belt,
         I specialize in creating unique and innovative websites and web applications. My portfolio showcases a diverse range of projects, 
         including e-commerce platforms, geo-tracking solutions for logistics companies,
         exchange websites, payment gateway integrations, pharmacy websites, diagnostic portals for companies, and school websites.
        </p>
             <div class="btn-box">
                <a href="#contact">Hire Me</a>
                <a href="#">let's Talk</a>
             </div>
    </div>
    <div class="img">
      <img src={user} alt=""/>
    </div>
</section>

   )
}
export default Banner