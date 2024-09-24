import './contact.css'
export const Contact = () =>{
    return(
     <section class='contact'>      
     <div  id="contact">
        <h1>Contact Martins</h1>
            <form action="mailto:bolarinwamartins79@gmail.com" encType='text/plain' method="post" autoComplete='true'>

                <div class="wrap">
                    <label for="username">Name</label>
                    <input type="text" name="name" id="username" /></div>
                 <div class="wrap">
                 <label for="username">Details</label>
                    <textarea name="details"    id=""></textarea></div>
                 <div class="wrap">
                    <label for="">Email</label>
                    <input type="email" name="" id="" /></div>
                 <div class="wrap">
                 <label for="username">Type of website</label>
                     <select name="type of website" id="" placeholder='me'>
                        <option value=""> Type of website</option>
                        <option value="Blog">Blog</option>
                        <option value="crpto">Cryptocurrency</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="landing">landing-page</option>
                        <option value="custom">Custom</option>
                     </select>
                 </div>
                 <div class="wrap">
                    <label for="">Budget</label>
                     <select name="" id="">
                        <option value="">Choose your Budget</option>
                        <option value="">$500</option>
                        <option value="">$500 -1000</option>
                        <option value="">Other</option>
                     </select>
                 </div>
                 <div class="wrap">
                    <label for="">Date</label>
                    <input type="date" name="" id=""/> </div>
                 <button type="submit">submit</button>
            </form>
        </div>
     </section>
    )
}
export default Contact