import React from 'react';

const ContactUs = () => {
  return (
    <>
      <div>
        <h1>
          Contact Us
        </h1>
        <h2>Let's start a conversation!</h2>
        </div>
    <table>
     
      
      <div class="container">
        <label for="Fname"><b>Full Name</b></label>
        <input type="text" placeholder="Enter Full Name" name="Fname" required/>

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required/>
        <label for="mess"><b>Message</b></label>
        <input type="text" placeholder="Enter Message" name="mess" required/>
        
        </div>

        
     
      <div>
      <button type="submit" onClick>Contact Us</button>
        
      </div>
    </table>
      <div>
        <img scr = "https://www.shutterstock.com/image-photo/domestic-shorthaired-cat-perched-on-low-2110981475 " />

        <div>
          <a href= "https://www.instagram.com/ "> Instagram</a>
          <a href= " https://www.facebook.com/"> Facebook</a>
        </div>
      </div>

 </>
   
  );
}

export default ContactUs;