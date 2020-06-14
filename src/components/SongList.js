import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              onClick={() => this.props.selectSong(song)}
              className='ui button primary'
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

// Configure the connect component
// Gets the data from the Redux store and run some calculations on it
// So that that data show up as props inside this component
// state will have all the data inside the redux store (reducers) - departments
const mapStateToProps = (state) => {
  //   This will show up as props inside the SongList
  return { songs: state.songs };
};

// Connect component to connect to the Provider component
// It will get data from the Store (reducers)
// Import the action creator selectSong and use it in the connect function
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
