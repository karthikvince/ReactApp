import React,{Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            roboFriend : [],
            searchField : ''
        }
    }
    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => {
            return Response.json();
        })
        .then(setUser => {this.setState({roboFriend: setUser})});
        
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value})
    }

    render(){
        const filteredRobo = this.state.roboFriend.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            })
        if(this.state.roboFriend.length === 0){
            return (
            <h1 className='tc f1'>Loading Robo Friends</h1>
            );
        }
        else {
        return(
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox search = {this.onSearchChange}/>
            <Scroll>
            <CardList robotsArray = {filteredRobo}/>
            </Scroll>
            </div>
        );}
    }
    

}

export default App;