import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY : 'scroll' , margin : '5px' ,border : '3px' , height : '800px' }}>
          {props.children}
        </div>
    );
}

export default Scroll;