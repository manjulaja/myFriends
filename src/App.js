import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';




class App extends Component{
constructor(){
super()
this.state={
	robots : [],
	SearchFild:''
 }

}


componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
	 .then(users => this.setState({robots: users}));

}


onSerchChange = (event) => {
this.setState({SearchFild: event.target.value})
}

render() {

  const filterdRobort = this.state.robots.filter(robots=>{
  return robots.name.toLowerCase().includes(this.state.SearchFild.toLowerCase());


})



if(this.state.robots.length===0){

	return <h1 className='mw5 mw7-ns center bg-light-gray pa3 ph5-ns'> Lodding....</h1>

}
else{

return (
	<div className='tc'>

	<h1 className='f2'>My Frineds </h1>
	<SearchBox  serchChange={this.onSerchChange} />

	<Scroll>
     <CardList robots = {filterdRobort}/>
    </Scroll>

	</div>


	);
}
}


}

export default App;