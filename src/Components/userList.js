import React from 'react';
import Axios from 'axios'
import {useState,useEffect} from 'react'
import UserCard from './UserCard';

function UserList() {

    const [data , setData] = useState ([])

const userData = () => { 
    Axios.get ('https://jsonplaceholder.typicode.com/users')
    .then ( (response) =>  setData (response.data)  )
    .catch ( (error) => console.log (error))
}

useEffect (() => { userData();}, [])




  return <div className="user"> 
        {data.map ( (el,i) => <UserCard   
         user ={el} key={i}   />    )}
        </div>;
}

export default UserList;
