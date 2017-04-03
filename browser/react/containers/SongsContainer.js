import {connect} from 'react-redux';
import Songs from '../components/Songs';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  return {
    songs: ownProps.songs,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

const SongsContainer = connect(mapStateToProps, mapDispatchToProps)(Songs);

export default SongsContainer;
