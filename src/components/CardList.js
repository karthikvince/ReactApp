import React from 'react';
import Card from './Card.js'

const CardList = (props) =>{
    return(
        <div style={{margin : '5px'}}>
        {
          props.robotsArray.map((user,i) => {
          return (
          <Card key ={i} name={user.name} email={user.email} username={user.username}/>
          );
        })
        }
        </div>
)};

export default CardList;