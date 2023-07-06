import * as htmlToImage from 'html-to-image';
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';



const Profile = () => {
    const [user, setUser] = useState();
    let location = useLocation();

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${location.state.id}`)
        .then((res) => {
            console.log(res.data);
            setUser(res.data.data);
        })
        .catch((err)=>{

        })
    }, [])


   
    

    const handleDownload = () => {
        const element = document.getElementById('container');
    
        htmlToImage.toJpeg(element, { quality: 0.95 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });

      };
      
  return (
    user == null ? null :
    <>
    <div class="container" id = "container">
            <div class="card">
                <div class="image">
                    <img src={user.avatar} alt="image" />
                </div>
                <div class="content">
                    <h3>{user.first_name}</h3>
                    <h3>{user.last_name}</h3>
                    <h5 class="email">{user.email}</h5>
                </div>
            </div>
    </div>
    <button onClick={handleDownload}>Download</button>
    </>
  )
}

export default Profile