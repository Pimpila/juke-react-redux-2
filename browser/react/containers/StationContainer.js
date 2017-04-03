import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';

// state is just global state. ownProps are props on StationContainer. And we have .params.genre b/c of our route path ("/stations/:genre")?
function mapStateToProps(state, ownProps) {
  console.log('i am here')
  return {
    genre: ownProps.params.genre,
    songs: state.songs.filter(song => song.genre === ownProps.params.genre).map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

// this allows us to render <Station /> it's implicit now.
const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
