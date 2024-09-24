import './navbar.css';
export const Navbar  = () =>{
  const  clicker = () => {
    document.querySelector('.menu').classList.toggle('bx-menu')
    document.querySelector('.menu').classList.toggle('bx-x')
    document.querySelector('#navbar').classList.toggle('sed')
    document.querySelector('.nav').classList.toggle('navbar')
    }
    return(
        <div class="nav">
        <a href="" class="logo">Martins</a>
        <ul class="sed" id="navbar" >
          <div class="redx">
          <div class="red">
            <a href="" class="logo">Martins</a>
            <div class="icon">
                     <i class="bx bx-menu menu" onClick={clicker}></i>
                    </div>
          </div>
          </div>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Projects</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
        <div class="icon">
         <i class="bx bx-menu menu" onClick={clicker}></i>
        </div>
      </div>
    )
}

export default Navbar