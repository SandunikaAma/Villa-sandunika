import React from "react";
function Map(){
    return(
        <div>
            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63349.31753784157!2d80.60866089999999!3d7.279088100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366efdf78b1a7%3A0x81ac4f86c4054d8b!2sThalwatta%2C%20Kandy!5e0!3m2!1sen!2slk!4v1714037401482!5m2!1sen!2slk"
                width="100%"
                height="300"
                style={{ border: 2 }}
                allowFullScreen=""
               
    ></iframe>
        </div>
    );

}
export default Map;