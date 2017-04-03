import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';

// state is just global state, right? ownProps are props on StationContainer? And we have .params.genre b/c of our route path ("/stations/:genre")?
function mapStateToProps(state, ownProps) {
  return {
    genre: ownProps.params.genre,
    songs: state.songs.filter(song => song.genre === ownProps.params.genre).map(convertSong)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
