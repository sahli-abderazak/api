import React from 'react'
import {  Card } from 'react-bootstrap'

function UserCard({user}) {
    return <div className="user-card" >   
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
       {user.email}
       <br/>
       {user.phone}
      </Card.Text>
    </Card.Body>
  </Card>
    </div>;
  }
  
  export default UserCard;
  