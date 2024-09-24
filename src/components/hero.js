import './hero.css'; 
import RotatingText from './torotate';
import { useState,useEffect } from 'react';

export const Hero = () =>{
  const toRotate =['web developer', 'ai/ml expert']
  const onButtonClick = () => {
    fetch("martins_resume.pdf").then((response) => {
        response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "SamplePDF.pdf";
            alink.click();
        });
    });
};
    return(
        <section class="hero__banner">
            <div class="hero">
            <h1>martins bolarinwa Full-stack solutions, tailored to you.</h1>
            <h3>Passionate <span><RotatingText textArray={toRotate} delay={3000} /></span> with 3+ years of experience specializing in crafting unique and innovative websites. 
            Proficient in Django, React, and other modern technologies. 
            Skilled at overcoming challenges and delivering high-quality solutions. Let's build your next project together!</h3>
            <div class="buttons">
              <a href="/contact">Contact</a>
              <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </div>
            <div class="contact_icons">
            <i className='bx bxl-facebook-circle' onClick={() => window.open('https://www.facebook.com/profile.php?id=248589805006831')}></i>
<i className='bx bxl-whatsapp' onClick={() => window.open('https://wa.me/+2347089744069')}></i>
<i className='bx bxl-linkedin' onClick={() => window.open('https://www.linkedin.com/in/bolarinwa-m-329496283')}></i>
<i className='bx bxl-github' onClick={() => window.open('https://github.com/bolar756')}></i>
            </div>
            </div>
        </section>
    )
}
export default Hero