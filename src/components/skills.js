import './skills.css';
import App from  '../App';
import faceb from '../assets/img/flask.jpg'

export const Skill = () =>{

    return (
     <div className='skills'>
        <h1>skills</h1>
        <div class="skills-bx">
            <b className='skillintro'><span>Lorem ipsum dolor sit amet, consectetur adipisicing
                 elit. Aperiam fugit unde reiciendis vel facilis aut 
                 numquam reprehenderit nemo a sint consequatur
                  necessitatibus ipsa delectus laborum, amet ad 
                  consectetur repudiandae omnis?
                  </span>
                  <span>Deleniti maiores explicabo doloribus architecto nisi
                     distinctio, ex labore nostrum, ad iste sunt natus incidunt
                      aut ea. Laborum odit, doloribus, asperiores repellat neque placeat tenetur officiis, eaque consectetur accusantium voluptas?</span>
                  <span>Repellendus aut accusantium doloribus iure voluptate expe
                    dita, asperiores minus, rerum amet recusandae laudantium aperiam cupiditate explicabo voluptatem, ratione dolores dolore voluptas fugit consectetur nostrum magni a?
                 Consectetur doloribus eligendi quis!</span>
                </b>
             <div class="skiset">
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
    );
}

export default Skill 