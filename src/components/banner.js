import { useState,useEffect } from 'react';
import './banner.css';
import hedr from '../assets/img/logo.png';
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
    <div className="canner">
    <h1>welcome to my portfolio</h1>
    <h2> i am a <span className='wrap'>{text}</span></h2>
    <div class="red">
        <p className='menn'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure cupiditate maiores facere consequuntur porro neque, minima voluptates iste quidem harum nulla facilis unde in id veritatis, quisquam, magni eligendi!
            Laboriosam vel minima dolor unde, voluptatum ab earum, illo inventore eos explicabo cum voluptatibus voluptate doloribus dolorem. Eaque, adipisci illum. Porro laborum ducimus, nemo consequatur totam asperiores quam similique enim.
            Dolorem nesciunt, molestiae facilis, non quaerat unde tempore ratione nisi quisquam modi cum rem? Dolores nisi autem, veritatis provident aperiam, porro, animi officia repudiandae eum laudantium necessitatibus voluptatibus rerum neque.
            <br/><button>Let's connect</button> <button> call me</button>
            <br/><div class="navs" >
                <a href="#">Facebook</a>
                <a href="#">fiverr</a>
                <a href="#">Upwork</a>
                <a href="#">Instagram</a>
                <a href="#">Gmail</a>
            </div>
        </p>
        <p className='meds'>
            <img src= {hedr}  alt="portfolio logo" className='mer'/>
        </p>
        </div>
    </div>
   )
}
function red(){
    document.querySelector('p').innerText="dea"
}
export default Banner