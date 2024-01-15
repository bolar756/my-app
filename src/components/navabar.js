import './navbar.css';
export const Navbar  = () =>{
    return(
      <header class="header" >
      <a href="" class="logo">martins</a>
      <nav class="navbar">
          <a href="#home" class="active">Home</a>
          <a href="#">About</a>
          <a href="#skills">Skills</a>
          <a href="#">Portfolio</a>
          <a href="#contact">Contact</a>
      </nav>
  </header>
    )
}

export default Navbar