import './navbar.css';
export const Navbar  = () =>{
    return(
        <div class="nav">
        <a href="" class="logo">Martins</a>
        <span id="icon">
          <i class='bx bx-menu'  id ="menu" onclick="close()"></i>
        </span>
        <span className='span' >
          <i class='bx bx-sun' id="sun"></i></span>
        <ul class="sed" id="navbar" >
          <li><a href="">Blog</a></li>
          <li><a href="">signup</a></li>
          <li><a href="">login</a></li>
          <li><a href="">projects</a></li>
        </ul>
      </div>
    )
}

export default Navbar