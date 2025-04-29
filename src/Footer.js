import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';


function Footer(){
    return(
        <div className="footer">
            <h1>Contact Details</h1>
            <div className="footer-sections">
            <div className="contact-info">
                <p >Email:info@gmail.com</p>
                <p >Phone:081-32165411</p>
                <p >Address:Thalwatta,Kandy</p>

            </div>
            <div className="contact-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://wa.me/94711234567" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>

            </div>
            <div className="footer-rights">
                <p>&copy; {new Date().getFullYear()} Villa-Sandunika. All Rights Reserved</p>
            </div>
            

        </div>
        
        </div>

    );

}
export default Footer;