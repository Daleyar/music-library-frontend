import React, {Component} from "react";
import axios from 'axios';
import MusicTable from "./components/MusicTable/musicTable";
import FilterSearch from "./components/SearchBar/searchBar";
import NavBar from "./components/NavBar/navBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount(){
        this.getSongs();
    }

    async getSongs(){
        try{
            let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
            this.setState({
                songs:response.data
            });
        }
        catch (error) {
            console.log('Error in API call:', error);
        }
    }

    async getSongById(songID){
        try{
            let response = axios.get(`http://www.devcodecampmusiclibrary.com/api/music/${songID}`);
            this.setState({
                songs:response.data
            });
        }
        catch (error) {
            console.log('Error in API call:', error);
        }
    }

    filterSongs = (filtered) => {
        this.setState({
            songs:filtered
        })
    }

    render(){ 
        return ( 
            <React.Fragment>
                <NavBar/>
                <FilterSearch search={this.state.songs} filterAction={this.filterSongs}/>
                <MusicTable song={this.state.songs}/>
            </React.Fragment>
        );
    }
}

export default App; 