import React from 'react';
import SongList from './SongList';

//it is named export so we place {} to say what we want to export specifically
//we named action creators file as index.js so we cannot mention ../actions/index 
//we just mention ../actions then framework will import index automatically
//if we name a file other than index.js in actions then we should give full path
import {selectSong} from '../actions';
import SongDetail from './SongDetail';

const App = () => {
    return(
        <div className = "ui container grid" style = {{marginTop: '10px'}}>
            <div className = "ui row">
                <div className = "column eight wide">
                    <SongList />
                </div>
                <div className = "column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;