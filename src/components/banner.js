import { useState,useEffect } from 'react';
import './banner.css';
import hedr from '../assets/img/logo-facebook.svg';
import twitter from '../assets/img/logo-linkedin.svg';
import facebook from '../assets/img/logo-instagram.svg'
import github from '../assets/img/logo-github.svg';
export const Banner  = () =>{
    const [loopnum, setloopnum] = useState(0)
    const [isDeleting, SetIsDeleting] = useState(false)
    const  toRotate = [ "web Developer", "web Designer", "Ai/ml exper", "SEO Expert"];
    const [text, setText] = useState('')
    const [delta, setDelta] =  useState(300 - Math.random() * 100);
    const period= 200;

    useEffect(() =>{
        let ticker = setInterval(() => {
          tick();
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
      let i = loopnum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length -1):fullText.substring(0, text.length +1);

      setText(updatedText);

      if (isDeleting){
           setDelta(prevDelta => prevDelta /2)
      }

      if (!isDeleting && updatedText === fullText){
        SetIsDeleting(true)
        setDelta(period);
      }

    else if(isDeleting &&updatedText === ''){
        SetIsDeleting(false)
        setloopnum(loopnum + 1); 
        setDelta(500)
      }
    }
   return (  
     <section class="home" id="home">
    <div class="home-content">
        <h1>hi i'm martins <span> i am a {text}</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Maiores, repudiandae 
            cumque, laboriosam blanditiis nihil 
            architecto unde ex repellendus expedita
             corporis facilis, alias vel nesciunt dolorem ipsa.
             Accusamus explicabo ipsa dolorem!
             <br/>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, assumenda necessitatibus. Omnis necessitatibus
             </p>
             <div class="btn-box">
                <a href="#contact">Hire Me</a>
                <a href="#">let's Talk</a>
             </div>
             <div class="home-sci">
        <a href=""><img src= {hedr} alt="facebook" width="20px"/></a>
        <a href="https://www.linkedin.com/in/bolarinwa-martins-329496283/">
          <img src={twitter} alt="" width="20px"/></a>
        <a href=""><img src={facebook} alt="" width="20px"/></a>
       <a href="https://github.com/bolar756/"><img src= {github} alt="github" width='20px'/></a>
    </div>
    </div>
    <span class="home-imgHover"></span>
</section>

   )
}
export default Banner