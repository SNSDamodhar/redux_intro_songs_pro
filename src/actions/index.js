
// Action Creator
//named export
export const selectSong = (song) => {
    //Always return an object
    //we should have type property inside the object
    //payload property is optional and will change accordingly to our intrest
    //By convention the value of type property should be in Capital words but its not mandatory
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//by default we export by using export default
//but in this file we can write several action creators 
//so for every action creator we should import as export default
//to avoid that we write export keyword before function
//it is called named export
//export default selectSong;