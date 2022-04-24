import React from 'react';


const SearchBox = (props) =>{
   return(
       <input type= 'search' placeholder='Search Robo Friends' className='pa3 ba b--green bg-lightest-blue' onChange={props.search}/>
   );

} 

export default SearchBox;