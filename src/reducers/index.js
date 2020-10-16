import { combineReducers } from 'redux';



//Reducers

//here we are creating static list of songs to understand the project
const songsReducer = () => {
    return [
        {
            title: 'No Scurbs',
            duration: '4:05'
        },
        {
            title: 'Closer',
            duration: '3:25'
        },
        {
            title: 'Love Me Like you Do',
            duration: '4:10'
        },
        {
            title: 'Senorita',
            duration: '3:59'
        }
    ]
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

