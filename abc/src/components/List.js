import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./cards";

const List = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then((res)=>{
            setUsers(res.data.data);
        }).catch((err)=>{

        })
    }, []);

    return (
   
    
            users.map((item, index) => (
              <div onClick={()=>{
                    navigate('user', {state: {id: item.id}})
              }}>
                <Cards user={item}  />
                <br /> 
              </div>
                ))
        
    );
}

export default List;