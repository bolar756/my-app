import './navbar.css';
export const Navbar  = () =>{
    return(
      <header class="header" >
      <a href="" class="logo">martins</a>
      <nav class="navbar">
          <a href="#" class="active">Home</a>
          <a href="#skill">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#contact">Contact</a>
      </nav>
  </header>
    )
}

export default Navbar