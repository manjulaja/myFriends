import React from 'react';


const Card = ({name,email,id}) => {

//const {name,email,id} = props;

return(


<div className='tc bg-light-green dib pr3 pa3 ma2 grow bw2 shadow-5'>
   <img alt='robort'  src={`https://robohash.org/${id}?200x200`} />
    <div>
    <h2>{ name } </h2>
     <p>
  Departmnet
   </p>
    <p>
    Designation
   </p>
    <p>
    { email}
   </p>
   <p>
   {id}  
  </p>
    <p>
  Mobile No
  </p>
    <p>
  Location
  </p>
 </div>
</div>
);

}

export default Card;