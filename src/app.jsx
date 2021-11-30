import React, {Component} from "react";
import axios from 'axios';

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

    render(){ 
        return ( 
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default App; 