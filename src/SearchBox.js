import React from 'react'

const SearchBox = ({SearchFild,serchChange}) =>{
return(

<div className='pa2'>
	<input 
	className='pa3 ba b--green bg-lightest-blue'
	type='search'
	placeholder='Serch Frinds' 
	onChange ={serchChange} 
	 />
</div>


);





}

export default SearchBox;