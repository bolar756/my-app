import './contact.css' 
export const Contact = () =>{
    return (
        <section id="contact">
        <div class="contact" id="contact">
            <h1> send Email  to Martins</h1>
            <form action="mailto:bolarinwamartins79@gmail.com" encType='text/plain' method="post" autoComplete='true'>
                <input type="text" name="name" id="" placeholder='username'/>
                 <br/><textarea name="details"  placeholder="details"   id=""></textarea>
                 <br/><input type="email" name="" id="" placeholder='email' />
                 <br/><select name="type of website" id="" placeholder='me'> 
                    <option value=""> type of website</option>
                    <option value="Blog">Blog</option>
                    <option value="crpto">Cryptocurrency</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="landing">landing-page</option>
                    <option value="custom">Custom</option>
                 </select>
                 <input type="date" name="" id=""/>
                 <button type="submit">submit</button>
            </form>
        </div>
        </section>
    )
}

export default Contact