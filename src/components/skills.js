import './skills.css';
import App from  '../App';
import faceb from '../assets/img/flask.jpg'

export const Skill = () =>{

    return (
      <section id='skills'>
     <div className='skills' >
       <h1>skills</h1>
        <hr/>
        <div class="skills-bx">
            <b className='skillintro'>
               <p> 
               <b>
                  Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. Cumque 
                  praesentium vel, inventore magni, tempora 
                  animi similique vero corporis iure voluptates 
                  eos aut sit minima 
                  ad quae earum quisquam pariatur temporibus?
                  </b>
                  </p>
               <p>
               <b>Lorem, ipsum dolor sit amet consectetur
                   adipisicing elit. Quaerat fuga sapiente ullam
                    voluptatum libero voluptatibus commodi accusamus
                     esse exercitationem nobis minus impedit debitis aspernatur illum, 
                  tempore, tempora, quidem quae? Cumque.
                  </b>
                  </p>
               <p>
               <b>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Cum repellendus natus iusto
                   pariatur! Rem ut magni temporibus cum molestiae 
                   ullam, vitae molestias facere! Officia doloremque
                   quisquam suscipit voluptatum rerum sint?
                  </b>
                   </p>

               <p>
                  <b>Lorem ipsum dolor sit amet 
                  consectetur, adipisicing elit. Voluptate,
                   velit. Aliquam quis error cum quidem in? 
                   Accusantium dignissimos tenetur distinctio quia 
                   tempora ex, vel adipisci, 
                  ea libero numquam ullam necessitatibus.
                  </b></p>
                </b>
             <div class="skiset" hidden>
                <h1>i am good at </h1>
                 <div class="spent">

                 </div>
                 <div class="spent">
                    <a ref={App} href="App">men</a>
                    <br/>
                    <img src={faceb} alt="flask.jpg"/>
                    <div className='p'>above is aproject that </div>
                 </div>
                 <div class="spent"></div>
                 <div class="spent"></div>
                </div>    
        </div>
     </div>
     </section>
    );
}

export default Skill 