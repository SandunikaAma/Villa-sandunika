import React,{useState} from 'react';

function Home(){
    const [image,setImage]=useState('./images/image1.jpeg');
    const [text,setText]=useState("Your peaceful hillside retreat in the heart of Kandy awaits");

    const handleChange=(newImage, newText)=>{
        setImage(newImage);
        setText(newText);
    }
    return(
        <div className='main-container'>
        <div className='main-fix' style={{backgroundImage: `url(${image})`}}>
            <div className='overlay'>
                <h1><b>Welcome</b>to the <i>Villa-Sandunika</i></h1>
                <p>{text}</p>
            </div>
        </div>
        <div className='main-option'>
            <button onClick={()=>{handleChange('./images/image1.jpeg', 'Discover the dreamy location surrounded by nature')}}>Dreamy Location</button>
            <button onClick={()=>{handleChange('./images/image2.jpeg','Experience luxury accommodation with all amenities')}}>Luxury Accommodation</button>
            <button onClick={()=>{handleChange('./images/image3.jpeg', 'Indulge in holistic wellness experiences')}}>Holistic Wellness</button>

        </div>
        </div>
    );
}
export default Home;