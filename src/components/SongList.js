import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends React.Component {

    renderSongsList() {
        return this.props.songs.map((song) => {
            return(
                <div className = "item" key = {song.title}>
                    <div className = "right floated content">
                        {/* 
                            Here we are calling selectSong action creator when user clicks button
                            so action creator create action
                            after action is created dispatcher which is inplemented by redux in-built will send a copy of the generated action to all reducers
                            then reducers will take the action and act accordingly
                        */}
                        <button className = "ui button primary" onClick = { () => this.props.selectSong(song) }>
                            Select
                        </button>
                    </div>
                    <div className = "content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "ui divided list">
                {this.renderSongsList()}
            </div>
        );
    }
}

//here state referes to songs,selectedsong from resucers or 
//state refers to all the information in the store
//this functions returns required props from the store
//after returning we can access them normally like props.songs
const mapStateToProps = (state) => {
    console.log(state);
    return { songs : state.songs };
}

//here we are using connect because we should connect to provider to get required props
//we are creating object inside connect because
//Redux didnt know selectSong is a action creator
//if we create obejcy saying that selectSong is action creator then selectSong just acts as a normal js function
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);